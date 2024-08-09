var hb = Object.defineProperty;
var mb = (e, t, n) => t in e ? hb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $r = (e, t, n) => mb(e, typeof t != "symbol" ? t + "" : t, n);
import * as x from "react";
import Le, { forwardRef as Sp, createElement as Dc, useEffect as Kn, useLayoutEffect as gb, useState as ti, useRef as yb, createContext as vb, useContext as bb } from "react";
import * as Pl from "react-dom";
import xb from "react-dom";
var ot = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Cp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jc = { exports: {} }, Oi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bu;
function wb() {
  if (Bu) return Oi;
  Bu = 1;
  var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, c, l) {
    var u, d = {}, p = null, h = null;
    l !== void 0 && (p = "" + l), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (u in c) r.call(c, u) && !o.hasOwnProperty(u) && (d[u] = c[u]);
    if (s && s.defaultProps) for (u in c = s.defaultProps, c) d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: t, type: s, key: p, ref: h, props: d, _owner: i.current };
  }
  return Oi.Fragment = n, Oi.jsx = a, Oi.jsxs = a, Oi;
}
var Ri = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wu;
function _b() {
  return Wu || (Wu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, g = "@@iterator";
    function b(R) {
      if (R === null || typeof R != "object")
        return null;
      var ne = m && R[m] || R[g];
      return typeof ne == "function" ? ne : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(R) {
      {
        for (var ne = arguments.length, be = new Array(ne > 1 ? ne - 1 : 0), Ne = 1; Ne < ne; Ne++)
          be[Ne - 1] = arguments[Ne];
        S("error", R, be);
      }
    }
    function S(R, ne, be) {
      {
        var Ne = w.ReactDebugCurrentFrame, Ke = Ne.getStackAddendum();
        Ke !== "" && (ne += "%s", be = be.concat([Ke]));
        var nt = be.map(function(Ge) {
          return String(Ge);
        });
        nt.unshift("Warning: " + ne), Function.prototype.apply.call(console[R], console, nt);
      }
    }
    var A = !1, E = !1, N = !1, P = !1, U = !1, ue;
    ue = Symbol.for("react.module.reference");
    function ge(R) {
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
      if (typeof R.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
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
            var Ke = R, nt = Ke._payload, Ge = Ke._init;
            try {
              return Q(Ge(nt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, se = 0, j, fe, _e, J, L, q, ye;
    function I() {
    }
    I.__reactDisabledLog = !0;
    function X() {
      {
        if (se === 0) {
          j = console.log, fe = console.info, _e = console.warn, J = console.error, L = console.group, q = console.groupCollapsed, ye = console.groupEnd;
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
              value: ye
            })
          });
        }
        se < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = w.ReactCurrentDispatcher, G;
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
              Ne = kt;
            }
            Reflect.construct(R, [], Ge);
          } else {
            try {
              Ge.call();
            } catch (kt) {
              Ne = kt;
            }
            R.call(Ge.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (kt) {
            Ne = kt;
          }
          R();
        }
      } catch (kt) {
        if (kt && Ne && typeof kt.stack == "string") {
          for (var Ye = kt.stack.split(`
`), St = Ne.stack.split(`
`), ht = Ye.length - 1, gt = St.length - 1; ht >= 1 && gt >= 0 && Ye[ht] !== St[gt]; )
            gt--;
          for (; ht >= 1 && gt >= 0; ht--, gt--)
            if (Ye[ht] !== St[gt]) {
              if (ht !== 1 || gt !== 1)
                do
                  if (ht--, gt--, gt < 0 || Ye[ht] !== St[gt]) {
                    var Yt = `
` + Ye[ht].replace(" at new ", " at ");
                    return R.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", R.displayName)), typeof R == "function" && ve.set(R, Yt), Yt;
                  }
                while (ht >= 1 && gt >= 0);
              break;
            }
        }
      } finally {
        le = !1, Y.current = nt, re(), Error.prepareStackTrace = Ke;
      }
      var zr = R ? R.displayName || R.name : "", lr = zr ? ie(zr) : "";
      return typeof R == "function" && ve.set(R, lr), lr;
    }
    function Oe(R, ne, be) {
      return ee(R, !1);
    }
    function He(R) {
      var ne = R.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function ct(R, ne, be) {
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
    var et = Object.prototype.hasOwnProperty, Ve = {}, C = w.ReactDebugCurrentFrame;
    function T(R) {
      if (R) {
        var ne = R._owner, be = ct(R.type, R._source, ne ? ne.type : null);
        C.setExtraStackFrame(be);
      } else
        C.setExtraStackFrame(null);
    }
    function D(R, ne, be, Ne, Ke) {
      {
        var nt = Function.call.bind(et);
        for (var Ge in R)
          if (nt(R, Ge)) {
            var Ye = void 0;
            try {
              if (typeof R[Ge] != "function") {
                var St = Error((Ne || "React class") + ": " + be + " type `" + Ge + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Ge] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw St.name = "Invariant Violation", St;
              }
              Ye = R[Ge](ne, Ge, Ne, be, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ht) {
              Ye = ht;
            }
            Ye && !(Ye instanceof Error) && (T(Ke), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ne || "React class", be, Ge, typeof Ye), T(null)), Ye instanceof Error && !(Ye.message in Ve) && (Ve[Ye.message] = !0, T(Ke), _("Failed %s type: %s", be, Ye.message), T(null));
          }
      }
    }
    var f = Array.isArray;
    function O(R) {
      return f(R);
    }
    function k(R) {
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
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", k(R)), M(R);
    }
    var W = w.ReactCurrentOwner, de = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, Me, qe;
    qe = {};
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
    function y(R, ne) {
      if (typeof R.ref == "string" && W.current && ne && W.current.stateNode !== ne) {
        var be = Q(W.current.type);
        qe[be] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Q(W.current.type), R.ref), qe[be] = !0);
      }
    }
    function $(R, ne) {
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
    function K(R, ne) {
      {
        var be = function() {
          Me || (Me = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        be.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: be,
          configurable: !0
        });
      }
    }
    var H = function(R, ne, be, Ne, Ke, nt, Ge) {
      var Ye = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: R,
        key: ne,
        ref: be,
        props: Ge,
        // Record the component responsible for creating this element.
        _owner: nt
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
        value: Ne
      }), Object.defineProperty(Ye, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ke
      }), Object.freeze && (Object.freeze(Ye.props), Object.freeze(Ye)), Ye;
    };
    function te(R, ne, be, Ne, Ke) {
      {
        var nt, Ge = {}, Ye = null, St = null;
        be !== void 0 && (Z(be), Ye = "" + be), ft(ne) && (Z(ne.key), Ye = "" + ne.key), Ee(ne) && (St = ne.ref, y(ne, Ke));
        for (nt in ne)
          et.call(ne, nt) && !de.hasOwnProperty(nt) && (Ge[nt] = ne[nt]);
        if (R && R.defaultProps) {
          var ht = R.defaultProps;
          for (nt in ht)
            Ge[nt] === void 0 && (Ge[nt] = ht[nt]);
        }
        if (Ye || St) {
          var gt = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Ye && $(Ge, gt), St && K(Ge, gt);
        }
        return H(R, Ye, St, Ke, Ne, W.current, Ge);
      }
    }
    var ae = w.ReactCurrentOwner, Se = w.ReactDebugCurrentFrame;
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
    function mt(R) {
      return "";
    }
    var tt = {};
    function zo(R) {
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
    function jn(R, ne) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var be = zo(ne);
        if (tt[be])
          return;
        tt[be] = !0;
        var Ne = "";
        R && R._owner && R._owner !== ae.current && (Ne = " It was passed a child from " + Q(R._owner.type) + "."), he(R), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', be, Ne), he(null);
      }
    }
    function Fn(R, ne) {
      {
        if (typeof R != "object")
          return;
        if (O(R))
          for (var be = 0; be < R.length; be++) {
            var Ne = R[be];
            Ie(Ne) && jn(Ne, ne);
          }
        else if (Ie(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Ke = b(R);
          if (typeof Ke == "function" && Ke !== R.entries)
            for (var nt = Ke.call(R), Ge; !(Ge = nt.next()).done; )
              Ie(Ge.value) && jn(Ge.value, ne);
        }
      }
    }
    function ab(R) {
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
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ke || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sb(R) {
      {
        for (var ne = Object.keys(R.props), be = 0; be < ne.length; be++) {
          var Ne = ne[be];
          if (Ne !== "children" && Ne !== "key") {
            he(R), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ne), he(null);
            break;
          }
        }
        R.ref !== null && (he(R), _("Invalid attribute `ref` supplied to `React.Fragment`."), he(null));
      }
    }
    var Vu = {};
    function Uu(R, ne, be, Ne, Ke, nt) {
      {
        var Ge = ge(R);
        if (!Ge) {
          var Ye = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var St = mt();
          St ? Ye += St : Ye += lt();
          var ht;
          R === null ? ht = "null" : O(R) ? ht = "array" : R !== void 0 && R.$$typeof === t ? (ht = "<" + (Q(R.type) || "Unknown") + " />", Ye = " Did you accidentally export a JSX literal instead of a component?") : ht = typeof R, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ht, Ye);
        }
        var gt = te(R, ne, be, Ke, nt);
        if (gt == null)
          return gt;
        if (Ge) {
          var Yt = ne.children;
          if (Yt !== void 0)
            if (Ne)
              if (O(Yt)) {
                for (var zr = 0; zr < Yt.length; zr++)
                  Fn(Yt[zr], R);
                Object.freeze && Object.freeze(Yt);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fn(Yt, R);
        }
        if (et.call(ne, "key")) {
          var lr = Q(R), kt = Object.keys(ne).filter(function(pb) {
            return pb !== "key";
          }), Rs = kt.length > 0 ? "{key: someKey, " + kt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Vu[lr + Rs]) {
            var db = kt.length > 0 ? "{" + kt.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Rs, lr, db, lr), Vu[lr + Rs] = !0;
          }
        }
        return R === r ? sb(gt) : ab(gt), gt;
      }
    }
    function cb(R, ne, be) {
      return Uu(R, ne, be, !0);
    }
    function lb(R, ne, be) {
      return Uu(R, ne, be, !1);
    }
    var ub = lb, fb = cb;
    Ri.Fragment = r, Ri.jsx = ub, Ri.jsxs = fb;
  }()), Ri;
}
process.env.NODE_ENV === "production" ? jc.exports = wb() : jc.exports = _b();
var v = jc.exports, Fc = { exports: {} }, ks = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hu;
function Eb() {
  if (Hu) return ks;
  Hu = 1;
  var e = Le;
  function t(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, i = e.useRef, o = e.useEffect, a = e.useMemo, s = e.useDebugValue;
  return ks.useSyncExternalStoreWithSelector = function(c, l, u, d, p) {
    var h = i(null);
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
      var w = !1, _, S, A = u === void 0 ? null : u;
      return [function() {
        return b(l());
      }, A === null ? void 0 : function() {
        return b(A());
      }];
    }, [l, u, d, p]);
    var g = r(c, h[0], h[1]);
    return o(function() {
      m.hasValue = !0, m.value = g;
    }, [g]), s(g), g;
  }, ks;
}
var Ts = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qu;
function Sb() {
  return qu || (qu = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Le;
    function t(l, u) {
      return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
    }
    var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, i = e.useRef, o = e.useEffect, a = e.useMemo, s = e.useDebugValue;
    function c(l, u, d, p, h) {
      var m = i(null), g;
      m.current === null ? (g = {
        hasValue: !1,
        value: null
      }, m.current = g) : g = m.current;
      var b = a(function() {
        var A = !1, E, N, P = function(pe) {
          if (!A) {
            A = !0, E = pe;
            var V = p(pe);
            if (h !== void 0 && g.hasValue) {
              var Q = g.value;
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
        }, ge = U === null ? void 0 : function() {
          return P(U());
        };
        return [ue, ge];
      }, [u, d, p, h]), w = b[0], _ = b[1], S = r(l, w, _);
      return o(function() {
        g.hasValue = !0, g.value = S;
      }, [S]), s(S), S;
    }
    Ts.useSyncExternalStoreWithSelector = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ts;
}
process.env.NODE_ENV === "production" ? Fc.exports = Eb() : Fc.exports = Sb();
var Cb = Fc.exports, zt = (
  // prettier-ignore
  // @ts-ignore
  "default" in x ? x.default : x
), Yu = Symbol.for("react-redux-context"), Gu = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Ab() {
  if (!zt.createContext)
    return {};
  const e = Gu[Yu] ?? (Gu[Yu] = /* @__PURE__ */ new Map());
  let t = e.get(zt.createContext);
  return t || (t = zt.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(zt.createContext, t)), t;
}
var Xn = /* @__PURE__ */ Ab(), Ob = () => {
  throw new Error("uSES not initialized!");
};
function Nl(e = Xn) {
  return function() {
    const n = zt.useContext(e);
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return n;
  };
}
var Ap = /* @__PURE__ */ Nl(), Op = Ob, Rb = (e) => {
  Op = e;
}, kb = (e, t) => e === t;
function Tb(e = Xn) {
  const t = e === Xn ? Ap : Nl(e), n = (r, i = {}) => {
    const { equalityFn: o = kb, devModeChecks: a = {} } = typeof i == "function" ? { equalityFn: i } : i;
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
              if (!o(b, S)) {
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
                    state: g,
                    selected: b,
                    selected2: S,
                    stack: A
                  }
                );
              }
            }
            if ((w === "always" || w === "once" && p.current) && b === g) {
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
          return b;
        }
      }[r.name],
      [r, u, a.stabilityCheck]
    ), m = Op(
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
var yr = /* @__PURE__ */ Tb();
function Pb(e) {
  e();
}
function Nb() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Pb(() => {
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
var Zu = {
  notify() {
  },
  get: () => []
};
function Mb(e, t) {
  let n, r = Zu, i = 0, o = !1;
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
    return o;
  }
  function u() {
    i++, n || (n = e.subscribe(c), r = Nb());
  }
  function d() {
    i--, n && i === 0 && (n(), n = void 0, r.clear(), r = Zu);
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
var Ib = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Db = typeof navigator < "u" && navigator.product === "ReactNative", jb = Ib || Db ? zt.useLayoutEffect : zt.useEffect;
function Fb({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: o = "once"
}) {
  const a = zt.useMemo(() => {
    const l = Mb(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: i,
      identityFunctionCheck: o
    };
  }, [e, r, i, o]), s = zt.useMemo(() => e.getState(), [e]);
  jb(() => {
    const { subscription: l } = a;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), s !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [a, s]);
  const c = t || Xn;
  return /* @__PURE__ */ zt.createElement(c.Provider, { value: a }, n);
}
var Rp = Fb;
function kp(e = Xn) {
  const t = e === Xn ? Ap : (
    // @ts-ignore
    Nl(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Lb = /* @__PURE__ */ kp();
function zb(e = Xn) {
  const t = e === Xn ? Lb : kp(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var yi = /* @__PURE__ */ zb();
Rb(Cb.useSyncExternalStoreWithSelector);
function xt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var $b = typeof Symbol == "function" && Symbol.observable || "@@observable", Ku = $b, Ps = () => Math.random().toString(36).substring(7).split("").join("."), Vb = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Ps()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Ps()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ps()}`
}, vr = Vb;
function Ao(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Ub(e) {
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
  if (Hb(e))
    return "date";
  if (Wb(e))
    return "error";
  const n = Bb(e);
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
function Bb(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Wb(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Hb(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Wn(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Ub(e)), t;
}
function Tp(e, t, n) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? xt(2) : `Expected the root reducer to be a function. Instead, received: '${Wn(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? xt(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? xt(1) : `Expected the enhancer to be a function. Instead, received: '${Wn(n)}'`);
    return n(Tp)(e, t);
  }
  let r = e, i = t, o = /* @__PURE__ */ new Map(), a = o, s = 0, c = !1;
  function l() {
    a === o && (a = /* @__PURE__ */ new Map(), o.forEach((b, w) => {
      a.set(w, b);
    }));
  }
  function u() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? xt(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function d(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? xt(4) : `Expected the listener to be a function. Instead, received: '${Wn(b)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? xt(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let w = !0;
    l();
    const _ = s++;
    return a.set(_, b), function() {
      if (w) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? xt(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        w = !1, l(), a.delete(_), o = null;
      }
    };
  }
  function p(b) {
    if (!Ao(b))
      throw new Error(process.env.NODE_ENV === "production" ? xt(7) : `Actions must be plain objects. Instead, the actual type was: '${Wn(b)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof b.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? xt(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof b.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? xt(17) : `Action "type" property must be a string. Instead, the actual type was: '${Wn(b.type)}'. Value was: '${b.type}' (stringified)`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? xt(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, i = r(i, b);
    } finally {
      c = !1;
    }
    return (o = a).forEach((_) => {
      _();
    }), b;
  }
  function h(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? xt(10) : `Expected the nextReducer to be a function. Instead, received: '${Wn(b)}`);
    r = b, p({
      type: vr.REPLACE
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
          throw new Error(process.env.NODE_ENV === "production" ? xt(11) : `Expected the observer to be an object. Instead, received: '${Wn(w)}'`);
        function _() {
          const A = w;
          A.next && A.next(u());
        }
        return _(), {
          unsubscribe: b(_)
        };
      },
      [Ku]() {
        return this;
      }
    };
  }
  return p({
    type: vr.INIT
  }), {
    dispatch: p,
    subscribe: d,
    getState: u,
    replaceReducer: h,
    [Ku]: m
  };
}
function Xu(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function qb(e, t, n, r) {
  const i = Object.keys(t), o = n && n.type === vr.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Ao(e))
    return `The ${o} has unexpected type of "${Wn(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const a = Object.keys(e).filter((s) => !t.hasOwnProperty(s) && !r[s]);
  if (a.forEach((s) => {
    r[s] = !0;
  }), !(n && n.type === vr.REPLACE) && a.length > 0)
    return `Unexpected ${a.length > 1 ? "keys" : "key"} "${a.join('", "')}" found in ${o}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function Yb(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: vr.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? xt(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof n(void 0, {
      type: vr.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? xt(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${vr.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Gb(e) {
  const t = Object.keys(e), n = {};
  for (let a = 0; a < t.length; a++) {
    const s = t[a];
    process.env.NODE_ENV !== "production" && typeof e[s] > "u" && Xu(`No reducer provided for key "${s}"`), typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let o;
  try {
    Yb(n);
  } catch (a) {
    o = a;
  }
  return function(s = {}, c) {
    if (o)
      throw o;
    if (process.env.NODE_ENV !== "production") {
      const d = qb(s, n, c, i);
      d && Xu(d);
    }
    let l = !1;
    const u = {};
    for (let d = 0; d < r.length; d++) {
      const p = r[d], h = n[p], m = s[p], g = h(m, c);
      if (typeof g > "u") {
        const b = c && c.type;
        throw new Error(process.env.NODE_ENV === "production" ? xt(14) : `When called with an action of type ${b ? `"${String(b)}"` : "(unknown type)"}, the slice reducer for key "${p}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      u[p] = g, l = l || g !== m;
    }
    return l = l || r.length !== Object.keys(s).length, l ? u : s;
  };
}
function ba(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function Zb(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let o = () => {
      throw new Error(process.env.NODE_ENV === "production" ? xt(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: i.getState,
      dispatch: (c, ...l) => o(c, ...l)
    }, s = e.map((c) => c(a));
    return o = ba(...s)(i.dispatch), {
      ...i,
      dispatch: o
    };
  };
}
function Pp(e) {
  return Ao(e) && "type" in e && typeof e.type == "string";
}
var Np = Symbol.for("immer-nothing"), Ju = Symbol.for("immer-draftable"), Wt = Symbol.for("immer-state"), Kb = process.env.NODE_ENV !== "production" ? [
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
function jt(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Kb[e], r = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var li = Object.getPrototypeOf;
function Cr(e) {
  return !!e && !!e[Wt];
}
function An(e) {
  var t;
  return e ? Mp(e) || Array.isArray(e) || !!e[Ju] || !!((t = e.constructor) != null && t[Ju]) || Xa(e) || Ja(e) : !1;
}
var Xb = Object.prototype.constructor.toString();
function Mp(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = li(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === Xb;
}
function xa(e, t) {
  Ka(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function Ka(e) {
  const t = e[Wt];
  return t ? t.type_ : Array.isArray(e) ? 1 : Xa(e) ? 2 : Ja(e) ? 3 : 0;
}
function Lc(e, t) {
  return Ka(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ip(e, t, n) {
  const r = Ka(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function Jb(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Xa(e) {
  return e instanceof Map;
}
function Ja(e) {
  return e instanceof Set;
}
function dr(e) {
  return e.copy_ || e.base_;
}
function zc(e, t) {
  if (Xa(e))
    return new Map(e);
  if (Ja(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = Mp(e);
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
    return Object.create(li(e), r);
  } else {
    const r = li(e);
    if (r !== null && n)
      return { ...e };
    const i = Object.create(r);
    return Object.assign(i, e);
  }
}
function Ml(e, t = !1) {
  return Qa(e) || Cr(e) || !An(e) || (Ka(e) > 1 && (e.set = e.add = e.clear = e.delete = Qb), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Ml(r, !0))), e;
}
function Qb() {
  jt(2);
}
function Qa(e) {
  return Object.isFrozen(e);
}
var ex = {};
function Ar(e) {
  const t = ex[e];
  return t || jt(0, e), t;
}
var Ji;
function Dp() {
  return Ji;
}
function tx(e, t) {
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
function Qu(e, t) {
  t && (Ar("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function $c(e) {
  Vc(e), e.drafts_.forEach(nx), e.drafts_ = null;
}
function Vc(e) {
  e === Ji && (Ji = e.parent_);
}
function ef(e) {
  return Ji = tx(Ji, e);
}
function nx(e) {
  const t = e[Wt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function tf(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[Wt].modified_ && ($c(t), jt(4)), An(e) && (e = wa(t, e), t.parent_ || _a(t, e)), t.patches_ && Ar("Patches").generateReplacementPatches_(
    n[Wt].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = wa(t, n, []), $c(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Np ? e : void 0;
}
function wa(e, t, n) {
  if (Qa(t))
    return t;
  const r = t[Wt];
  if (!r)
    return xa(
      t,
      (i, o) => nf(e, r, t, i, o, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return _a(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let o = i, a = !1;
    r.type_ === 3 && (o = new Set(i), i.clear(), a = !0), xa(
      o,
      (s, c) => nf(e, r, i, s, c, n, a)
    ), _a(e, i, !1), n && e.patches_ && Ar("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function nf(e, t, n, r, i, o, a) {
  if (process.env.NODE_ENV !== "production" && i === n && jt(5), Cr(i)) {
    const s = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Lc(t.assigned_, r) ? o.concat(r) : void 0, c = wa(e, i, s);
    if (Ip(n, r, c), Cr(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else a && n.add(i);
  if (An(i) && !Qa(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    wa(e, i), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && _a(e, i);
  }
}
function _a(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ml(t, n);
}
function rx(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Dp(),
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
  let i = r, o = Il;
  n && (i = [r], o = Qi);
  const { revoke: a, proxy: s } = Proxy.revocable(i, o);
  return r.draft_ = s, r.revoke_ = a, s;
}
var Il = {
  get(e, t) {
    if (t === Wt)
      return e;
    const n = dr(e);
    if (!Lc(n, t))
      return ix(e, n, t);
    const r = n[t];
    return e.finalized_ || !An(r) ? r : r === Ns(e.base_, t) ? (Ms(e), e.copy_[t] = Bc(r, e)) : r;
  },
  has(e, t) {
    return t in dr(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(dr(e));
  },
  set(e, t, n) {
    const r = jp(dr(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const i = Ns(dr(e), t), o = i == null ? void 0 : i[Wt];
      if (o && o.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (Jb(n, i) && (n !== void 0 || Lc(e.base_, t)))
        return !0;
      Ms(e), Uc(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Ns(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Ms(e), Uc(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = dr(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    jt(11);
  },
  getPrototypeOf(e) {
    return li(e.base_);
  },
  setPrototypeOf() {
    jt(12);
  }
}, Qi = {};
xa(Il, (e, t) => {
  Qi[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Qi.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && jt(13), Qi.set.call(this, e, t, void 0);
};
Qi.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && jt(14), Il.set.call(this, e[0], t, n, e[0]);
};
function Ns(e, t) {
  const n = e[Wt];
  return (n ? dr(n) : e)[t];
}
function ix(e, t, n) {
  var i;
  const r = jp(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = r.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function jp(e, t) {
  if (!(t in e))
    return;
  let n = li(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = li(n);
  }
}
function Uc(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Uc(e.parent_));
}
function Ms(e) {
  e.copy_ || (e.copy_ = zc(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var ox = class {
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
      typeof n != "function" && jt(6), r !== void 0 && typeof r != "function" && jt(7);
      let i;
      if (An(t)) {
        const o = ef(this), a = Bc(t, void 0);
        let s = !0;
        try {
          i = n(a), s = !1;
        } finally {
          s ? $c(o) : Vc(o);
        }
        return Qu(o, r), tf(i, o);
      } else if (!t || typeof t != "object") {
        if (i = n(t), i === void 0 && (i = t), i === Np && (i = void 0), this.autoFreeze_ && Ml(i, !0), r) {
          const o = [], a = [];
          Ar("Patches").generateReplacementPatches_(t, i, o, a), r(o, a);
        }
        return i;
      } else
        jt(1, t);
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
    An(e) || jt(8), Cr(e) && (e = ax(e));
    const t = ef(this), n = Bc(e, void 0);
    return n[Wt].isManual_ = !0, Vc(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Wt];
    (!n || !n.isManual_) && jt(9);
    const { scope_: r } = n;
    return Qu(r, t), tf(void 0, r);
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
    const r = Ar("Patches").applyPatches_;
    return Cr(e) ? r(e, t) : this.produce(
      e,
      (i) => r(i, t)
    );
  }
};
function Bc(e, t) {
  const n = Xa(e) ? Ar("MapSet").proxyMap_(e, t) : Ja(e) ? Ar("MapSet").proxySet_(e, t) : rx(e, t);
  return (t ? t.scope_ : Dp()).drafts_.push(n), n;
}
function ax(e) {
  return Cr(e) || jt(10, e), Fp(e);
}
function Fp(e) {
  if (!An(e) || Qa(e))
    return e;
  const t = e[Wt];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = zc(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = zc(e, !0);
  return xa(n, (r, i) => {
    Ip(n, r, Fp(i));
  }), t && (t.finalized_ = !1), n;
}
var Ht = new ox(), Lp = Ht.produce;
Ht.produceWithPatches.bind(
  Ht
);
Ht.setAutoFreeze.bind(Ht);
Ht.setUseStrictShallowCopy.bind(Ht);
Ht.applyPatches.bind(Ht);
Ht.createDraft.bind(Ht);
Ht.finishDraft.bind(Ht);
function zp(e) {
  return ({ dispatch: n, getState: r }) => (i) => (o) => typeof o == "function" ? o(n, r, e) : i(o);
}
var sx = zp(), cx = zp, lx = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? ba : ba.apply(null, arguments);
}, $p = (e) => e && typeof e.match == "function";
function qi(e, t) {
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => Pp(r) && r.type === e, n;
}
function ux(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  $p(e);
}
function fx(e) {
  const t = e ? `${e}`.split("/") : [], n = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${n}())\` instead of \`dispatch(${n})\`. This is necessary even if the action has no payload.`;
}
function dx(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (n) => (r) => n(r);
  const {
    isActionCreator: t = ux
  } = e;
  return () => (n) => (r) => (t(r) && console.warn(fx(r.type)), n(r));
}
function Vp(e, t) {
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
var Up = class Di extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Di.prototype);
  }
  static get [Symbol.species]() {
    return Di;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Di(...t[0].concat(this)) : new Di(...t.concat(this));
  }
};
function rf(e) {
  return An(e) ? Lp(e, () => {
  }) : e;
}
function of(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t);
    return n.update && (i = n.update(i, t, e), e.set(t, i)), i;
  }
  if (!n.insert) throw new Error(process.env.NODE_ENV === "production" ? rt(10) : "No insert provided for key not already in map");
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function px(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function hx(e, t, n) {
  const r = Bp(e, t, n);
  return {
    detectMutations() {
      return Wp(e, t, r, n);
    }
  };
}
function Bp(e, t = [], n, r = "", i = /* @__PURE__ */ new Set()) {
  const o = {
    value: n
  };
  if (!e(n) && !i.has(n)) {
    i.add(n), o.children = {};
    for (const a in n) {
      const s = r ? r + "." + a : a;
      t.length && t.indexOf(s) !== -1 || (o.children[a] = Bp(e, t, n[a], s));
    }
  }
  return o;
}
function Wp(e, t = [], n, r, i = !1, o = "") {
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
    const p = Wp(e, t, n.children[u], r[u], s, d);
    if (p.wasMutated)
      return p;
  }
  return {
    wasMutated: !1
  };
}
function mx(e = {}) {
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
      isImmutable: r = px,
      ignoredPaths: i,
      warnAfter: o = 32
    } = e;
    const a = hx.bind(null, r, i);
    return ({
      getState: s
    }) => {
      let c = s(), l = a(c), u;
      return (d) => (p) => {
        const h = Vp(o, "ImmutableStateInvariantMiddleware");
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
function Hp(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || Ao(e);
}
function Wc(e, t = "", n = Hp, r, i = [], o) {
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
      if (typeof u == "object" && (a = Wc(u, d, n, r, i, o), a))
        return a;
    }
  }
  return o && qp(e) && o.add(e), !1;
}
function qp(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !qp(t))
      return !1;
  return !0;
}
function gx(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    const {
      isSerializable: t = Hp,
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
      if (!Pp(h))
        return p(h);
      const m = p(h), g = Vp(a, "SerializableStateInvariantMiddleware");
      return !c && !(r.length && r.indexOf(h.type) !== -1) && g.measureTime(() => {
        const b = Wc(h, "", t, n, i, u);
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
        const b = d.getState(), w = Wc(b, "", t, n, o, u);
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
function $o(e) {
  return typeof e == "boolean";
}
var yx = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: o = !0
  } = t ?? {};
  let a = new Up();
  if (n && ($o(n) ? a.push(sx) : a.push(cx(n.extraArgument))), process.env.NODE_ENV !== "production") {
    if (r) {
      let s = {};
      $o(r) || (s = r), a.unshift(mx(s));
    }
    if (i) {
      let s = {};
      $o(i) || (s = i), a.push(gx(s));
    }
    if (o) {
      let s = {};
      $o(o) || (s = o), a.unshift(dx(s));
    }
  }
  return a;
}, vx = "RTK_autoBatch", Yp = (e) => (t) => {
  setTimeout(t, e);
}, bx = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Yp(10), xx = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let i = !0, o = !1, a = !1;
  const s = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? bx : e.type === "callback" ? e.queueNotification : Yp(e.timeout), l = () => {
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
        return i = !((d = u == null ? void 0 : u.meta) != null && d[vx]), o = !i, o && (a || (a = !0, c(l))), r.dispatch(u);
      } finally {
        i = !0;
      }
    }
  });
}, wx = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let i = new Up(e);
  return r && i.push(xx(typeof r == "object" ? r : void 0)), i;
};
function _x(e) {
  const t = yx(), {
    reducer: n = void 0,
    middleware: r,
    devTools: i = !0,
    preloadedState: o = void 0,
    enhancers: a = void 0
  } = e || {};
  let s;
  if (typeof n == "function")
    s = n;
  else if (Ao(n))
    s = Gb(n);
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
  let l = ba;
  i && (l = lx({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof i == "object" && i
  }));
  const u = Zb(...c), d = wx(u);
  if (process.env.NODE_ENV !== "production" && a && typeof a != "function")
    throw new Error(process.env.NODE_ENV === "production" ? rt(5) : "`enhancers` field must be a callback");
  let p = typeof a == "function" ? a(d) : d();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(p))
    throw new Error(process.env.NODE_ENV === "production" ? rt(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && p.some((m) => typeof m != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? rt(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && c.length && !p.includes(u) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const h = l(...p);
  return Tp(s, o, h);
}
function Gp(e) {
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
function Ex(e) {
  return typeof e == "function";
}
function Sx(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? rt(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [n, r, i] = Gp(t), o;
  if (Ex(e))
    o = () => rf(e());
  else {
    const s = rf(e);
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
        if (Cr(u)) {
          const h = d(u, c);
          return h === void 0 ? u : h;
        } else {
          if (An(u))
            return Lp(u, (p) => d(p, c));
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
var Cx = (e, t) => $p(e) ? e.match(t) : e(t);
function Ax(...e) {
  return (t) => e.some((n) => Cx(n, t));
}
var Ox = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Rx = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Ox[Math.random() * 64 | 0];
  return t;
}, kx = ["name", "message", "stack", "code"], Is = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    $r(this, "_type");
    this.payload = e, this.meta = t;
  }
}, af = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    $r(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Tx = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of kx)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, Oo = /* @__PURE__ */ (() => {
  function e(t, n, r) {
    const i = qi(t + "/fulfilled", (c, l, u, d) => ({
      payload: c,
      meta: {
        ...d || {},
        arg: u,
        requestId: l,
        requestStatus: "fulfilled"
      }
    })), o = qi(t + "/pending", (c, l, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: l,
        requestId: c,
        requestStatus: "pending"
      }
    })), a = qi(t + "/rejected", (c, l, u, d, p) => ({
      payload: d,
      error: (r && r.serializeError || Tx)(c || "Rejected"),
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
        const p = r != null && r.idGenerator ? r.idGenerator(c) : Rx(), h = new AbortController();
        let m, g;
        function b(_) {
          g = _, h.abort();
        }
        const w = async function() {
          var A, E;
          let _;
          try {
            let N = (A = r == null ? void 0 : r.condition) == null ? void 0 : A.call(r, c, {
              getState: u,
              extra: d
            });
            if (Nx(N) && (N = await N), N === !1 || h.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const P = new Promise((U, ue) => {
              m = () => {
                ue({
                  name: "AbortError",
                  message: g || "Aborted"
                });
              }, h.signal.addEventListener("abort", m);
            });
            l(o(p, c, (E = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : E.call(r, {
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
              rejectWithValue: (U, ue) => new Is(U, ue),
              fulfillWithValue: (U, ue) => new af(U, ue)
            })).then((U) => {
              if (U instanceof Is)
                throw U;
              return U instanceof af ? i(U.payload, p, c, U.meta) : i(U, p, c);
            })]);
          } catch (N) {
            _ = N instanceof Is ? a(null, p, c, N.payload, N.meta) : a(N, p, c);
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
            return w.then(Px);
          }
        });
      };
    }
    return Object.assign(s, {
      pending: o,
      rejected: a,
      fulfilled: i,
      settled: Ax(a, i),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function Px(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function Nx(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Mx = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Ix(e, t) {
  return `${e}/${t}`;
}
function Dx({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Mx];
  return function(i) {
    const {
      name: o,
      reducerPath: a = o
    } = i;
    if (!o)
      throw new Error(process.env.NODE_ENV === "production" ? rt(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const s = (typeof i.reducers == "function" ? i.reducers(Fx()) : i.reducers) || {}, c = Object.keys(s), l = {
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
        type: Ix(o, S),
        createNotation: typeof i.reducers == "function"
      };
      zx(A) ? Vx(E, A, u, t) : Lx(E, A, u);
    });
    function d() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? rt(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [S = {}, A = [], E = void 0] = typeof i.extraReducers == "function" ? Gp(i.extraReducers) : [i.extraReducers], N = {
        ...S,
        ...l.sliceCaseReducersByType
      };
      return Sx(i.initialState, (P) => {
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
    function g(S, A) {
      return m || (m = d()), m(S, A);
    }
    function b() {
      return m || (m = d()), m.getInitialState();
    }
    function w(S, A = !1) {
      function E(P) {
        let U = P[S];
        if (typeof U > "u") {
          if (A)
            U = b();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? rt(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return U;
      }
      function N(P = p) {
        const U = of(h, A, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return of(U, P, {
          insert: () => {
            const ue = {};
            for (const [ge, pe] of Object.entries(i.selectors ?? {}))
              ue[ge] = jx(pe, P, b, A);
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
    const _ = {
      name: o,
      reducer: g,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: b,
      ...w(a),
      injectInto(S, {
        reducerPath: A,
        ...E
      } = {}) {
        const N = A ?? a;
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
function jx(e, t, n, r) {
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
var Zp = /* @__PURE__ */ Dx();
function Fx() {
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
function Lx({
  type: e,
  reducerName: t,
  createNotation: n
}, r, i) {
  let o, a;
  if ("reducer" in r) {
    if (n && !$x(r))
      throw new Error(process.env.NODE_ENV === "production" ? rt(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    o = r.reducer, a = r.prepare;
  } else
    o = r;
  i.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, a ? qi(e, a) : qi(e));
}
function zx(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function $x(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Vx({
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
    fulfilled: a || Vo,
    pending: s || Vo,
    rejected: c || Vo,
    settled: l || Vo
  });
}
function Vo() {
}
function rt(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Kp = {}, eo = {};
function Xp(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ux } = Object.prototype, { getPrototypeOf: Dl } = Object, es = /* @__PURE__ */ ((e) => (t) => {
  const n = Ux.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), sn = (e) => (e = e.toLowerCase(), (t) => es(t) === e), ts = (e) => (t) => typeof t === e, { isArray: vi } = Array, to = ts("undefined");
function Bx(e) {
  return e !== null && !to(e) && e.constructor !== null && !to(e.constructor) && Gt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Jp = sn("ArrayBuffer");
function Wx(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Jp(e.buffer), t;
}
const Hx = ts("string"), Gt = ts("function"), Qp = ts("number"), ns = (e) => e !== null && typeof e == "object", qx = (e) => e === !0 || e === !1, ia = (e) => {
  if (es(e) !== "object")
    return !1;
  const t = Dl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Yx = sn("Date"), Gx = sn("File"), Zx = sn("Blob"), Kx = sn("FileList"), Xx = (e) => ns(e) && Gt(e.pipe), Jx = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Gt(e.append) && ((t = es(e)) === "formdata" || // detect form-data instance
  t === "object" && Gt(e.toString) && e.toString() === "[object FormData]"));
}, Qx = sn("URLSearchParams"), [e0, t0, n0, r0] = ["ReadableStream", "Request", "Response", "Headers"].map(sn), i0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ro(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, i;
  if (typeof e != "object" && (e = [e]), vi(e))
    for (r = 0, i = e.length; r < i; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let s;
    for (r = 0; r < a; r++)
      s = o[r], t.call(null, e[s], s, e);
  }
}
function eh(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], t === i.toLowerCase())
      return i;
  return null;
}
const th = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : ot, nh = (e) => !to(e) && e !== th;
function Hc() {
  const { caseless: e } = nh(this) && this || {}, t = {}, n = (r, i) => {
    const o = e && eh(t, i) || i;
    ia(t[o]) && ia(r) ? t[o] = Hc(t[o], r) : ia(r) ? t[o] = Hc({}, r) : vi(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Ro(arguments[r], n);
  return t;
}
const o0 = (e, t, n, { allOwnKeys: r } = {}) => (Ro(t, (i, o) => {
  n && Gt(i) ? e[o] = Xp(i, n) : e[o] = i;
}, { allOwnKeys: r }), e), a0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), s0 = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, c0 = (e, t, n, r) => {
  let i, o, a;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      a = i[o], (!r || r(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = n !== !1 && Dl(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, l0 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, u0 = (e) => {
  if (!e) return null;
  if (vi(e)) return e;
  let t = e.length;
  if (!Qp(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, f0 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Dl(Uint8Array)), d0 = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const o = i.value;
    t.call(e, o[0], o[1]);
  }
}, p0 = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, h0 = sn("HTMLFormElement"), m0 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), sf = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), g0 = sn("RegExp"), rh = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Ro(n, (i, o) => {
    let a;
    (a = t(i, o, e)) !== !1 && (r[o] = a || i);
  }), Object.defineProperties(e, r);
}, y0 = (e) => {
  rh(e, (t, n) => {
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
}, v0 = (e, t) => {
  const n = {}, r = (i) => {
    i.forEach((o) => {
      n[o] = !0;
    });
  };
  return vi(e) ? r(e) : r(String(e).split(t)), n;
}, b0 = () => {
}, x0 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Ds = "abcdefghijklmnopqrstuvwxyz", cf = "0123456789", ih = {
  DIGIT: cf,
  ALPHA: Ds,
  ALPHA_DIGIT: Ds + Ds.toUpperCase() + cf
}, w0 = (e = 16, t = ih.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function _0(e) {
  return !!(e && Gt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const E0 = (e) => {
  const t = new Array(10), n = (r, i) => {
    if (ns(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[i] = r;
        const o = vi(r) ? [] : {};
        return Ro(r, (a, s) => {
          const c = n(a, i + 1);
          !to(c) && (o[s] = c);
        }), t[i] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, S0 = sn("AsyncFunction"), C0 = (e) => e && (ns(e) || Gt(e)) && Gt(e.then) && Gt(e.catch);
var z = {
  isArray: vi,
  isArrayBuffer: Jp,
  isBuffer: Bx,
  isFormData: Jx,
  isArrayBufferView: Wx,
  isString: Hx,
  isNumber: Qp,
  isBoolean: qx,
  isObject: ns,
  isPlainObject: ia,
  isReadableStream: e0,
  isRequest: t0,
  isResponse: n0,
  isHeaders: r0,
  isUndefined: to,
  isDate: Yx,
  isFile: Gx,
  isBlob: Zx,
  isRegExp: g0,
  isFunction: Gt,
  isStream: Xx,
  isURLSearchParams: Qx,
  isTypedArray: f0,
  isFileList: Kx,
  forEach: Ro,
  merge: Hc,
  extend: o0,
  trim: i0,
  stripBOM: a0,
  inherits: s0,
  toFlatObject: c0,
  kindOf: es,
  kindOfTest: sn,
  endsWith: l0,
  toArray: u0,
  forEachEntry: d0,
  matchAll: p0,
  isHTMLForm: h0,
  hasOwnProperty: sf,
  hasOwnProp: sf,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: rh,
  freezeMethods: y0,
  toObjectSet: v0,
  toCamelCase: m0,
  noop: b0,
  toFiniteNumber: x0,
  findKey: eh,
  global: th,
  isContextDefined: nh,
  ALPHABET: ih,
  generateString: w0,
  isSpecCompliantForm: _0,
  toJSONObject: E0,
  isAsyncFn: S0,
  isThenable: C0
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
const oh = De.prototype, ah = {};
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
  ah[e] = { value: e };
});
Object.defineProperties(De, ah);
Object.defineProperty(oh, "isAxiosError", { value: !0 });
De.from = (e, t, n, r, i, o) => {
  const a = Object.create(oh);
  return z.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (s) => s !== "isAxiosError"), De.call(a, e.message, t, n, r, i), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
var A0 = null;
function qc(e) {
  return z.isPlainObject(e) || z.isArray(e);
}
function sh(e) {
  return z.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function lf(e, t, n) {
  return e ? e.concat(t).map(function(i, o) {
    return i = sh(i), !n && o ? "[" + i + "]" : i;
  }).join(n ? "." : "") : t;
}
function O0(e) {
  return z.isArray(e) && !e.some(qc);
}
const R0 = z.toFlatObject(z, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function rs(e, t, n) {
  if (!z.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = z.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, b) {
    return !z.isUndefined(b[g]);
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
  function u(m, g, b) {
    let w = m;
    if (m && !b && typeof m == "object") {
      if (z.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), m = JSON.stringify(m);
      else if (z.isArray(m) && O0(m) || (z.isFileList(m) || z.endsWith(g, "[]")) && (w = z.toArray(m)))
        return g = sh(g), w.forEach(function(S, A) {
          !(z.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? lf([g], A, o) : a === null ? g : g + "[]",
            l(S)
          );
        }), !1;
    }
    return qc(m) ? !0 : (t.append(lf(b, g, o), l(m)), !1);
  }
  const d = [], p = Object.assign(R0, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: qc
  });
  function h(m, g) {
    if (!z.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(m), z.forEach(m, function(w, _) {
        (!(z.isUndefined(w) || w === null) && i.call(
          t,
          w,
          z.isString(_) ? _.trim() : _,
          g,
          p
        )) === !0 && h(w, g ? g.concat(_) : [_]);
      }), d.pop();
    }
  }
  if (!z.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function uf(e) {
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
function jl(e, t) {
  this._pairs = [], e && rs(e, this, t);
}
const ch = jl.prototype;
ch.append = function(t, n) {
  this._pairs.push([t, n]);
};
ch.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, uf);
  } : uf;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function k0(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function lh(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || k0, i = n && n.serialize;
  let o;
  if (i ? o = i(t, n) : o = z.isURLSearchParams(t) ? t.toString() : new jl(t, n).toString(r), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class T0 {
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
var ff = T0, uh = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, P0 = typeof URLSearchParams < "u" ? URLSearchParams : jl, N0 = typeof FormData < "u" ? FormData : null, M0 = typeof Blob < "u" ? Blob : null, I0 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: P0,
    FormData: N0,
    Blob: M0
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const Fl = typeof window < "u" && typeof document < "u", D0 = ((e) => Fl && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), j0 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", F0 = Fl && window.location.href || "http://localhost";
var L0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  hasBrowserEnv: Fl,
  hasStandardBrowserWebWorkerEnv: j0,
  hasStandardBrowserEnv: D0,
  origin: F0
}), Jt = {
  ...L0,
  ...I0
};
function z0(e, t) {
  return rs(e, new Jt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, i, o) {
      return Jt.isNode && z.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function $0(e) {
  return z.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function V0(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function fh(e) {
  function t(n, r, i, o) {
    let a = n[o++];
    if (a === "__proto__") return !0;
    const s = Number.isFinite(+a), c = o >= n.length;
    return a = !a && z.isArray(i) ? i.length : a, c ? (z.hasOwnProp(i, a) ? i[a] = [i[a], r] : i[a] = r, !s) : ((!i[a] || !z.isObject(i[a])) && (i[a] = []), t(n, r, i[a], o) && z.isArray(i[a]) && (i[a] = V0(i[a])), !s);
  }
  if (z.isFormData(e) && z.isFunction(e.entries)) {
    const n = {};
    return z.forEachEntry(e, (r, i) => {
      t($0(r), i, n, 0);
    }), n;
  }
  return null;
}
function U0(e, t, n) {
  if (z.isString(e))
    try {
      return (t || JSON.parse)(e), z.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(e);
}
const Ll = {
  transitional: uh,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, o = z.isObject(t);
    if (o && z.isHTMLForm(t) && (t = new FormData(t)), z.isFormData(t))
      return i ? JSON.stringify(fh(t)) : t;
    if (z.isArrayBuffer(t) || z.isBuffer(t) || z.isStream(t) || z.isFile(t) || z.isBlob(t) || z.isReadableStream(t))
      return t;
    if (z.isArrayBufferView(t))
      return t.buffer;
    if (z.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return z0(t, this.formSerializer).toString();
      if ((s = z.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return rs(
          s ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || i ? (n.setContentType("application/json", !1), U0(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ll.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
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
  Ll.headers[e] = {};
});
var zl = Ll;
const B0 = z.toObjectSet([
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
var W0 = (e) => {
  const t = {};
  let n, r, i;
  return e && e.split(`
`).forEach(function(a) {
    i = a.indexOf(":"), n = a.substring(0, i).trim().toLowerCase(), r = a.substring(i + 1).trim(), !(!n || t[n] && B0[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
const df = Symbol("internals");
function ki(e) {
  return e && String(e).trim().toLowerCase();
}
function oa(e) {
  return e === !1 || e == null ? e : z.isArray(e) ? e.map(oa) : String(e);
}
function H0(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const q0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function js(e, t, n, r, i) {
  if (z.isFunction(r))
    return r.call(this, t, n);
  if (i && (t = n), !!z.isString(t)) {
    if (z.isString(r))
      return t.indexOf(r) !== -1;
    if (z.isRegExp(r))
      return r.test(t);
  }
}
function Y0(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function G0(e, t) {
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
class is {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(s, c, l) {
      const u = ki(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = z.findKey(i, u);
      (!d || i[d] === void 0 || l === !0 || l === void 0 && i[d] !== !1) && (i[d || c] = oa(s));
    }
    const a = (s, c) => z.forEach(s, (l, u) => o(l, u, c));
    if (z.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (z.isString(t) && (t = t.trim()) && !q0(t))
      a(W0(t), n);
    else if (z.isHeaders(t))
      for (const [s, c] of t.entries())
        o(c, s, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = ki(t), t) {
      const r = z.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return H0(i);
        if (z.isFunction(n))
          return n.call(this, i, r);
        if (z.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ki(t), t) {
      const r = z.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || js(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(a) {
      if (a = ki(a), a) {
        const s = z.findKey(r, a);
        s && (!n || js(r, r[s], s, n)) && (delete r[s], i = !0);
      }
    }
    return z.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || js(this, this[o], o, t, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(t) {
    const n = this, r = {};
    return z.forEach(this, (i, o) => {
      const a = z.findKey(r, o);
      if (a) {
        n[a] = oa(i), delete n[o];
        return;
      }
      const s = t ? Y0(o) : String(o).trim();
      s !== o && delete n[o], n[s] = oa(i), r[s] = !0;
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
    const r = (this[df] = this[df] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(a) {
      const s = ki(a);
      r[s] || (G0(i, a), r[s] = !0);
    }
    return z.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
is.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
z.reduceDescriptors(is.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
z.freezeMethods(is);
var Qt = is;
function Fs(e, t) {
  const n = this || zl, r = t || n, i = Qt.from(r.headers);
  let o = r.data;
  return z.forEach(e, function(s) {
    o = s.call(n, o, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), o;
}
function dh(e) {
  return !!(e && e.__CANCEL__);
}
function bi(e, t, n) {
  De.call(this, e ?? "canceled", De.ERR_CANCELED, t, n), this.name = "CanceledError";
}
z.inherits(bi, De, {
  __CANCEL__: !0
});
function ph(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new De(
    "Request failed with status code " + n.status,
    [De.ERR_BAD_REQUEST, De.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Z0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function K0(e, t) {
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
function X0(e, t) {
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
var Ea = (e, t, n = 3) => {
  let r = 0;
  const i = K0(50, 250);
  return X0((o) => {
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
}, J0 = Jt.hasStandardBrowserEnv ? (
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
), Q0 = Jt.hasStandardBrowserEnv ? (
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
function ew(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function tw(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function hh(e, t) {
  return e && !ew(t) ? tw(e, t) : t;
}
const pf = (e) => e instanceof Qt ? { ...e } : e;
function Or(e, t) {
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
    headers: (l, u) => i(pf(l), pf(u), !0)
  };
  return z.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || i, p = d(e[u], t[u], u);
    z.isUndefined(p) && d !== s || (n[u] = p);
  }), n;
}
var mh = (e) => {
  const t = Or({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: o, headers: a, auth: s } = t;
  t.headers = a = Qt.from(a), t.url = lh(hh(t.baseURL, t.url), e.params, e.paramsSerializer), s && a.set(
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
  if (Jt.hasStandardBrowserEnv && (r && z.isFunction(r) && (r = r(t)), r || r !== !1 && J0(t.url))) {
    const l = i && o && Q0.read(o);
    l && a.set(i, l);
  }
  return t;
};
const nw = typeof XMLHttpRequest < "u";
var rw = nw && function(e) {
  return new Promise(function(n, r) {
    const i = mh(e);
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
      ), g = {
        data: !s || s === "text" || s === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: h,
        config: e,
        request: u
      };
      ph(function(w) {
        n(w), l();
      }, function(w) {
        r(w), l();
      }, g), u = null;
    }
    "onloadend" in u ? u.onloadend = d : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, u.onabort = function() {
      u && (r(new De("Request aborted", De.ECONNABORTED, i, u)), u = null);
    }, u.onerror = function() {
      r(new De("Network Error", De.ERR_NETWORK, i, u)), u = null;
    }, u.ontimeout = function() {
      let m = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const g = i.transitional || uh;
      i.timeoutErrorMessage && (m = i.timeoutErrorMessage), r(new De(
        m,
        g.clarifyTimeoutError ? De.ETIMEDOUT : De.ECONNABORTED,
        i,
        u
      )), u = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in u && z.forEach(a.toJSON(), function(m, g) {
      u.setRequestHeader(g, m);
    }), z.isUndefined(i.withCredentials) || (u.withCredentials = !!i.withCredentials), s && s !== "json" && (u.responseType = i.responseType), typeof i.onDownloadProgress == "function" && u.addEventListener("progress", Ea(i.onDownloadProgress, !0)), typeof i.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Ea(i.onUploadProgress)), (i.cancelToken || i.signal) && (c = (h) => {
      u && (r(!h || h.type ? new bi(null, e, u) : h), u.abort(), u = null);
    }, i.cancelToken && i.cancelToken.subscribe(c), i.signal && (i.signal.aborted ? c() : i.signal.addEventListener("abort", c)));
    const p = Z0(i.url);
    if (p && Jt.protocols.indexOf(p) === -1) {
      r(new De("Unsupported protocol " + p + ":", De.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
};
const iw = (e, t) => {
  let n = new AbortController(), r;
  const i = function(c) {
    if (!r) {
      r = !0, a();
      const l = c instanceof Error ? c : this.reason;
      n.abort(l instanceof De ? l : new bi(l instanceof Error ? l.message : l));
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
var ow = iw;
const aw = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, i;
  for (; r < n; )
    i = r + t, yield e.slice(r, i), r = i;
}, sw = async function* (e, t, n) {
  for await (const r of e)
    yield* aw(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
}, hf = (e, t, n, r, i) => {
  const o = sw(e, t, i);
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
}, mf = (e, t) => {
  const n = e != null;
  return (r) => setTimeout(() => t({
    lengthComputable: n,
    total: e,
    loaded: r
  }));
}, os = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", gh = os && typeof ReadableStream == "function", Yc = os && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), cw = gh && (() => {
  let e = !1;
  const t = new Request(Jt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
})(), gf = 64 * 1024, Gc = gh && !!(() => {
  try {
    return z.isReadableStream(new Response("").body);
  } catch {
  }
})(), Sa = {
  stream: Gc && ((e) => e.body)
};
os && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Sa[t] && (Sa[t] = z.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new De(`Response type '${t}' is not supported`, De.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const lw = async (e) => {
  if (e == null)
    return 0;
  if (z.isBlob(e))
    return e.size;
  if (z.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (z.isArrayBufferView(e))
    return e.byteLength;
  if (z.isURLSearchParams(e) && (e = e + ""), z.isString(e))
    return (await Yc(e)).byteLength;
}, uw = async (e, t) => {
  const n = z.toFiniteNumber(e.getContentLength());
  return n ?? lw(t);
};
var fw = os && (async (e) => {
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
  } = mh(e);
  l = l ? (l + "").toLowerCase() : "text";
  let [h, m] = i || o || a ? ow([i, o], a) : [], g, b;
  const w = () => {
    !g && setTimeout(() => {
      h && h.unsubscribe();
    }), g = !0;
  };
  let _;
  try {
    if (c && cw && n !== "get" && n !== "head" && (_ = await uw(u, r)) !== 0) {
      let N = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), P;
      z.isFormData(r) && (P = N.headers.get("content-type")) && u.setContentType(P), N.body && (r = hf(N.body, gf, mf(
        _,
        Ea(c)
      ), null, Yc));
    }
    z.isString(d) || (d = d ? "cors" : "omit"), b = new Request(t, {
      ...p,
      signal: h,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      withCredentials: d
    });
    let S = await fetch(b);
    const A = Gc && (l === "stream" || l === "response");
    if (Gc && (s || A)) {
      const N = {};
      ["status", "statusText", "headers"].forEach((U) => {
        N[U] = S[U];
      });
      const P = z.toFiniteNumber(S.headers.get("content-length"));
      S = new Response(
        hf(S.body, gf, s && mf(
          P,
          Ea(s, !0)
        ), A && w, Yc),
        N
      );
    }
    l = l || "text";
    let E = await Sa[z.findKey(Sa, l) || "text"](S, e);
    return !A && w(), m && m(), await new Promise((N, P) => {
      ph(N, P, {
        data: E,
        headers: Qt.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: e,
        request: b
      });
    });
  } catch (S) {
    throw w(), S && S.name === "TypeError" && /fetch/i.test(S.message) ? Object.assign(
      new De("Network Error", De.ERR_NETWORK, e, b),
      {
        cause: S.cause || S
      }
    ) : De.from(S, S && S.code, e, b);
  }
});
const Zc = {
  http: A0,
  xhr: rw,
  fetch: fw
};
z.forEach(Zc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const yf = (e) => `- ${e}`, dw = (e) => z.isFunction(e) || e === null || e === !1;
var yh = {
  getAdapter: (e) => {
    e = z.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const i = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let a;
      if (r = n, !dw(n) && (r = Zc[(a = String(n)).toLowerCase()], r === void 0))
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
` + o.map(yf).join(`
`) : " " + yf(o[0]) : "as no adapter specified";
      throw new De(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Zc
};
function Ls(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new bi(null, e);
}
function vf(e) {
  return Ls(e), e.headers = Qt.from(e.headers), e.data = Fs.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), yh.getAdapter(e.adapter || zl.adapter)(e).then(function(r) {
    return Ls(e), r.data = Fs.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Qt.from(r.headers), r;
  }, function(r) {
    return dh(r) || (Ls(e), r && r.response && (r.response.data = Fs.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Qt.from(r.response.headers))), Promise.reject(r);
  });
}
const vh = "1.7.2", $l = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  $l[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const bf = {};
$l.transitional = function(t, n, r) {
  function i(o, a) {
    return "[Axios v" + vh + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "");
  }
  return (o, a, s) => {
    if (t === !1)
      throw new De(
        i(a, " has been removed" + (n ? " in " + n : "")),
        De.ERR_DEPRECATED
      );
    return n && !bf[a] && (bf[a] = !0, console.warn(
      i(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, a, s) : !0;
  };
};
function pw(e, t, n) {
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
var Kc = {
  assertOptions: pw,
  validators: $l
};
const Ln = Kc.validators;
class Ca {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ff(),
      response: new ff()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Or(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 && Kc.assertOptions(r, {
      silentJSONParsing: Ln.transitional(Ln.boolean),
      forcedJSONParsing: Ln.transitional(Ln.boolean),
      clarifyTimeoutError: Ln.transitional(Ln.boolean)
    }, !1), i != null && (z.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : Kc.assertOptions(i, {
      encode: Ln.function,
      serialize: Ln.function
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
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (c = c && g.synchronous, s.unshift(g.fulfilled, g.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(g) {
      l.push(g.fulfilled, g.rejected);
    });
    let u, d = 0, p;
    if (!c) {
      const m = [vf.bind(this), void 0];
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
      u = vf.call(this, h);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, p = l.length; d < p; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = Or(this.defaults, t);
    const n = hh(t.baseURL, t.url);
    return lh(n, t.params, t.paramsSerializer);
  }
}
z.forEach(["delete", "get", "head", "options"], function(t) {
  Ca.prototype[t] = function(n, r) {
    return this.request(Or(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
z.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, a, s) {
      return this.request(Or(s || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  Ca.prototype[t] = n(), Ca.prototype[t + "Form"] = n(!0);
});
var aa = Ca;
class Vl {
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
      r.reason || (r.reason = new bi(o, a, s), n(r.reason));
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
      token: new Vl(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
var hw = Vl;
function mw(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function gw(e) {
  return z.isObject(e) && e.isAxiosError === !0;
}
const Xc = {
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
Object.entries(Xc).forEach(([e, t]) => {
  Xc[t] = e;
});
var yw = Xc;
function bh(e) {
  const t = new aa(e), n = Xp(aa.prototype.request, t);
  return z.extend(n, aa.prototype, t, { allOwnKeys: !0 }), z.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(i) {
    return bh(Or(e, i));
  }, n;
}
const yt = bh(zl);
yt.Axios = aa;
yt.CanceledError = bi;
yt.CancelToken = hw;
yt.isCancel = dh;
yt.VERSION = vh;
yt.toFormData = rs;
yt.AxiosError = De;
yt.Cancel = yt.CanceledError;
yt.all = function(t) {
  return Promise.all(t);
};
yt.spread = mw;
yt.isAxiosError = gw;
yt.mergeConfig = Or;
yt.AxiosHeaders = Qt;
yt.formToJSON = (e) => fh(z.isHTMLForm(e) ? new FormData(e) : e);
yt.getAdapter = yh.getAdapter;
yt.HttpStatusCode = yw;
yt.default = yt;
var vw = yt, xh = {}, as = {}, xi = {};
Object.defineProperty(xi, "__esModule", {
  value: !0
});
xi.pathTempalteToParameterNames = void 0;
const bw = (e) => {
  const t = e.match(/\{[A-Za-z0-9_-]+\}/g);
  return t === null ? [] : t.map((n) => n.substring(1, n.length - 1));
};
xi.pathTempalteToParameterNames = bw;
Object.defineProperty(as, "__esModule", {
  value: !0
});
as.names = void 0;
var xw = xi;
const ww = (e) => (0, xw.pathTempalteToParameterNames)(e).filter((n, r, i) => i.indexOf(n) === r);
as.names = ww;
var ss = {}, ko = {};
Object.defineProperty(ko, "__esModule", {
  value: !0
});
ko.toParameterPattern = void 0;
var _w = xi;
const Ew = (e, t) => {
  const n = typeof t > "u" ? [] : Object.keys(t).map((o) => {
    const a = t[o];
    return {
      name: o,
      pattern: typeof a > "u" ? null : a
    };
  });
  return (0, _w.pathTempalteToParameterNames)(e).map((o) => {
    const a = n.find(({
      name: c
    }) => c === o), s = typeof a > "u" ? null : a.pattern;
    return {
      name: o,
      pattern: s
    };
  });
};
ko.toParameterPattern = Ew;
Object.defineProperty(ss, "__esModule", {
  value: !0
});
ss.params = void 0;
var Sw = ko;
const Cw = (e, t) => {
  const r = kw(e), i = (0, Sw.toParameterPattern)(e, t);
  return (o) => {
    const a = Rw(o, r);
    if (a === null) return null;
    const s = Ow(a, i);
    return s === null ? null : Aw(s);
  };
};
ss.params = Cw;
const Aw = (e) => e.map(({
  name: t,
  value: n
}) => ({
  [t]: n
})).reduce((t, n) => Object.assign(t, n), {}), Ow = (e, t) => {
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
}, Rw = (e, t) => {
  const n = e.match(t);
  return n === null ? null : n.slice(1).map((i) => ({
    value: i
  }));
}, kw = (e) => new RegExp("^" + e.replace(/\{[A-Za-z0-9_-]+\}/g, "([^\\/]*)") + "$");
var cs = {};
Object.defineProperty(cs, "__esModule", {
  value: !0
});
cs.path = void 0;
var Tw = xi, Pw = ko;
const Nw = (e, t) => {
  const n = (0, Tw.pathTempalteToParameterNames)(e);
  return (r) => n.some((o) => typeof r[o] != "string") || (0, Pw.toParameterPattern)(e, t).some(({
    name: o,
    pattern: a
  }) => a !== null && r[o].match(a) === null) ? null : n.reduce((o, a) => o.split("{" + a + "}").join(encodeURIComponent(r[a])), e);
};
cs.path = Nw;
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
  var t = as, n = ss, r = cs;
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
})(xh);
var wh = {}, _h = {};
Object.defineProperty(_h, "__esModule", {
  value: !0
});
var Eh = {}, Sh = {};
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
})(Sh);
var Ul = {};
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
    return o.set(i, s), s;
  };
})(Ul);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "dereferenceSync", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  var t = Sh, n = Ul, r = /* @__PURE__ */ new Map(), i = function(o) {
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
})(Eh);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), t(_h, e), t(Eh, e), t(Ul, e);
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
})(wh);
var Bl = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ParamType = e.HttpMethod = void 0, function(t) {
    t.Get = "get", t.Put = "put", t.Post = "post", t.Patch = "patch", t.Delete = "delete", t.Options = "options", t.Head = "head", t.Trace = "trace";
  }(e.HttpMethod || (e.HttpMethod = {})), function(t) {
    t.Query = "query", t.Header = "header", t.Path = "path", t.Cookie = "cookie";
  }(e.ParamType || (e.ParamType = {}));
})(Bl);
var _t = {}, Uo = {}, zn = {}, xf;
function To() {
  if (xf) return zn;
  xf = 1;
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
  return zn.isNothing = e, zn.isObject = t, zn.toArray = n, zn.repeat = i, zn.isNegativeZero = o, zn.extend = r, zn;
}
var zs, wf;
function Po() {
  if (wf) return zs;
  wf = 1;
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
  }, zs = t, zs;
}
var $s, _f;
function Mw() {
  if (_f) return $s;
  _f = 1;
  var e = To();
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
    var d = "", p, h, m = Math.min(i.line + o.linesAfter, c.length).toString().length, g = o.maxLength - (o.indent + m + 3);
    for (p = 1; p <= o.linesBefore && !(u - p < 0); p++)
      h = t(
        i.buffer,
        s[u - p],
        c[u - p],
        i.position - (s[u] - s[u - p]),
        g
      ), d = e.repeat(" ", o.indent) + n((i.line - p + 1).toString(), m) + " | " + h.str + `
` + d;
    for (h = t(i.buffer, s[u], c[u], i.position, g), d += e.repeat(" ", o.indent) + n((i.line + 1).toString(), m) + " | " + h.str + `
`, d += e.repeat("-", o.indent + m + 3 + h.pos) + `^
`, p = 1; p <= o.linesAfter && !(u + p >= c.length); p++)
      h = t(
        i.buffer,
        s[u + p],
        c[u + p],
        i.position - (s[u] - s[u + p]),
        g
      ), d += e.repeat(" ", o.indent) + n((i.line + p + 1).toString(), m) + " | " + h.str + `
`;
    return d.replace(/\n$/, "");
  }
  return $s = r, $s;
}
var Vs, Ef;
function Ot() {
  if (Ef) return Vs;
  Ef = 1;
  var e = Po(), t = [
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
  return Vs = i, Vs;
}
var Us, Sf;
function Ch() {
  if (Sf) return Us;
  Sf = 1;
  var e = Po(), t = Ot();
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
  }, Us = i, Us;
}
var Bs, Cf;
function Ah() {
  if (Cf) return Bs;
  Cf = 1;
  var e = Ot();
  return Bs = new e("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: function(t) {
      return t !== null ? t : "";
    }
  }), Bs;
}
var Ws, Af;
function Oh() {
  if (Af) return Ws;
  Af = 1;
  var e = Ot();
  return Ws = new e("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: function(t) {
      return t !== null ? t : [];
    }
  }), Ws;
}
var Hs, Of;
function Rh() {
  if (Of) return Hs;
  Of = 1;
  var e = Ot();
  return Hs = new e("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: function(t) {
      return t !== null ? t : {};
    }
  }), Hs;
}
var qs, Rf;
function kh() {
  if (Rf) return qs;
  Rf = 1;
  var e = Ch();
  return qs = new e({
    explicit: [
      Ah(),
      Oh(),
      Rh()
    ]
  }), qs;
}
var Ys, kf;
function Th() {
  if (kf) return Ys;
  kf = 1;
  var e = Ot();
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
  return Ys = new e("tag:yaml.org,2002:null", {
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
  }), Ys;
}
var Gs, Tf;
function Ph() {
  if (Tf) return Gs;
  Tf = 1;
  var e = Ot();
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
  return Gs = new e("tag:yaml.org,2002:bool", {
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
  }), Gs;
}
var Zs, Pf;
function Nh() {
  if (Pf) return Zs;
  Pf = 1;
  var e = To(), t = Ot();
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
  return Zs = new t("tag:yaml.org,2002:int", {
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
  }), Zs;
}
var Ks, Nf;
function Mh() {
  if (Nf) return Ks;
  Nf = 1;
  var e = To(), t = Ot(), n = new RegExp(
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
  return Ks = new t("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: r,
    construct: i,
    predicate: s,
    represent: a,
    defaultStyle: "lowercase"
  }), Ks;
}
var Xs, Mf;
function Ih() {
  return Mf || (Mf = 1, Xs = kh().extend({
    implicit: [
      Th(),
      Ph(),
      Nh(),
      Mh()
    ]
  })), Xs;
}
var Js, If;
function Dh() {
  return If || (If = 1, Js = Ih()), Js;
}
var Qs, Df;
function jh() {
  if (Df) return Qs;
  Df = 1;
  var e = Ot(), t = new RegExp(
    "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
  ), n = new RegExp(
    "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
  );
  function r(a) {
    return a === null ? !1 : t.exec(a) !== null || n.exec(a) !== null;
  }
  function i(a) {
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
  function o(a) {
    return a.toISOString();
  }
  return Qs = new e("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: r,
    construct: i,
    instanceOf: Date,
    represent: o
  }), Qs;
}
var ec, jf;
function Fh() {
  if (jf) return ec;
  jf = 1;
  var e = Ot();
  function t(n) {
    return n === "<<" || n === null;
  }
  return ec = new e("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: t
  }), ec;
}
var tc, Ff;
function Lh() {
  if (Ff) return tc;
  Ff = 1;
  var e = Ot(), t = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
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
  return tc = new e("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: n,
    construct: r,
    predicate: o,
    represent: i
  }), tc;
}
var nc, Lf;
function zh() {
  if (Lf) return nc;
  Lf = 1;
  var e = Ot(), t = Object.prototype.hasOwnProperty, n = Object.prototype.toString;
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
  return nc = new e("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: r,
    construct: i
  }), nc;
}
var rc, zf;
function $h() {
  if (zf) return rc;
  zf = 1;
  var e = Ot(), t = Object.prototype.toString;
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
  return rc = new e("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: n,
    construct: r
  }), rc;
}
var ic, $f;
function Vh() {
  if ($f) return ic;
  $f = 1;
  var e = Ot(), t = Object.prototype.hasOwnProperty;
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
  return ic = new e("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: n,
    construct: r
  }), ic;
}
var oc, Vf;
function Wl() {
  return Vf || (Vf = 1, oc = Dh().extend({
    implicit: [
      jh(),
      Fh()
    ],
    explicit: [
      Lh(),
      zh(),
      $h(),
      Vh()
    ]
  })), oc;
}
var Uf;
function Iw() {
  if (Uf) return Uo;
  Uf = 1;
  var e = To(), t = Po(), n = Mw(), r = Wl(), i = Object.prototype.hasOwnProperty, o = 1, a = 2, s = 3, c = 4, l = 1, u = 2, d = 3, p = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, h = /[\x85\u2028\u2029]/, m = /[,\[\]\{\}]/, g = /^(?:!|!!|![a-z\-]+!)$/i, b = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function w(f) {
    return Object.prototype.toString.call(f);
  }
  function _(f) {
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
  function ge(f) {
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
    var k = {
      name: f.filename,
      buffer: f.input.slice(0, -1),
      // omit trailing \0
      position: f.position,
      line: f.line,
      column: f.position - f.lineStart
    };
    return k.snippet = n(k), new t(O, k);
  }
  function j(f, O) {
    throw se(f, O);
  }
  function fe(f, O) {
    f.onWarning && f.onWarning.call(null, se(f, O));
  }
  var _e = {
    YAML: function(O, k, F) {
      var M, Z, W;
      O.version !== null && j(O, "duplication of %YAML directive"), F.length !== 1 && j(O, "YAML directive accepts exactly one argument"), M = /^([0-9]+)\.([0-9]+)$/.exec(F[0]), M === null && j(O, "ill-formed argument of the YAML directive"), Z = parseInt(M[1], 10), W = parseInt(M[2], 10), Z !== 1 && j(O, "unacceptable YAML version of the document"), O.version = F[0], O.checkLineBreaks = W < 2, W !== 1 && W !== 2 && fe(O, "unsupported YAML version of the document");
    },
    TAG: function(O, k, F) {
      var M, Z;
      F.length !== 2 && j(O, "TAG directive accepts exactly two arguments"), M = F[0], Z = F[1], g.test(M) || j(O, "ill-formed tag handle (first argument) of the TAG directive"), i.call(O.tagMap, M) && j(O, 'there is a previously declared suffix for "' + M + '" tag handle'), b.test(Z) || j(O, "ill-formed tag prefix (second argument) of the TAG directive");
      try {
        Z = decodeURIComponent(Z);
      } catch {
        j(O, "tag prefix is malformed: " + Z);
      }
      O.tagMap[M] = Z;
    }
  };
  function J(f, O, k, F) {
    var M, Z, W, de;
    if (O < k) {
      if (de = f.input.slice(O, k), F)
        for (M = 0, Z = de.length; M < Z; M += 1)
          W = de.charCodeAt(M), W === 9 || 32 <= W && W <= 1114111 || j(f, "expected valid JSON character");
      else p.test(de) && j(f, "the stream contains non-printable characters");
      f.result += de;
    }
  }
  function L(f, O, k, F) {
    var M, Z, W, de;
    for (e.isObject(k) || j(f, "cannot merge mappings; the provided source object is unacceptable"), M = Object.keys(k), W = 0, de = M.length; W < de; W += 1)
      Z = M[W], i.call(O, Z) || (O[Z] = k[Z], F[Z] = !0);
  }
  function q(f, O, k, F, M, Z, W, de, Re) {
    var Me, qe;
    if (Array.isArray(M))
      for (M = Array.prototype.slice.call(M), Me = 0, qe = M.length; Me < qe; Me += 1)
        Array.isArray(M[Me]) && j(f, "nested arrays are not supported inside keys"), typeof M == "object" && w(M[Me]) === "[object Object]" && (M[Me] = "[object Object]");
    if (typeof M == "object" && w(M) === "[object Object]" && (M = "[object Object]"), M = String(M), O === null && (O = {}), F === "tag:yaml.org,2002:merge")
      if (Array.isArray(Z))
        for (Me = 0, qe = Z.length; Me < qe; Me += 1)
          L(f, O, Z[Me], k);
      else
        L(f, O, Z, k);
    else
      !f.json && !i.call(k, M) && i.call(O, M) && (f.line = W || f.line, f.lineStart = de || f.lineStart, f.position = Re || f.position, j(f, "duplicated mapping key")), M === "__proto__" ? Object.defineProperty(O, M, {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: Z
      }) : O[M] = Z, delete k[M];
    return O;
  }
  function ye(f) {
    var O;
    O = f.input.charCodeAt(f.position), O === 10 ? f.position++ : O === 13 ? (f.position++, f.input.charCodeAt(f.position) === 10 && f.position++) : j(f, "a line break is expected"), f.line += 1, f.lineStart = f.position, f.firstTabInLine = -1;
  }
  function I(f, O, k) {
    for (var F = 0, M = f.input.charCodeAt(f.position); M !== 0; ) {
      for (; S(M); )
        M === 9 && f.firstTabInLine === -1 && (f.firstTabInLine = f.position), M = f.input.charCodeAt(++f.position);
      if (O && M === 35)
        do
          M = f.input.charCodeAt(++f.position);
        while (M !== 10 && M !== 13 && M !== 0);
      if (_(M))
        for (ye(f), M = f.input.charCodeAt(f.position), F++, f.lineIndent = 0; M === 32; )
          f.lineIndent++, M = f.input.charCodeAt(++f.position);
      else
        break;
    }
    return k !== -1 && F !== 0 && f.lineIndent < k && fe(f, "deficient indentation"), F;
  }
  function X(f) {
    var O = f.position, k;
    return k = f.input.charCodeAt(O), !!((k === 45 || k === 46) && k === f.input.charCodeAt(O + 1) && k === f.input.charCodeAt(O + 2) && (O += 3, k = f.input.charCodeAt(O), k === 0 || A(k)));
  }
  function re(f, O) {
    O === 1 ? f.result += " " : O > 1 && (f.result += e.repeat(`
`, O - 1));
  }
  function Y(f, O, k) {
    var F, M, Z, W, de, Re, Me, qe, Ee = f.kind, ft = f.result, y;
    if (y = f.input.charCodeAt(f.position), A(y) || E(y) || y === 35 || y === 38 || y === 42 || y === 33 || y === 124 || y === 62 || y === 39 || y === 34 || y === 37 || y === 64 || y === 96 || (y === 63 || y === 45) && (M = f.input.charCodeAt(f.position + 1), A(M) || k && E(M)))
      return !1;
    for (f.kind = "scalar", f.result = "", Z = W = f.position, de = !1; y !== 0; ) {
      if (y === 58) {
        if (M = f.input.charCodeAt(f.position + 1), A(M) || k && E(M))
          break;
      } else if (y === 35) {
        if (F = f.input.charCodeAt(f.position - 1), A(F))
          break;
      } else {
        if (f.position === f.lineStart && X(f) || k && E(y))
          break;
        if (_(y))
          if (Re = f.line, Me = f.lineStart, qe = f.lineIndent, I(f, !1, -1), f.lineIndent >= O) {
            de = !0, y = f.input.charCodeAt(f.position);
            continue;
          } else {
            f.position = W, f.line = Re, f.lineStart = Me, f.lineIndent = qe;
            break;
          }
      }
      de && (J(f, Z, W, !1), re(f, f.line - Re), Z = W = f.position, de = !1), S(y) || (W = f.position + 1), y = f.input.charCodeAt(++f.position);
    }
    return J(f, Z, W, !1), f.result ? !0 : (f.kind = Ee, f.result = ft, !1);
  }
  function G(f, O) {
    var k, F, M;
    if (k = f.input.charCodeAt(f.position), k !== 39)
      return !1;
    for (f.kind = "scalar", f.result = "", f.position++, F = M = f.position; (k = f.input.charCodeAt(f.position)) !== 0; )
      if (k === 39)
        if (J(f, F, f.position, !0), k = f.input.charCodeAt(++f.position), k === 39)
          F = f.position, f.position++, M = f.position;
        else
          return !0;
      else _(k) ? (J(f, F, M, !0), re(f, I(f, !1, O)), F = M = f.position) : f.position === f.lineStart && X(f) ? j(f, "unexpected end of the document within a single quoted scalar") : (f.position++, M = f.position);
    j(f, "unexpected end of the stream within a single quoted scalar");
  }
  function ie(f, O) {
    var k, F, M, Z, W, de;
    if (de = f.input.charCodeAt(f.position), de !== 34)
      return !1;
    for (f.kind = "scalar", f.result = "", f.position++, k = F = f.position; (de = f.input.charCodeAt(f.position)) !== 0; ) {
      if (de === 34)
        return J(f, k, f.position, !0), f.position++, !0;
      if (de === 92) {
        if (J(f, k, f.position, !0), de = f.input.charCodeAt(++f.position), _(de))
          I(f, !1, O);
        else if (de < 256 && pe[de])
          f.result += V[de], f.position++;
        else if ((W = P(de)) > 0) {
          for (M = W, Z = 0; M > 0; M--)
            de = f.input.charCodeAt(++f.position), (W = N(de)) >= 0 ? Z = (Z << 4) + W : j(f, "expected hexadecimal character");
          f.result += ge(Z), f.position++;
        } else
          j(f, "unknown escape sequence");
        k = F = f.position;
      } else _(de) ? (J(f, k, F, !0), re(f, I(f, !1, O)), k = F = f.position) : f.position === f.lineStart && X(f) ? j(f, "unexpected end of the document within a double quoted scalar") : (f.position++, F = f.position);
    }
    j(f, "unexpected end of the stream within a double quoted scalar");
  }
  function le(f, O) {
    var k = !0, F, M, Z, W = f.tag, de, Re = f.anchor, Me, qe, Ee, ft, y, $ = /* @__PURE__ */ Object.create(null), K, H, te, ae;
    if (ae = f.input.charCodeAt(f.position), ae === 91)
      qe = 93, y = !1, de = [];
    else if (ae === 123)
      qe = 125, y = !0, de = {};
    else
      return !1;
    for (f.anchor !== null && (f.anchorMap[f.anchor] = de), ae = f.input.charCodeAt(++f.position); ae !== 0; ) {
      if (I(f, !0, O), ae = f.input.charCodeAt(f.position), ae === qe)
        return f.position++, f.tag = W, f.anchor = Re, f.kind = y ? "mapping" : "sequence", f.result = de, !0;
      k ? ae === 44 && j(f, "expected the node content, but found ','") : j(f, "missed comma between flow collection entries"), H = K = te = null, Ee = ft = !1, ae === 63 && (Me = f.input.charCodeAt(f.position + 1), A(Me) && (Ee = ft = !0, f.position++, I(f, !0, O))), F = f.line, M = f.lineStart, Z = f.position, et(f, O, o, !1, !0), H = f.tag, K = f.result, I(f, !0, O), ae = f.input.charCodeAt(f.position), (ft || f.line === F) && ae === 58 && (Ee = !0, ae = f.input.charCodeAt(++f.position), I(f, !0, O), et(f, O, o, !1, !0), te = f.result), y ? q(f, de, $, H, K, te, F, M, Z) : Ee ? de.push(q(f, null, $, H, K, te, F, M, Z)) : de.push(K), I(f, !0, O), ae = f.input.charCodeAt(f.position), ae === 44 ? (k = !0, ae = f.input.charCodeAt(++f.position)) : k = !1;
    }
    j(f, "unexpected end of the stream within a flow collection");
  }
  function ve(f, O) {
    var k, F, M = l, Z = !1, W = !1, de = O, Re = 0, Me = !1, qe, Ee;
    if (Ee = f.input.charCodeAt(f.position), Ee === 124)
      F = !1;
    else if (Ee === 62)
      F = !0;
    else
      return !1;
    for (f.kind = "scalar", f.result = ""; Ee !== 0; )
      if (Ee = f.input.charCodeAt(++f.position), Ee === 43 || Ee === 45)
        l === M ? M = Ee === 43 ? d : u : j(f, "repeat of a chomping mode identifier");
      else if ((qe = U(Ee)) >= 0)
        qe === 0 ? j(f, "bad explicit indentation width of a block scalar; it cannot be less than one") : W ? j(f, "repeat of an indentation width identifier") : (de = O + qe - 1, W = !0);
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
      for (ye(f), f.lineIndent = 0, Ee = f.input.charCodeAt(f.position); (!W || f.lineIndent < de) && Ee === 32; )
        f.lineIndent++, Ee = f.input.charCodeAt(++f.position);
      if (!W && f.lineIndent > de && (de = f.lineIndent), _(Ee)) {
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
`, Z ? 1 + Re : Re), Z = !0, W = !0, Re = 0, k = f.position; !_(Ee) && Ee !== 0; )
        Ee = f.input.charCodeAt(++f.position);
      J(f, k, f.position, !1);
    }
    return !0;
  }
  function Pe(f, O) {
    var k, F = f.tag, M = f.anchor, Z = [], W, de = !1, Re;
    if (f.firstTabInLine !== -1) return !1;
    for (f.anchor !== null && (f.anchorMap[f.anchor] = Z), Re = f.input.charCodeAt(f.position); Re !== 0 && (f.firstTabInLine !== -1 && (f.position = f.firstTabInLine, j(f, "tab characters must not be used in indentation")), !(Re !== 45 || (W = f.input.charCodeAt(f.position + 1), !A(W)))); ) {
      if (de = !0, f.position++, I(f, !0, -1) && f.lineIndent <= O) {
        Z.push(null), Re = f.input.charCodeAt(f.position);
        continue;
      }
      if (k = f.line, et(f, O, s, !1, !0), Z.push(f.result), I(f, !0, -1), Re = f.input.charCodeAt(f.position), (f.line === k || f.lineIndent > O) && Re !== 0)
        j(f, "bad indentation of a sequence entry");
      else if (f.lineIndent < O)
        break;
    }
    return de ? (f.tag = F, f.anchor = M, f.kind = "sequence", f.result = Z, !0) : !1;
  }
  function ee(f, O, k) {
    var F, M, Z, W, de, Re, Me = f.tag, qe = f.anchor, Ee = {}, ft = /* @__PURE__ */ Object.create(null), y = null, $ = null, K = null, H = !1, te = !1, ae;
    if (f.firstTabInLine !== -1) return !1;
    for (f.anchor !== null && (f.anchorMap[f.anchor] = Ee), ae = f.input.charCodeAt(f.position); ae !== 0; ) {
      if (!H && f.firstTabInLine !== -1 && (f.position = f.firstTabInLine, j(f, "tab characters must not be used in indentation")), F = f.input.charCodeAt(f.position + 1), Z = f.line, (ae === 63 || ae === 58) && A(F))
        ae === 63 ? (H && (q(f, Ee, ft, y, $, null, W, de, Re), y = $ = K = null), te = !0, H = !0, M = !0) : H ? (H = !1, M = !0) : j(f, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), f.position += 1, ae = F;
      else {
        if (W = f.line, de = f.lineStart, Re = f.position, !et(f, k, a, !1, !0))
          break;
        if (f.line === Z) {
          for (ae = f.input.charCodeAt(f.position); S(ae); )
            ae = f.input.charCodeAt(++f.position);
          if (ae === 58)
            ae = f.input.charCodeAt(++f.position), A(ae) || j(f, "a whitespace character is expected after the key-value separator within a block mapping"), H && (q(f, Ee, ft, y, $, null, W, de, Re), y = $ = K = null), te = !0, H = !1, M = !1, y = f.tag, $ = f.result;
          else if (te)
            j(f, "can not read an implicit mapping pair; a colon is missed");
          else
            return f.tag = Me, f.anchor = qe, !0;
        } else if (te)
          j(f, "can not read a block mapping entry; a multiline key may not be an implicit key");
        else
          return f.tag = Me, f.anchor = qe, !0;
      }
      if ((f.line === Z || f.lineIndent > O) && (H && (W = f.line, de = f.lineStart, Re = f.position), et(f, O, c, !0, M) && (H ? $ = f.result : K = f.result), H || (q(f, Ee, ft, y, $, K, W, de, Re), y = $ = K = null), I(f, !0, -1), ae = f.input.charCodeAt(f.position)), (f.line === Z || f.lineIndent > O) && ae !== 0)
        j(f, "bad indentation of a mapping entry");
      else if (f.lineIndent < O)
        break;
    }
    return H && q(f, Ee, ft, y, $, null, W, de, Re), te && (f.tag = Me, f.anchor = qe, f.kind = "mapping", f.result = Ee), te;
  }
  function Oe(f) {
    var O, k = !1, F = !1, M, Z, W;
    if (W = f.input.charCodeAt(f.position), W !== 33) return !1;
    if (f.tag !== null && j(f, "duplication of a tag property"), W = f.input.charCodeAt(++f.position), W === 60 ? (k = !0, W = f.input.charCodeAt(++f.position)) : W === 33 ? (F = !0, M = "!!", W = f.input.charCodeAt(++f.position)) : M = "!", O = f.position, k) {
      do
        W = f.input.charCodeAt(++f.position);
      while (W !== 0 && W !== 62);
      f.position < f.length ? (Z = f.input.slice(O, f.position), W = f.input.charCodeAt(++f.position)) : j(f, "unexpected end of the stream within a verbatim tag");
    } else {
      for (; W !== 0 && !A(W); )
        W === 33 && (F ? j(f, "tag suffix cannot contain exclamation marks") : (M = f.input.slice(O - 1, f.position + 1), g.test(M) || j(f, "named tag handle cannot contain such characters"), F = !0, O = f.position + 1)), W = f.input.charCodeAt(++f.position);
      Z = f.input.slice(O, f.position), m.test(Z) && j(f, "tag suffix cannot contain flow indicator characters");
    }
    Z && !b.test(Z) && j(f, "tag name cannot contain such characters: " + Z);
    try {
      Z = decodeURIComponent(Z);
    } catch {
      j(f, "tag name is malformed: " + Z);
    }
    return k ? f.tag = Z : i.call(f.tagMap, M) ? f.tag = f.tagMap[M] + Z : M === "!" ? f.tag = "!" + Z : M === "!!" ? f.tag = "tag:yaml.org,2002:" + Z : j(f, 'undeclared tag handle "' + M + '"'), !0;
  }
  function He(f) {
    var O, k;
    if (k = f.input.charCodeAt(f.position), k !== 38) return !1;
    for (f.anchor !== null && j(f, "duplication of an anchor property"), k = f.input.charCodeAt(++f.position), O = f.position; k !== 0 && !A(k) && !E(k); )
      k = f.input.charCodeAt(++f.position);
    return f.position === O && j(f, "name of an anchor node must contain at least one character"), f.anchor = f.input.slice(O, f.position), !0;
  }
  function ct(f) {
    var O, k, F;
    if (F = f.input.charCodeAt(f.position), F !== 42) return !1;
    for (F = f.input.charCodeAt(++f.position), O = f.position; F !== 0 && !A(F) && !E(F); )
      F = f.input.charCodeAt(++f.position);
    return f.position === O && j(f, "name of an alias node must contain at least one character"), k = f.input.slice(O, f.position), i.call(f.anchorMap, k) || j(f, 'unidentified alias "' + k + '"'), f.result = f.anchorMap[k], I(f, !0, -1), !0;
  }
  function et(f, O, k, F, M) {
    var Z, W, de, Re = 1, Me = !1, qe = !1, Ee, ft, y, $, K, H;
    if (f.listener !== null && f.listener("open", f), f.tag = null, f.anchor = null, f.kind = null, f.result = null, Z = W = de = c === k || s === k, F && I(f, !0, -1) && (Me = !0, f.lineIndent > O ? Re = 1 : f.lineIndent === O ? Re = 0 : f.lineIndent < O && (Re = -1)), Re === 1)
      for (; Oe(f) || He(f); )
        I(f, !0, -1) ? (Me = !0, de = Z, f.lineIndent > O ? Re = 1 : f.lineIndent === O ? Re = 0 : f.lineIndent < O && (Re = -1)) : de = !1;
    if (de && (de = Me || M), (Re === 1 || c === k) && (o === k || a === k ? K = O : K = O + 1, H = f.position - f.lineStart, Re === 1 ? de && (Pe(f, H) || ee(f, H, K)) || le(f, K) ? qe = !0 : (W && ve(f, K) || G(f, K) || ie(f, K) ? qe = !0 : ct(f) ? (qe = !0, (f.tag !== null || f.anchor !== null) && j(f, "alias node should not have any properties")) : Y(f, K, o === k) && (qe = !0, f.tag === null && (f.tag = "?")), f.anchor !== null && (f.anchorMap[f.anchor] = f.result)) : Re === 0 && (qe = de && Pe(f, H))), f.tag === null)
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
        for ($ = null, y = f.typeMap.multi[f.kind || "fallback"], Ee = 0, ft = y.length; Ee < ft; Ee += 1)
          if (f.tag.slice(0, y[Ee].tag.length) === y[Ee].tag) {
            $ = y[Ee];
            break;
          }
      $ || j(f, "unknown tag !<" + f.tag + ">"), f.result !== null && $.kind !== f.kind && j(f, "unacceptable node kind for !<" + f.tag + '> tag; it should be "' + $.kind + '", not "' + f.kind + '"'), $.resolve(f.result, f.tag) ? (f.result = $.construct(f.result, f.tag), f.anchor !== null && (f.anchorMap[f.anchor] = f.result)) : j(f, "cannot resolve a node with !<" + f.tag + "> explicit tag");
    }
    return f.listener !== null && f.listener("close", f), f.tag !== null || f.anchor !== null || qe;
  }
  function Ve(f) {
    var O = f.position, k, F, M, Z = !1, W;
    for (f.version = null, f.checkLineBreaks = f.legacy, f.tagMap = /* @__PURE__ */ Object.create(null), f.anchorMap = /* @__PURE__ */ Object.create(null); (W = f.input.charCodeAt(f.position)) !== 0 && (I(f, !0, -1), W = f.input.charCodeAt(f.position), !(f.lineIndent > 0 || W !== 37)); ) {
      for (Z = !0, W = f.input.charCodeAt(++f.position), k = f.position; W !== 0 && !A(W); )
        W = f.input.charCodeAt(++f.position);
      for (F = f.input.slice(k, f.position), M = [], F.length < 1 && j(f, "directive name must not be less than one character in length"); W !== 0; ) {
        for (; S(W); )
          W = f.input.charCodeAt(++f.position);
        if (W === 35) {
          do
            W = f.input.charCodeAt(++f.position);
          while (W !== 0 && !_(W));
          break;
        }
        if (_(W)) break;
        for (k = f.position; W !== 0 && !A(W); )
          W = f.input.charCodeAt(++f.position);
        M.push(f.input.slice(k, f.position));
      }
      W !== 0 && ye(f), i.call(_e, F) ? _e[F](f, F, M) : fe(f, 'unknown document directive "' + F + '"');
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
    var k = new B(f, O), F = f.indexOf("\0");
    for (F !== -1 && (k.position = F, j(k, "null byte is not allowed in input")), k.input += "\0"; k.input.charCodeAt(k.position) === 32; )
      k.lineIndent += 1, k.position += 1;
    for (; k.position < k.length - 1; )
      Ve(k);
    return k.documents;
  }
  function T(f, O, k) {
    O !== null && typeof O == "object" && typeof k > "u" && (k = O, O = null);
    var F = C(f, k);
    if (typeof O != "function")
      return F;
    for (var M = 0, Z = F.length; M < Z; M += 1)
      O(F[M]);
  }
  function D(f, O) {
    var k = C(f, O);
    if (k.length !== 0) {
      if (k.length === 1)
        return k[0];
      throw new t("expected a single document in the stream, but found more");
    }
  }
  return Uo.loadAll = T, Uo.load = D, Uo;
}
var ac = {}, Bf;
function Dw() {
  if (Bf) return ac;
  Bf = 1;
  var e = To(), t = Po(), n = Wl(), r = Object.prototype.toString, i = Object.prototype.hasOwnProperty, o = 65279, a = 9, s = 10, c = 13, l = 32, u = 33, d = 34, p = 35, h = 37, m = 38, g = 39, b = 42, w = 44, _ = 45, S = 58, A = 61, E = 62, N = 63, P = 64, U = 91, ue = 93, ge = 96, pe = 123, V = 124, Q = 125, B = {};
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
  function fe(y, $) {
    var K, H, te, ae, Se, he, Ce;
    if ($ === null) return {};
    for (K = {}, H = Object.keys($), te = 0, ae = H.length; te < ae; te += 1)
      Se = H[te], he = String($[Se]), Se.slice(0, 2) === "!!" && (Se = "tag:yaml.org,2002:" + Se.slice(2)), Ce = y.compiledTypeMap.fallback[Se], Ce && i.call(Ce.styleAliases, he) && (he = Ce.styleAliases[he]), K[Se] = he;
    return K;
  }
  function _e(y) {
    var $, K, H;
    if ($ = y.toString(16).toUpperCase(), y <= 255)
      K = "x", H = 2;
    else if (y <= 65535)
      K = "u", H = 4;
    else if (y <= 4294967295)
      K = "U", H = 8;
    else
      throw new t("code point within a string may not be greater than 0xFFFFFFFF");
    return "\\" + K + e.repeat("0", H - $.length) + $;
  }
  var J = 1, L = 2;
  function q(y) {
    this.schema = y.schema || n, this.indent = Math.max(1, y.indent || 2), this.noArrayIndent = y.noArrayIndent || !1, this.skipInvalid = y.skipInvalid || !1, this.flowLevel = e.isNothing(y.flowLevel) ? -1 : y.flowLevel, this.styleMap = fe(this.schema, y.styles || null), this.sortKeys = y.sortKeys || !1, this.lineWidth = y.lineWidth || 80, this.noRefs = y.noRefs || !1, this.noCompatMode = y.noCompatMode || !1, this.condenseFlow = y.condenseFlow || !1, this.quotingType = y.quotingType === '"' ? L : J, this.forceQuotes = y.forceQuotes || !1, this.replacer = typeof y.replacer == "function" ? y.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
  }
  function ye(y, $) {
    for (var K = e.repeat(" ", $), H = 0, te = -1, ae = "", Se, he = y.length; H < he; )
      te = y.indexOf(`
`, H), te === -1 ? (Se = y.slice(H), H = he) : (Se = y.slice(H, te + 1), H = te + 1), Se.length && Se !== `
` && (ae += K), ae += Se;
    return ae;
  }
  function I(y, $) {
    return `
` + e.repeat(" ", y.indent * $);
  }
  function X(y, $) {
    var K, H, te;
    for (K = 0, H = y.implicitTypes.length; K < H; K += 1)
      if (te = y.implicitTypes[K], te.resolve($))
        return !0;
    return !1;
  }
  function re(y) {
    return y === l || y === a;
  }
  function Y(y) {
    return 32 <= y && y <= 126 || 161 <= y && y <= 55295 && y !== 8232 && y !== 8233 || 57344 <= y && y <= 65533 && y !== o || 65536 <= y && y <= 1114111;
  }
  function G(y) {
    return Y(y) && y !== o && y !== c && y !== s;
  }
  function ie(y, $, K) {
    var H = G(y), te = H && !re(y);
    return (
      // ns-plain-safe
      (K ? (
        // c = flow-in
        H
      ) : H && y !== w && y !== U && y !== ue && y !== pe && y !== Q) && y !== p && !($ === S && !te) || G($) && !re($) && y === p || $ === S && te
    );
  }
  function le(y) {
    return Y(y) && y !== o && !re(y) && y !== _ && y !== N && y !== S && y !== w && y !== U && y !== ue && y !== pe && y !== Q && y !== p && y !== m && y !== b && y !== u && y !== V && y !== A && y !== E && y !== g && y !== d && y !== h && y !== P && y !== ge;
  }
  function ve(y) {
    return !re(y) && y !== S;
  }
  function Pe(y, $) {
    var K = y.charCodeAt($), H;
    return K >= 55296 && K <= 56319 && $ + 1 < y.length && (H = y.charCodeAt($ + 1), H >= 56320 && H <= 57343) ? (K - 55296) * 1024 + H - 56320 + 65536 : K;
  }
  function ee(y) {
    var $ = /^\n* /;
    return $.test(y);
  }
  var Oe = 1, He = 2, ct = 3, et = 4, Ve = 5;
  function C(y, $, K, H, te, ae, Se, he) {
    var Ce, Ie = 0, lt = null, mt = !1, tt = !1, zo = H !== -1, jn = -1, Fn = le(Pe(y, 0)) && ve(Pe(y, y.length - 1));
    if ($ || Se)
      for (Ce = 0; Ce < y.length; Ie >= 65536 ? Ce += 2 : Ce++) {
        if (Ie = Pe(y, Ce), !Y(Ie))
          return Ve;
        Fn = Fn && ie(Ie, lt, he), lt = Ie;
      }
    else {
      for (Ce = 0; Ce < y.length; Ie >= 65536 ? Ce += 2 : Ce++) {
        if (Ie = Pe(y, Ce), Ie === s)
          mt = !0, zo && (tt = tt || // Foldable line = too long, and not more-indented.
          Ce - jn - 1 > H && y[jn + 1] !== " ", jn = Ce);
        else if (!Y(Ie))
          return Ve;
        Fn = Fn && ie(Ie, lt, he), lt = Ie;
      }
      tt = tt || zo && Ce - jn - 1 > H && y[jn + 1] !== " ";
    }
    return !mt && !tt ? Fn && !Se && !te(y) ? Oe : ae === L ? Ve : He : K > 9 && ee(y) ? Ve : Se ? ae === L ? Ve : He : tt ? et : ct;
  }
  function T(y, $, K, H, te) {
    y.dump = function() {
      if ($.length === 0)
        return y.quotingType === L ? '""' : "''";
      if (!y.noCompatMode && (se.indexOf($) !== -1 || j.test($)))
        return y.quotingType === L ? '"' + $ + '"' : "'" + $ + "'";
      var ae = y.indent * Math.max(1, K), Se = y.lineWidth === -1 ? -1 : Math.max(Math.min(y.lineWidth, 40), y.lineWidth - ae), he = H || y.flowLevel > -1 && K >= y.flowLevel;
      function Ce(Ie) {
        return X(y, Ie);
      }
      switch (C(
        $,
        he,
        y.indent,
        Se,
        Ce,
        y.quotingType,
        y.forceQuotes && !H,
        te
      )) {
        case Oe:
          return $;
        case He:
          return "'" + $.replace(/'/g, "''") + "'";
        case ct:
          return "|" + D($, y.indent) + f(ye($, ae));
        case et:
          return ">" + D($, y.indent) + f(ye(O($, Se), ae));
        case Ve:
          return '"' + F($) + '"';
        default:
          throw new t("impossible error: invalid scalar style");
      }
    }();
  }
  function D(y, $) {
    var K = ee(y) ? String($) : "", H = y[y.length - 1] === `
`, te = H && (y[y.length - 2] === `
` || y === `
`), ae = te ? "+" : H ? "" : "-";
    return K + ae + `
`;
  }
  function f(y) {
    return y[y.length - 1] === `
` ? y.slice(0, -1) : y;
  }
  function O(y, $) {
    for (var K = /(\n+)([^\n]*)/g, H = function() {
      var Ie = y.indexOf(`
`);
      return Ie = Ie !== -1 ? Ie : y.length, K.lastIndex = Ie, k(y.slice(0, Ie), $);
    }(), te = y[0] === `
` || y[0] === " ", ae, Se; Se = K.exec(y); ) {
      var he = Se[1], Ce = Se[2];
      ae = Ce[0] === " ", H += he + (!te && !ae && Ce !== "" ? `
` : "") + k(Ce, $), te = ae;
    }
    return H;
  }
  function k(y, $) {
    if (y === "" || y[0] === " ") return y;
    for (var K = / [^ ]/g, H, te = 0, ae, Se = 0, he = 0, Ce = ""; H = K.exec(y); )
      he = H.index, he - te > $ && (ae = Se > te ? Se : he, Ce += `
` + y.slice(te, ae), te = ae + 1), Se = he;
    return Ce += `
`, y.length - te > $ && Se > te ? Ce += y.slice(te, Se) + `
` + y.slice(Se + 1) : Ce += y.slice(te), Ce.slice(1);
  }
  function F(y) {
    for (var $ = "", K = 0, H, te = 0; te < y.length; K >= 65536 ? te += 2 : te++)
      K = Pe(y, te), H = B[K], !H && Y(K) ? ($ += y[te], K >= 65536 && ($ += y[te + 1])) : $ += H || _e(K);
    return $;
  }
  function M(y, $, K) {
    var H = "", te = y.tag, ae, Se, he;
    for (ae = 0, Se = K.length; ae < Se; ae += 1)
      he = K[ae], y.replacer && (he = y.replacer.call(K, String(ae), he)), (Me(y, $, he, !1, !1) || typeof he > "u" && Me(y, $, null, !1, !1)) && (H !== "" && (H += "," + (y.condenseFlow ? "" : " ")), H += y.dump);
    y.tag = te, y.dump = "[" + H + "]";
  }
  function Z(y, $, K, H) {
    var te = "", ae = y.tag, Se, he, Ce;
    for (Se = 0, he = K.length; Se < he; Se += 1)
      Ce = K[Se], y.replacer && (Ce = y.replacer.call(K, String(Se), Ce)), (Me(y, $ + 1, Ce, !0, !0, !1, !0) || typeof Ce > "u" && Me(y, $ + 1, null, !0, !0, !1, !0)) && ((!H || te !== "") && (te += I(y, $)), y.dump && s === y.dump.charCodeAt(0) ? te += "-" : te += "- ", te += y.dump);
    y.tag = ae, y.dump = te || "[]";
  }
  function W(y, $, K) {
    var H = "", te = y.tag, ae = Object.keys(K), Se, he, Ce, Ie, lt;
    for (Se = 0, he = ae.length; Se < he; Se += 1)
      lt = "", H !== "" && (lt += ", "), y.condenseFlow && (lt += '"'), Ce = ae[Se], Ie = K[Ce], y.replacer && (Ie = y.replacer.call(K, Ce, Ie)), Me(y, $, Ce, !1, !1) && (y.dump.length > 1024 && (lt += "? "), lt += y.dump + (y.condenseFlow ? '"' : "") + ":" + (y.condenseFlow ? "" : " "), Me(y, $, Ie, !1, !1) && (lt += y.dump, H += lt));
    y.tag = te, y.dump = "{" + H + "}";
  }
  function de(y, $, K, H) {
    var te = "", ae = y.tag, Se = Object.keys(K), he, Ce, Ie, lt, mt, tt;
    if (y.sortKeys === !0)
      Se.sort();
    else if (typeof y.sortKeys == "function")
      Se.sort(y.sortKeys);
    else if (y.sortKeys)
      throw new t("sortKeys must be a boolean or a function");
    for (he = 0, Ce = Se.length; he < Ce; he += 1)
      tt = "", (!H || te !== "") && (tt += I(y, $)), Ie = Se[he], lt = K[Ie], y.replacer && (lt = y.replacer.call(K, Ie, lt)), Me(y, $ + 1, Ie, !0, !0, !0) && (mt = y.tag !== null && y.tag !== "?" || y.dump && y.dump.length > 1024, mt && (y.dump && s === y.dump.charCodeAt(0) ? tt += "?" : tt += "? "), tt += y.dump, mt && (tt += I(y, $)), Me(y, $ + 1, lt, !0, mt) && (y.dump && s === y.dump.charCodeAt(0) ? tt += ":" : tt += ": ", tt += y.dump, te += tt));
    y.tag = ae, y.dump = te || "{}";
  }
  function Re(y, $, K) {
    var H, te, ae, Se, he, Ce;
    for (te = K ? y.explicitTypes : y.implicitTypes, ae = 0, Se = te.length; ae < Se; ae += 1)
      if (he = te[ae], (he.instanceOf || he.predicate) && (!he.instanceOf || typeof $ == "object" && $ instanceof he.instanceOf) && (!he.predicate || he.predicate($))) {
        if (K ? he.multi && he.representName ? y.tag = he.representName($) : y.tag = he.tag : y.tag = "?", he.represent) {
          if (Ce = y.styleMap[he.tag] || he.defaultStyle, r.call(he.represent) === "[object Function]")
            H = he.represent($, Ce);
          else if (i.call(he.represent, Ce))
            H = he.represent[Ce]($, Ce);
          else
            throw new t("!<" + he.tag + '> tag resolver accepts not "' + Ce + '" style');
          y.dump = H;
        }
        return !0;
      }
    return !1;
  }
  function Me(y, $, K, H, te, ae, Se) {
    y.tag = null, y.dump = K, Re(y, K, !1) || Re(y, K, !0);
    var he = r.call(y.dump), Ce = H, Ie;
    H && (H = y.flowLevel < 0 || y.flowLevel > $);
    var lt = he === "[object Object]" || he === "[object Array]", mt, tt;
    if (lt && (mt = y.duplicates.indexOf(K), tt = mt !== -1), (y.tag !== null && y.tag !== "?" || tt || y.indent !== 2 && $ > 0) && (te = !1), tt && y.usedDuplicates[mt])
      y.dump = "*ref_" + mt;
    else {
      if (lt && tt && !y.usedDuplicates[mt] && (y.usedDuplicates[mt] = !0), he === "[object Object]")
        H && Object.keys(y.dump).length !== 0 ? (de(y, $, y.dump, te), tt && (y.dump = "&ref_" + mt + y.dump)) : (W(y, $, y.dump), tt && (y.dump = "&ref_" + mt + " " + y.dump));
      else if (he === "[object Array]")
        H && y.dump.length !== 0 ? (y.noArrayIndent && !Se && $ > 0 ? Z(y, $ - 1, y.dump, te) : Z(y, $, y.dump, te), tt && (y.dump = "&ref_" + mt + y.dump)) : (M(y, $, y.dump), tt && (y.dump = "&ref_" + mt + " " + y.dump));
      else if (he === "[object String]")
        y.tag !== "?" && T(y, y.dump, $, ae, Ce);
      else {
        if (he === "[object Undefined]")
          return !1;
        if (y.skipInvalid) return !1;
        throw new t("unacceptable kind of an object to dump " + he);
      }
      y.tag !== null && y.tag !== "?" && (Ie = encodeURI(
        y.tag[0] === "!" ? y.tag.slice(1) : y.tag
      ).replace(/!/g, "%21"), y.tag[0] === "!" ? Ie = "!" + Ie : Ie.slice(0, 18) === "tag:yaml.org,2002:" ? Ie = "!!" + Ie.slice(18) : Ie = "!<" + Ie + ">", y.dump = Ie + " " + y.dump);
    }
    return !0;
  }
  function qe(y, $) {
    var K = [], H = [], te, ae;
    for (Ee(y, K, H), te = 0, ae = H.length; te < ae; te += 1)
      $.duplicates.push(K[H[te]]);
    $.usedDuplicates = new Array(ae);
  }
  function Ee(y, $, K) {
    var H, te, ae;
    if (y !== null && typeof y == "object")
      if (te = $.indexOf(y), te !== -1)
        K.indexOf(te) === -1 && K.push(te);
      else if ($.push(y), Array.isArray(y))
        for (te = 0, ae = y.length; te < ae; te += 1)
          Ee(y[te], $, K);
      else
        for (H = Object.keys(y), te = 0, ae = H.length; te < ae; te += 1)
          Ee(y[H[te]], $, K);
  }
  function ft(y, $) {
    $ = $ || {};
    var K = new q($);
    K.noRefs || qe(y, K);
    var H = y;
    return K.replacer && (H = K.replacer.call({ "": H }, "", H)), Me(K, 0, H, !0, !0) ? K.dump + `
` : "";
  }
  return ac.dump = ft, ac;
}
var Wf;
function jw() {
  if (Wf) return _t;
  Wf = 1;
  var e = Iw(), t = Dw();
  function n(r, i) {
    return function() {
      throw new Error("Function yaml." + r + " is removed in js-yaml 4. Use yaml." + i + " instead, which is now safe by default.");
    };
  }
  return _t.Type = Ot(), _t.Schema = Ch(), _t.FAILSAFE_SCHEMA = kh(), _t.JSON_SCHEMA = Ih(), _t.CORE_SCHEMA = Dh(), _t.DEFAULT_SCHEMA = Wl(), _t.load = e.load, _t.loadAll = e.loadAll, _t.dump = t.dump, _t.YAMLException = Po(), _t.types = {
    binary: Lh(),
    float: Mh(),
    map: Rh(),
    null: Th(),
    pairs: $h(),
    set: Vh(),
    timestamp: jh(),
    bool: Ph(),
    int: Nh(),
    merge: Fh(),
    omap: zh(),
    seq: Oh(),
    str: Ah()
  }, _t.safeLoad = n("safeLoad", "load"), _t.safeLoadAll = n("safeLoadAll", "loadAll"), _t.safeDump = n("safeDump", "dump"), _t;
}
var Pt = ot && ot.__assign || function() {
  return Pt = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Pt.apply(this, arguments);
}, Fw = ot && ot.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var i = Object.getOwnPropertyDescriptor(t, n);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, i);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), Lw = ot && ot.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), zw = ot && ot.__importStar || function(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var n in e) n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && Fw(t, e, n);
  return Lw(t, e), t;
}, Bo = ot && ot.__awaiter || function(e, t, n, r) {
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
}, Wo = ot && ot.__generator || function(e, t) {
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
}, $n = ot && ot.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, wn = ot && ot.__read || function(e, t) {
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
}, Ho = ot && ot.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, o; r < i; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}, Uh = ot && ot.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(eo, "__esModule", { value: !0 });
eo.OpenAPIClientAxios = void 0;
var $w = Uh(vw), Hf = Uh(xh), qf = wh, ur = Bl, sc = "default", Vw = (
  /** @class */
  function() {
    function e(t) {
      var n, r = this;
      this.getClient = function() {
        return Bo(r, void 0, void 0, function() {
          return Wo(this, function(o) {
            return this.initialized ? [2, this.instance] : [2, this.init()];
          });
        });
      }, this.init = function() {
        return Bo(r, void 0, void 0, function() {
          return Wo(this, function(o) {
            switch (o.label) {
              case 0:
                return [4, this.loadDocument()];
              case 1:
                return o.sent(), this.definition = (0, qf.dereferenceSync)(this.document), this.instance = this.createAxiosInstance(), this.initialized = !0, [2, this.instance];
            }
          });
        });
      }, this.initSync = function() {
        if (typeof r.inputDocument != "object")
          throw new Error(".initSync() can't be called with a non-object definition. Please use .init()");
        return r.document = r.inputDocument, r.definition = (0, qf.dereferenceSync)(r.document), r.instance = r.createAxiosInstance(), r.initialized = !0, r.instance;
      }, this.getAxiosInstance = function() {
        var o = $w.default.create(r.axiosConfigDefaults);
        return o;
      }, this.createAxiosInstance = function() {
        var o, a, s = r.getAxiosInstance(), c = r.getBaseURL();
        c && !r.axiosConfigDefaults.baseURL && (s.defaults.baseURL = c);
        var l = r.getOperations();
        try {
          for (var u = $n(l), d = u.next(); !d.done; d = u.next()) {
            var p = d.value, h = p.operationId;
            h && (s[r.transformOperationName(h)] = r.createOperationMethod(p));
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
        var m = function(b) {
          if (r.definition.paths[b]) {
            s.paths[b] || (s.paths[b] = {});
            var w = r.definition.paths[b], _ = function(A) {
              if (w[A] && Object.values(ur.HttpMethod).includes(A)) {
                var E = A, N = r.getOperations().find(function(P) {
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
              for (var d = $n(r.definition.servers), p = d.next(); !p.done; p = d.next()) {
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
            var m = u.url, g = u.variables, b = (0, Hf.default)(m);
            if (!b.names.length)
              return m;
            var w = {};
            try {
              for (var _ = $n(b.names), S = _.next(); !S.done; S = _.next()) {
                var A = S.value, E = r.baseURLVariables[A];
                if (E !== void 0 && g[A].enum) {
                  if (typeof E == "number") {
                    var N = g[A].enum[E];
                    if (N)
                      w[A] = N;
                    else
                      throw new Error("index ".concat(E, " out of range for enum of baseURL variable: ").concat(A, ";               enum max index is ").concat(g[A].enum.length - 1));
                  } else if (typeof E == "string")
                    if (g[A].enum.includes(E))
                      w[A] = E;
                    else
                      throw new Error("".concat(E, " is not a valid entry for baseURL variable ").concat(A, ";                 variable must be of the following: ").concat(g[A].enum.join(", ")));
                } else
                  w[A] = g[A].default;
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
        var u = wn(a, 3), d = u[2];
        return Pt(Pt(Pt({}, c), d), { params: Pt(Pt({}, c == null ? void 0 : c.params), d == null ? void 0 : d.params), headers: Pt(Pt({}, c == null ? void 0 : c.headers), d == null ? void 0 : d.headers) });
      }, this.getRequestConfigForOperation = function(o, a) {
        var s, c, l, u, d, p, h, m, g, b;
        typeof o == "string" && (o = r.getOperation(o));
        var w = {}, _ = new URLSearchParams(), S = {}, A = {}, E = {}, N = o.parameters || [], P = function(Ve, C, T) {
          var D, f;
          switch (T) {
            case ur.ParamType.Path:
              w[Ve] = C;
              break;
            case ur.ParamType.Query:
              if (Array.isArray(C))
                try {
                  for (var O = $n(C), k = O.next(); !k.done; k = O.next()) {
                    var F = k.value;
                    _.append(Ve, F);
                  }
                } catch (M) {
                  D = { error: M };
                } finally {
                  try {
                    k && !k.done && (f = O.return) && f.call(O);
                  } finally {
                    if (D) throw D.error;
                  }
                }
              else
                _.append(Ve, C);
              S[Ve] = C;
              break;
            case ur.ParamType.Header:
              A[Ve] = C;
              break;
            case ur.ParamType.Cookie:
              E[Ve] = C;
              break;
          }
        }, U = function(Ve) {
          var C = N.find(function(T) {
            var D = T.name;
            return D === Ve;
          });
          return C ? C.in : ur.ParamType.Query;
        }, ue = function() {
          var Ve = N.find(function(T) {
            var D = T.required;
            return D === !0;
          });
          if (Ve)
            return Ve;
          var C = N[0];
          if (C)
            return C;
        }, ge = wn(a, 2), pe = ge[0], V = ge[1];
        if (Array.isArray(pe))
          try {
            for (var Q = $n(pe), B = Q.next(); !B.done; B = Q.next()) {
              var se = B.value;
              P(se.name, se.value, se.in || U(se.name));
            }
          } catch (Ve) {
            s = { error: Ve };
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
        var _e = (0, Hf.default)(o.path);
        try {
          for (var J = $n(_e.names), L = J.next(); !L.done; L = J.next()) {
            var q = L.value, ye = w[q];
            w[q] = "".concat(ye);
          }
        } catch (Ve) {
          l = { error: Ve };
        } finally {
          try {
            L && !L.done && (u = J.return) && u.call(J);
          } finally {
            if (l) throw l.error;
          }
        }
        var I = _e.path(w), X = _.toString(), re = "".concat(r.getBaseURL(o)).concat(I).concat(X ? "?".concat(X) : ""), Y = r.client.defaults.headers;
        try {
          for (var G = $n(Object.entries((g = Y.common) !== null && g !== void 0 ? g : {})), ie = G.next(); !ie.done; ie = G.next()) {
            var le = wn(ie.value, 2), ve = le[0], Pe = le[1];
            A[ve] = Pe;
          }
        } catch (Ve) {
          d = { error: Ve };
        } finally {
          try {
            ie && !ie.done && (p = G.return) && p.call(G);
          } finally {
            if (d) throw d.error;
          }
        }
        if (r.applyMethodCommonHeaders) {
          var ee = (b = Y[o.method]) !== null && b !== void 0 ? b : {};
          try {
            for (var Oe = $n(Object.entries(ee)), He = Oe.next(); !He.done; He = Oe.next()) {
              var ct = wn(He.value, 2), ve = ct[0], Pe = ct[1];
              A[ve] = Pe;
            }
          } catch (Ve) {
            h = { error: Ve };
          } finally {
            try {
              He && !He.done && (m = Oe.return) && m.call(Oe);
            } finally {
              if (h) throw h.error;
            }
          }
        }
        var et = {
          method: o.method,
          url: re,
          path: I,
          pathParams: w,
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
          var c = wn(s, 2), l = c[0], u = c[1];
          return Object.values(ur.HttpMethod).map(function(d) {
            return { path: l, method: d, operation: u[d] };
          }).filter(function(d) {
            var p = d.operation;
            return p;
          }).map(function(d) {
            var p, h = d.operation, m = d.method, g = Pt(Pt({}, typeof h == "object" ? h : {}), { path: l, method: m });
            return u.parameters && (g.parameters = Ho(Ho([], wn(g.parameters || []), !1), wn(u.parameters), !1)), u.servers && (g.servers = Ho(Ho([], wn(g.servers || []), !1), wn(u.servers), !1)), g.security = (p = g.security) !== null && p !== void 0 ? p : r.definition.security, g;
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
          return Bo(r, void 0, void 0, function() {
            var l, u;
            return Wo(this, function(d) {
              return l = this.getAxiosConfigForOperation(o, s), u = this.getRunner(o.operationId), [2, u.runRequest(l, o, u.context)];
            });
          });
        };
        return r.transformOperationMethod(a, o);
      };
      var i = Pt(Pt({ quick: !1, withServer: 0, baseURLVariables: {}, transformOperationName: function(o) {
        return o;
      }, transformOperationMethod: function(o) {
        return o;
      }, axiosRunner: function(o) {
        return r.client.request(o);
      }, applyMethodCommonHeaders: !1 }, t), { axiosConfigDefaults: Pt({}, t.axiosConfigDefaults || {}) });
      this.inputDocument = i.definition, this.quick = i.quick, this.axiosConfigDefaults = i.axiosConfigDefaults, this.defaultServer = i.withServer, this.baseURLVariables = i.baseURLVariables, this.applyMethodCommonHeaders = i.applyMethodCommonHeaders, this.transformOperationName = i.transformOperationName, this.transformOperationMethod = i.transformOperationMethod, this.runners = (n = {}, n[sc] = { runRequest: i.axiosRunner }, n);
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
      return Bo(this, void 0, void 0, function() {
        var n, r, i, o;
        return Wo(this, function(a) {
          switch (a.label) {
            case 0:
              return typeof this.inputDocument != "object" ? [3, 1] : (this.document = this.inputDocument, [3, 6]);
            case 1:
              return n = this.getAxiosInstance(), [4, n.get(this.inputDocument)];
            case 2:
              return r = a.sent(), typeof r.data != "object" ? [3, 3] : (this.document = r.data, [3, 6]);
            case 3:
              return typeof r.data == "string" && (!((t = r.headers["content-type"]) === null || t === void 0) && t.match(/ya?ml/)) ? [4, Promise.resolve().then(function() {
                return zw(jw());
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
      this.runners[n ?? sc] = t;
    }, e.prototype.getRunner = function(t) {
      var n;
      return (n = this.runners[t]) !== null && n !== void 0 ? n : this.runners[sc];
    }, e;
  }()
);
eo.OpenAPIClientAxios = Vw;
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
  var r = eo;
  e.default = r.OpenAPIClientAxios, n(eo, e), n(Bl, e);
})(Kp);
const Uw = /* @__PURE__ */ Cp(Kp), Nt = class Nt {
  constructor() {
  }
  static configure(t) {
    Nt.serverUrl = t;
  }
  static async getInstance() {
    if (!Nt.serverUrl)
      throw new Error("ApiClient not configured. Please call ApiClient.configure(serverUrl) before using it.");
    return Nt.instance ? Nt.instance : (Nt.initializing || (Nt.initializing = (async () => {
      const t = new Uw({
        definition: `${this.serverUrl}/wd-media-api/docs.jsonopenapi`,
        transformOperationMethod: (r, i) => (o, a, s) => (i.method === "patch" && (s = s || {}, s.headers = {
          "Content-Type": "application/merge-patch+json",
          ...s.headers
        }), r(o, a, s))
      });
      t.withServer({ url: String(this.serverUrl) });
      const n = await t.init();
      return Nt.instance = n, Nt.initializing = null, n;
    })()), Nt.initializing);
  }
};
$r(Nt, "instance", null), $r(Nt, "initializing", null), $r(Nt, "serverUrl", null);
let On = Nt;
const Bw = {
  items: [],
  status: "idle",
  error: null,
  view: null,
  updateStatus: "idle",
  updateError: null
}, ni = Oo(
  "fetch",
  async (e) => (await (await On.getInstance()).getMedias({ page: e }, null, {
    headers: {
      Accept: "application/ld+json"
    }
  })).data
), Bh = async (e) => (await (await On.getInstance()).getMedia({ id: String(e) }, null, {})).data;
Oo(
  "fetchOne",
  Bh
);
const sa = Oo(
  "patch",
  async (e) => (await (await On.getInstance()).patchMedia(e.id, e)).data
), ca = Oo(
  "patchFile",
  async (e) => {
    const t = new FormData();
    return t.append("file", e.file), (await (await On.getInstance()).patchMediaFile(e.id, t, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })).data;
  }
), la = Oo(
  "createMedia",
  async (e) => {
    const t = new FormData();
    return t.append("file", e.file), t.append("category", e.category), (await (await On.getInstance()).postMedia(null, t, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })).data;
  }
), Wh = Zp({
  name: "media",
  initialState: Bw,
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
    e.addCase(ni.pending, (t) => {
      t.status = "loading", t.view = null;
    }).addCase(ni.fulfilled, (t, n) => {
      t.status = "succeeded", t.items = n.payload["hydra:member"], t.view = n.payload["hydra:view"];
    }).addCase(ni.rejected, (t, n) => {
      t.status = "failed", t.view = null, t.error = n.error.message || "Failed to fetch media items";
    }), e.addCase(sa.pending, (t) => {
      t.updateStatus = "loading";
    }).addCase(sa.fulfilled, (t, n) => {
      t.updateStatus = "succeeded";
      const r = t.items.findIndex((i) => i.id === n.payload.id);
      r !== -1 && (t.items[r] = n.payload);
    }).addCase(sa.rejected, (t, n) => {
      t.updateStatus = "failed", t.updateError = n.error.message || "Failed to update media item";
    }), e.addCase(ca.pending, (t) => {
      t.updateStatus = "loading";
    }).addCase(ca.fulfilled, (t, n) => {
      t.updateStatus = "succeeded";
      const r = t.items.findIndex((i) => i.id === n.payload.id);
      r !== -1 && (t.items[r] = n.payload);
    }).addCase(ca.rejected, (t, n) => {
      t.updateStatus = "failed", t.updateError = n.error.message || "Failed to update media file item";
    }), e.addCase(la.pending, (t) => {
      t.updateStatus = "loading";
    }).addCase(la.fulfilled, (t) => {
      t.updateStatus = "succeeded";
    }).addCase(la.rejected, (t, n) => {
      t.updateStatus = "failed", t.updateError = n.error.message || "Failed to create media item";
    });
  }
});
Wh.actions;
const Ww = Wh.reducer, Hw = {
  currentMedia: null,
  picker: !1
}, Hh = Zp({
  name: "main",
  initialState: Hw,
  reducers: {
    setCurrentMedia: (e, t) => {
      e.currentMedia = t.payload;
    },
    setPicker: (e, t) => {
      e.picker = t.payload;
    }
  }
}), {
  setCurrentMedia: Jc,
  setPicker: qw
} = Hh.actions, Yw = Hh.reducer, qh = _x({
  reducer: {
    main: Yw,
    media: Ww
  }
}), Yh = async (e) => {
  On.configure(e), await On.getInstance();
};
function Gh(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Gh(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Gw() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Gh(e)) && (r && (r += " "), r += t);
  return r;
}
const Hl = "-";
function Zw(e) {
  const t = Xw(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function i(a) {
    const s = a.split(Hl);
    return s[0] === "" && s.length !== 1 && s.shift(), Zh(s, t) || Kw(a);
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
function Zh(e, t) {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), i = r ? Zh(e.slice(1), r) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const o = e.join(Hl);
  return (a = t.validators.find(({
    validator: s
  }) => s(o))) == null ? void 0 : a.classGroupId;
}
const Yf = /^\[(.+)\]$/;
function Kw(e) {
  if (Yf.test(e)) {
    const t = Yf.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Xw(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Qw(Object.entries(e.classGroups), n).forEach(([o, a]) => {
    Qc(a, r, o, t);
  }), r;
}
function Qc(e, t, n, r) {
  e.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? t : Gf(t, i);
      o.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (Jw(i)) {
        Qc(i(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: n
      });
      return;
    }
    Object.entries(i).forEach(([o, a]) => {
      Qc(a, Gf(t, o), n, r);
    });
  });
}
function Gf(e, t) {
  let n = e;
  return t.split(Hl).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function Jw(e) {
  return e.isThemeGetter;
}
function Qw(e, t) {
  return t ? e.map(([n, r]) => {
    const i = r.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([a, s]) => [t + a, s])) : o);
    return [n, i];
  }) : e;
}
function e_(e) {
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
const Kh = "!";
function t_(e) {
  const t = e.separator, n = t.length === 1, r = t[0], i = t.length;
  return function(a) {
    const s = [];
    let c = 0, l = 0, u;
    for (let g = 0; g < a.length; g++) {
      let b = a[g];
      if (c === 0) {
        if (b === r && (n || a.slice(g, g + i) === t)) {
          s.push(a.slice(l, g)), l = g + i;
          continue;
        }
        if (b === "/") {
          u = g;
          continue;
        }
      }
      b === "[" ? c++ : b === "]" && c--;
    }
    const d = s.length === 0 ? a : a.substring(l), p = d.startsWith(Kh), h = p ? d.substring(1) : d, m = u && u > l ? u - l : void 0;
    return {
      modifiers: s,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: m
    };
  };
}
function n_(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function r_(e) {
  return {
    cache: e_(e.cacheSize),
    splitModifiers: t_(e),
    ...Zw(e)
  };
}
const i_ = /\s+/;
function o_(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: i
  } = t, o = /* @__PURE__ */ new Set();
  return e.trim().split(i_).map((a) => {
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
    const h = n_(s).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? h + Kh : h,
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
function a_() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Xh(t)) && (r && (r += " "), r += n);
  return r;
}
function Xh(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Xh(e[r])) && (n && (n += " "), n += t);
  return n;
}
function s_(e, ...t) {
  let n, r, i, o = a;
  function a(c) {
    const l = t.reduce((u, d) => d(u), e());
    return n = r_(l), r = n.cache.get, i = n.cache.set, o = s, s(c);
  }
  function s(c) {
    const l = r(c);
    if (l)
      return l;
    const u = o_(c, n);
    return i(c, u), u;
  }
  return function() {
    return o(a_.apply(null, arguments));
  };
}
function it(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const Jh = /^\[(?:([a-z-]+):)?(.+)\]$/i, c_ = /^\d+\/\d+$/, l_ = /* @__PURE__ */ new Set(["px", "full", "screen"]), u_ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, f_ = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, d_ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, p_ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, h_ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function _n(e) {
  return hr(e) || l_.has(e) || c_.test(e);
}
function Vn(e) {
  return wi(e, "length", __);
}
function hr(e) {
  return !!e && !Number.isNaN(Number(e));
}
function qo(e) {
  return wi(e, "number", hr);
}
function Ti(e) {
  return !!e && Number.isInteger(Number(e));
}
function m_(e) {
  return e.endsWith("%") && hr(e.slice(0, -1));
}
function Fe(e) {
  return Jh.test(e);
}
function Un(e) {
  return u_.test(e);
}
const g_ = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function y_(e) {
  return wi(e, g_, Qh);
}
function v_(e) {
  return wi(e, "position", Qh);
}
const b_ = /* @__PURE__ */ new Set(["image", "url"]);
function x_(e) {
  return wi(e, b_, S_);
}
function w_(e) {
  return wi(e, "", E_);
}
function Pi() {
  return !0;
}
function wi(e, t, n) {
  const r = Jh.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function __(e) {
  return f_.test(e) && !d_.test(e);
}
function Qh() {
  return !1;
}
function E_(e) {
  return p_.test(e);
}
function S_(e) {
  return h_.test(e);
}
function C_() {
  const e = it("colors"), t = it("spacing"), n = it("blur"), r = it("brightness"), i = it("borderColor"), o = it("borderRadius"), a = it("borderSpacing"), s = it("borderWidth"), c = it("contrast"), l = it("grayscale"), u = it("hueRotate"), d = it("invert"), p = it("gap"), h = it("gradientColorStops"), m = it("gradientColorStopPositions"), g = it("inset"), b = it("margin"), w = it("opacity"), _ = it("padding"), S = it("saturate"), A = it("scale"), E = it("sepia"), N = it("skew"), P = it("space"), U = it("translate"), ue = () => ["auto", "contain", "none"], ge = () => ["auto", "hidden", "clip", "visible", "scroll"], pe = () => ["auto", Fe, t], V = () => [Fe, t], Q = () => ["", _n, Vn], B = () => ["auto", hr, Fe], se = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], j = () => ["solid", "dashed", "dotted", "double", "none"], fe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], _e = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], J = () => ["", "0", Fe], L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], q = () => [hr, qo], ye = () => [hr, Fe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Pi],
      spacing: [_n, Vn],
      blur: ["none", "", Un, Fe],
      brightness: q(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Un, Fe],
      borderSpacing: V(),
      borderWidth: Q(),
      contrast: q(),
      grayscale: J(),
      hueRotate: ye(),
      invert: J(),
      gap: V(),
      gradientColorStops: [e],
      gradientColorStopPositions: [m_, Vn],
      inset: pe(),
      margin: pe(),
      opacity: q(),
      padding: V(),
      saturate: q(),
      scale: q(),
      sepia: J(),
      skew: ye(),
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
        columns: [Un]
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
        overflow: ge()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ge()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ge()
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
        z: ["auto", Ti, Fe]
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
        order: ["first", "last", "none", Ti, Fe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Pi]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ti, Fe]
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
        "grid-rows": [Pi]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ti, Fe]
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
          screen: [Un]
        }, Un]
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
        text: ["base", Un, Vn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", qo]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Pi]
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
        "line-clamp": ["none", hr, qo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", _n, Fe]
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
        decoration: [...j(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", _n, Vn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", _n, Fe]
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
        bg: [...se(), v_]
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
        bg: ["auto", "cover", "contain", y_]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, x_]
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
        "border-opacity": [w]
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
        "divide-opacity": [w]
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
        "outline-offset": [_n, Fe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [_n, Vn]
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
        "ring-offset": [_n, Vn]
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
        shadow: ["", "inner", "none", Un, w_]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Pi]
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
        "drop-shadow": ["", "none", Un, Fe]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Fe]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ye()
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
        delay: ye()
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
        rotate: [Ti, Fe]
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
        stroke: [_n, Vn, qo]
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
const A_ = /* @__PURE__ */ s_(C_);
function $e(...e) {
  return A_(Gw(e));
}
function Zf(e) {
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
function Kf(e) {
  return e == null ? !1 : typeof e == "string" ? e.trim().length > 0 : Array.isArray(e) ? e.length > 0 : typeof e == "object" ? Object.keys(e).length > 0 : !0;
}
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), em = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var R_ = {
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
const k_ = Sp(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: o,
    iconNode: a,
    ...s
  }, c) => Dc(
    "svg",
    {
      ref: c,
      ...R_,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: em("lucide", i),
      ...s
    },
    [
      ...a.map(([l, u]) => Dc(l, u)),
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
const _i = (e, t) => {
  const n = Sp(
    ({ className: r, ...i }, o) => Dc(k_, {
      ref: o,
      iconNode: t,
      className: em(`lucide-${O_(e)}`, r),
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
const T_ = _i("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tm = _i("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P_ = _i("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N_ = _i("Ellipsis", [
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
const M_ = _i("GripVertical", [
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
const I_ = _i("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), {
  createElement: ui,
  createContext: D_,
  createRef: IT,
  forwardRef: nm,
  useCallback: Tt,
  useContext: rm,
  useEffect: br,
  useImperativeHandle: im,
  useLayoutEffect: j_,
  useMemo: F_,
  useRef: Dt,
  useState: ri
} = x, Xf = x.useId, L_ = j_, ls = D_(null);
ls.displayName = "PanelGroupContext";
const xr = L_, z_ = typeof Xf == "function" ? Xf : () => null;
let $_ = 0;
function ql(e = null) {
  const t = z_(), n = Dt(e || t || null);
  return n.current === null && (n.current = "" + $_++), e ?? n.current;
}
function om({
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
  ...g
}) {
  const b = rm(ls);
  if (b === null)
    throw Error("Panel components must be rendered within a PanelGroup container");
  const {
    collapsePanel: w,
    expandPanel: _,
    getPanelSize: S,
    getPanelStyle: A,
    groupId: E,
    isPanelCollapsed: N,
    reevaluatePanelConstraints: P,
    registerPanel: U,
    resizePanel: ue,
    unregisterPanel: ge
  } = b, pe = ql(a), V = Dt({
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
  Dt({
    didLogMissingDefaultSizeWarning: !1
  }), xr(() => {
    const {
      callbacks: B,
      constraints: se
    } = V.current, j = {
      ...se
    };
    V.current.id = pe, V.current.idIsFromProps = a !== void 0, V.current.order = p, B.onCollapse = l, B.onExpand = u, B.onResize = d, se.collapsedSize = n, se.collapsible = r, se.defaultSize = i, se.maxSize = s, se.minSize = c, (j.collapsedSize !== se.collapsedSize || j.collapsible !== se.collapsible || j.maxSize !== se.maxSize || j.minSize !== se.minSize) && P(V.current, j);
  }), xr(() => {
    const B = V.current;
    return U(B), () => {
      ge(B);
    };
  }, [p, pe, U, ge]), im(o, () => ({
    collapse: () => {
      w(V.current);
    },
    expand: (B) => {
      _(V.current, B);
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
  }), [w, _, S, N, pe, ue]);
  const Q = A(V.current, i);
  return ui(m, {
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
    "data-panel-id": pe,
    "data-panel-size": parseFloat("" + Q.flexGrow).toFixed(1)
  });
}
const am = nm((e, t) => ui(om, {
  ...e,
  forwardedRef: t
}));
om.displayName = "Panel";
am.displayName = "forwardRef(Panel)";
let el = null, mr = null;
function V_(e, t) {
  if (t) {
    const n = (t & fm) !== 0, r = (t & dm) !== 0, i = (t & pm) !== 0, o = (t & hm) !== 0;
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
function U_() {
  mr !== null && (document.head.removeChild(mr), el = null, mr = null);
}
function cc(e, t) {
  const n = V_(e, t);
  el !== n && (el = n, mr === null && (mr = document.createElement("style"), document.head.appendChild(mr)), mr.innerHTML = `*{cursor: ${n}!important;}`);
}
function sm(e) {
  return e.type === "keydown";
}
function cm(e) {
  return e.type.startsWith("pointer");
}
function lm(e) {
  return e.type.startsWith("mouse");
}
function us(e) {
  if (cm(e)) {
    if (e.isPrimary)
      return {
        x: e.clientX,
        y: e.clientY
      };
  } else if (lm(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  return {
    x: 1 / 0,
    y: 1 / 0
  };
}
function B_() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
function W_(e, t, n) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function H_(e, t) {
  if (e === t) throw new Error("Cannot compare node with itself");
  const n = {
    a: ed(e),
    b: ed(t)
  };
  let r;
  for (; n.a.at(-1) === n.b.at(-1); )
    e = n.a.pop(), t = n.b.pop(), r = e;
  Be(r, "Stacking order can only be calculated for elements with a common ancestor");
  const i = {
    a: Qf(Jf(n.a)),
    b: Qf(Jf(n.b))
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
const q_ = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function Y_(e) {
  var t;
  const n = getComputedStyle((t = um(e)) !== null && t !== void 0 ? t : e).display;
  return n === "flex" || n === "inline-flex";
}
function G_(e) {
  const t = getComputedStyle(e);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || Y_(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || q_.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function Jf(e) {
  let t = e.length;
  for (; t--; ) {
    const n = e[t];
    if (Be(n, "Missing node"), G_(n)) return n;
  }
  return null;
}
function Qf(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function ed(e) {
  const t = [];
  for (; e; )
    t.push(e), e = um(e);
  return t;
}
function um(e) {
  const {
    parentNode: t
  } = e;
  return t && t instanceof ShadowRoot ? t.host : t;
}
const fm = 1, dm = 2, pm = 4, hm = 8, Z_ = B_() === "coarse";
let en = [], no = !1, qn = /* @__PURE__ */ new Map(), fs = /* @__PURE__ */ new Map();
const ro = /* @__PURE__ */ new Set();
function K_(e, t, n, r, i) {
  var o;
  const {
    ownerDocument: a
  } = t, s = {
    direction: n,
    element: t,
    hitAreaMargins: r,
    setResizeHandlerState: i
  }, c = (o = qn.get(a)) !== null && o !== void 0 ? o : 0;
  return qn.set(a, c + 1), ro.add(s), Aa(), function() {
    var u;
    fs.delete(e), ro.delete(s);
    const d = (u = qn.get(a)) !== null && u !== void 0 ? u : 1;
    if (qn.set(a, d - 1), Aa(), d === 1 && qn.delete(a), en.includes(s)) {
      const p = en.indexOf(s);
      p >= 0 && en.splice(p, 1), Gl();
    }
  };
}
function td(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = us(e);
  no = !0, Yl({
    target: t,
    x: n,
    y: r
  }), Aa(), en.length > 0 && (Oa("down", e), e.preventDefault(), e.stopPropagation());
}
function Ni(e) {
  const {
    x: t,
    y: n
  } = us(e);
  if (e.buttons === 0 && (no = !1, Oa("up", e)), !no) {
    const {
      target: r
    } = e;
    Yl({
      target: r,
      x: t,
      y: n
    });
  }
  Oa("move", e), Gl(), en.length > 0 && e.preventDefault();
}
function Vr(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = us(e);
  fs.clear(), no = !1, en.length > 0 && e.preventDefault(), Oa("up", e), Yl({
    target: t,
    x: n,
    y: r
  }), Gl(), Aa();
}
function Yl({
  target: e,
  x: t,
  y: n
}) {
  en.splice(0);
  let r = null;
  e instanceof HTMLElement && (r = e), ro.forEach((i) => {
    const {
      element: o,
      hitAreaMargins: a
    } = i, s = o.getBoundingClientRect(), {
      bottom: c,
      left: l,
      right: u,
      top: d
    } = s, p = Z_ ? a.coarse : a.fine;
    if (t >= l - p && t <= u + p && n >= d - p && n <= c + p) {
      if (r !== null && o !== r && !o.contains(r) && !r.contains(o) && // Calculating stacking order has a cost, so we should avoid it if possible
      // That is why we only check potentially intersecting handles,
      // and why we skip if the event target is within the handle's DOM
      H_(r, o) > 0) {
        let m = r, g = !1;
        for (; m && !m.contains(o); ) {
          if (W_(m.getBoundingClientRect(), s)) {
            g = !0;
            break;
          }
          m = m.parentElement;
        }
        if (g)
          return;
      }
      en.push(i);
    }
  });
}
function lc(e, t) {
  fs.set(e, t);
}
function Gl() {
  let e = !1, t = !1;
  en.forEach((r) => {
    const {
      direction: i
    } = r;
    i === "horizontal" ? e = !0 : t = !0;
  });
  let n = 0;
  fs.forEach((r) => {
    n |= r;
  }), e && t ? cc("intersection", n) : e ? cc("horizontal", n) : t ? cc("vertical", n) : U_();
}
function Aa() {
  qn.forEach((e, t) => {
    const {
      body: n
    } = t;
    n.removeEventListener("contextmenu", Vr), n.removeEventListener("pointerdown", td), n.removeEventListener("pointerleave", Ni), n.removeEventListener("pointermove", Ni);
  }), window.removeEventListener("pointerup", Vr), window.removeEventListener("pointercancel", Vr), ro.size > 0 && (no ? (en.length > 0 && qn.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("contextmenu", Vr), n.addEventListener("pointerleave", Ni), n.addEventListener("pointermove", Ni));
  }), window.addEventListener("pointerup", Vr), window.addEventListener("pointercancel", Vr)) : qn.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("pointerdown", td, {
      capture: !0
    }), n.addEventListener("pointermove", Ni));
  }));
}
function Oa(e, t) {
  ro.forEach((n) => {
    const {
      setResizeHandlerState: r
    } = n, i = en.includes(n);
    r(e, i, t);
  });
}
function X_() {
  const [e, t] = ri(0);
  return Tt(() => t((n) => n + 1), []);
}
function Be(e, t) {
  if (!e)
    throw console.error(t), Error(t);
}
const Zl = 10;
function Rr(e, t, n = Zl) {
  return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
}
function Cn(e, t, n = Zl) {
  return Rr(e, t, n) === 0;
}
function Ft(e, t, n) {
  return Rr(e, t, n) === 0;
}
function J_(e, t, n) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++) {
    const i = e[r], o = t[r];
    if (!Ft(i, o, n))
      return !1;
  }
  return !0;
}
function Kr({
  panelConstraints: e,
  panelIndex: t,
  size: n
}) {
  const r = e[t];
  Be(r != null, `Panel constraints not found for index ${t}`);
  let {
    collapsedSize: i = 0,
    collapsible: o,
    maxSize: a = 100,
    minSize: s = 0
  } = r;
  if (Rr(n, s) < 0)
    if (o) {
      const c = (i + s) / 2;
      Rr(n, c) < 0 ? n = i : n = s;
    } else
      n = s;
  return n = Math.min(a, n), n = parseFloat(n.toFixed(Zl)), n;
}
function ji({
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
  Be(s != null, "Invalid first pivot index"), Be(c != null, "Invalid second pivot index");
  let l = 0;
  if (o === "keyboard") {
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
        if (Be(b != null, `Previous layout not found for panel index ${d}`), Ft(b, h)) {
          const w = g - b;
          Rr(w, Math.abs(e)) > 0 && (e = e < 0 ? 0 - w : w);
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
        if (Be(b != null, `Previous layout not found for panel index ${d}`), Ft(b, g)) {
          const w = b - h;
          Rr(w, Math.abs(e)) > 0 && (e = e < 0 ? 0 - w : w);
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
      const w = Kr({
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
      const g = m - h, b = Kr({
        panelConstraints: n,
        panelIndex: p,
        size: g
      });
      if (!Ft(m, b) && (l += m - b, a[p] = b, l.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      e < 0 ? p-- : p++;
    }
  }
  if (J_(i, a))
    return i;
  {
    const d = e < 0 ? c : s, p = t[d];
    Be(p != null, `Previous layout not found for panel index ${d}`);
    const h = p + l, m = Kr({
      panelConstraints: n,
      panelIndex: d,
      size: h
    });
    if (a[d] = m, !Ft(m, h)) {
      let g = h - m, w = e < 0 ? c : s;
      for (; w >= 0 && w < n.length; ) {
        const _ = a[w];
        Be(_ != null, `Previous layout not found for panel index ${w}`);
        const S = _ + g, A = Kr({
          panelConstraints: n,
          panelIndex: w,
          size: S
        });
        if (Ft(_, A) || (g -= A - _, a[w] = A), Ft(g, 0))
          break;
        e > 0 ? w-- : w++;
      }
    }
  }
  const u = a.reduce((d, p) => p + d, 0);
  return Ft(u, 100) ? a : i;
}
function Q_({
  layout: e,
  panelsArray: t,
  pivotIndices: n
}) {
  let r = 0, i = 100, o = 0, a = 0;
  const s = n[0];
  Be(s != null, "No pivot index found"), t.forEach((d, p) => {
    const {
      constraints: h
    } = d, {
      maxSize: m = 100,
      minSize: g = 0
    } = h;
    p === s ? (r = g, i = m) : (o += g, a += m);
  });
  const c = Math.min(i, 100 - o), l = Math.max(r, 100 - a), u = e[s];
  return {
    valueMax: c,
    valueMin: l,
    valueNow: u
  };
}
function io(e, t = document) {
  return Array.from(t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`));
}
function mm(e, t, n = document) {
  const i = io(e, n).findIndex((o) => o.getAttribute("data-panel-resize-handle-id") === t);
  return i ?? null;
}
function gm(e, t, n) {
  const r = mm(e, t, n);
  return r != null ? [r, r + 1] : [-1, -1];
}
function ym(e, t = document) {
  var n;
  if (t instanceof HTMLElement && (t == null || (n = t.dataset) === null || n === void 0 ? void 0 : n.panelGroupId) == e)
    return t;
  const r = t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);
  return r || null;
}
function ds(e, t = document) {
  const n = t.querySelector(`[data-panel-resize-handle-id="${e}"]`);
  return n || null;
}
function eE(e, t, n, r = document) {
  var i, o, a, s;
  const c = ds(t, r), l = io(e, r), u = c ? l.indexOf(c) : -1, d = (i = (o = n[u]) === null || o === void 0 ? void 0 : o.id) !== null && i !== void 0 ? i : null, p = (a = (s = n[u + 1]) === null || s === void 0 ? void 0 : s.id) !== null && a !== void 0 ? a : null;
  return [d, p];
}
function tE({
  committedValuesRef: e,
  eagerValuesRef: t,
  groupId: n,
  layout: r,
  panelDataArray: i,
  panelGroupElement: o,
  setLayout: a
}) {
  Dt({
    didWarnAboutMissingResizeHandle: !1
  }), xr(() => {
    if (!o)
      return;
    const s = io(n, o);
    for (let c = 0; c < i.length - 1; c++) {
      const {
        valueMax: l,
        valueMin: u,
        valueNow: d
      } = Q_({
        layout: r,
        panelsArray: i,
        pivotIndices: [c, c + 1]
      }), p = s[c];
      if (p != null) {
        const h = i[c];
        Be(h, `No panel data found for index "${c}"`), p.setAttribute("aria-controls", h.id), p.setAttribute("aria-valuemax", "" + Math.round(l)), p.setAttribute("aria-valuemin", "" + Math.round(u)), p.setAttribute("aria-valuenow", d != null ? "" + Math.round(d) : "");
      }
    }
    return () => {
      s.forEach((c, l) => {
        c.removeAttribute("aria-controls"), c.removeAttribute("aria-valuemax"), c.removeAttribute("aria-valuemin"), c.removeAttribute("aria-valuenow");
      });
    };
  }, [n, r, i, o]), br(() => {
    if (!o)
      return;
    const s = t.current;
    Be(s, "Eager values not found");
    const {
      panelDataArray: c
    } = s, l = ym(n, o);
    Be(l != null, `No group found for id "${n}"`);
    const u = io(n, o);
    Be(u, `No resize handles found for group id "${n}"`);
    const d = u.map((p) => {
      const h = p.getAttribute("data-panel-resize-handle-id");
      Be(h, "Resize handle element has no handle id attribute");
      const [m, g] = eE(n, h, c, o);
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
                const A = r[_], {
                  collapsedSize: E = 0,
                  collapsible: N,
                  minSize: P = 0
                } = S.constraints;
                if (A != null && N) {
                  const U = ji({
                    delta: Ft(A, E) ? P - E : E - A,
                    initialLayout: r,
                    panelConstraints: c.map((ue) => ue.constraints),
                    pivotIndices: gm(n, h, o),
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
      return p.addEventListener("keydown", b), () => {
        p.removeEventListener("keydown", b);
      };
    });
    return () => {
      d.forEach((p) => p());
    };
  }, [o, e, t, n, r, i, a]);
}
function nd(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function vm(e, t) {
  const n = e === "horizontal", {
    x: r,
    y: i
  } = us(t);
  return n ? r : i;
}
function nE(e, t, n, r, i) {
  const o = n === "horizontal", a = ds(t, i);
  Be(a, `No resize handle element found for id "${t}"`);
  const s = a.getAttribute("data-panel-group-id");
  Be(s, "Resize handle element has no group id attribute");
  let {
    initialCursorPosition: c
  } = r;
  const l = vm(n, e), u = ym(s, i);
  Be(u, `No group element found for id "${s}"`);
  const d = u.getBoundingClientRect(), p = o ? d.width : d.height;
  return (l - c) / p * 100;
}
function rE(e, t, n, r, i, o) {
  if (sm(e)) {
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
    return r == null ? 0 : nE(e, t, n, r, o);
}
function iE({
  panelDataArray: e
}) {
  const t = Array(e.length), n = e.map((o) => o.constraints);
  let r = 0, i = 100;
  for (let o = 0; o < e.length; o++) {
    const a = n[o];
    Be(a, `Panel constraints not found for index ${o}`);
    const {
      defaultSize: s
    } = a;
    s != null && (r++, t[o] = s, i -= s);
  }
  for (let o = 0; o < e.length; o++) {
    const a = n[o];
    Be(a, `Panel constraints not found for index ${o}`);
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
function Ur(e, t, n) {
  t.forEach((r, i) => {
    const o = e[i];
    Be(o, `Panel data not found for index ${i}`);
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
      m && m(r, d), u && (p || h) && (h && (d == null || Cn(d, l)) && !Cn(r, l) && h(), p && (d == null || !Cn(d, l)) && Cn(r, l) && p());
    }
  });
}
function Yo(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] != t[n])
      return !1;
  return !0;
}
function oE({
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
function aE(e, t = 10) {
  let n = null;
  return (...i) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      e(...i);
    }, t);
  };
}
function rd(e) {
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
function bm(e) {
  return `react-resizable-panels:${e}`;
}
function xm(e) {
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
function wm(e, t) {
  try {
    const n = bm(e), r = t.getItem(n);
    if (r) {
      const i = JSON.parse(r);
      if (typeof i == "object" && i != null)
        return i;
    }
  } catch {
  }
  return null;
}
function sE(e, t, n) {
  var r, i;
  const o = (r = wm(e, n)) !== null && r !== void 0 ? r : {}, a = xm(t);
  return (i = o[a]) !== null && i !== void 0 ? i : null;
}
function cE(e, t, n, r, i) {
  var o;
  const a = bm(e), s = xm(t), c = (o = wm(e, i)) !== null && o !== void 0 ? o : {};
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
function id({
  layout: e,
  panelConstraints: t
}) {
  const n = [...e], r = n.reduce((o, a) => o + a, 0);
  if (n.length !== t.length)
    throw Error(`Invalid ${t.length} panel layout: ${n.map((o) => `${o}%`).join(", ")}`);
  if (!Ft(r, 100))
    for (let o = 0; o < t.length; o++) {
      const a = n[o];
      Be(a != null, `No layout data found for index ${o}`);
      const s = 100 / r * a;
      n[o] = s;
    }
  let i = 0;
  for (let o = 0; o < t.length; o++) {
    const a = n[o];
    Be(a != null, `No layout data found for index ${o}`);
    const s = Kr({
      panelConstraints: t,
      panelIndex: o,
      size: a
    });
    a != s && (i += a - s, n[o] = s);
  }
  if (!Ft(i, 0))
    for (let o = 0; o < t.length; o++) {
      const a = n[o];
      Be(a != null, `No layout data found for index ${o}`);
      const s = a + i, c = Kr({
        panelConstraints: t,
        panelIndex: o,
        size: s
      });
      if (a !== c && (i -= c - a, n[o] = c, Ft(i, 0)))
        break;
    }
  return n;
}
const lE = 100, Fi = {
  getItem: (e) => (rd(Fi), Fi.getItem(e)),
  setItem: (e, t) => {
    rd(Fi), Fi.setItem(e, t);
  }
}, od = {};
function _m({
  autoSaveId: e = null,
  children: t,
  className: n = "",
  direction: r,
  forwardedRef: i,
  id: o = null,
  onLayout: a = null,
  keyboardResizeBy: s = null,
  storage: c = Fi,
  style: l,
  tagName: u = "div",
  ...d
}) {
  const p = ql(o), h = Dt(null), [m, g] = ri(null), [b, w] = ri([]), _ = X_(), S = Dt({}), A = Dt(/* @__PURE__ */ new Map()), E = Dt(0), N = Dt({
    autoSaveId: e,
    direction: r,
    dragState: m,
    id: p,
    keyboardResizeBy: s,
    onLayout: a,
    storage: c
  }), P = Dt({
    layout: b,
    panelDataArray: [],
    panelDataArrayChanged: !1
  });
  Dt({
    didLogIdAndOrderWarning: !1,
    didLogPanelConstraintsWarning: !1,
    prevPanelIds: []
  }), im(i, () => ({
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
      } = P.current, G = id({
        layout: I,
        panelConstraints: Y.map((ie) => ie.constraints)
      });
      nd(re, G) || (w(G), P.current.layout = G, X && X(G), Ur(Y, G, S.current));
    }
  }), []), xr(() => {
    N.current.autoSaveId = e, N.current.direction = r, N.current.dragState = m, N.current.id = p, N.current.onLayout = a, N.current.storage = c;
  }), tE({
    committedValuesRef: N,
    eagerValuesRef: P,
    groupId: p,
    layout: b,
    panelDataArray: P.current.panelDataArray,
    setLayout: w,
    panelGroupElement: h.current
  }), br(() => {
    const {
      panelDataArray: I
    } = P.current;
    if (e) {
      if (b.length === 0 || b.length !== I.length)
        return;
      let X = od[e];
      X == null && (X = aE(cE, lE), od[e] = X);
      const re = [...I], Y = new Map(A.current);
      X(e, re, Y, b, c);
    }
  }, [e, b, c]), br(() => {
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
      } = fr(Y, I, re);
      if (Be(le != null, `Panel size not found for panel "${I.id}"`), !Cn(le, ie)) {
        A.current.set(I.id, le);
        const ee = Yr(Y, I) === Y.length - 1 ? le - ie : ie - le, Oe = ji({
          delta: ee,
          initialLayout: re,
          panelConstraints: G,
          pivotIndices: ve,
          prevLayout: re,
          trigger: "imperative-api"
        });
        Yo(re, Oe) || (w(Oe), P.current.layout = Oe, X && X(Oe), Ur(Y, Oe, S.current));
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
      const ie = G.map((He) => He.constraints), {
        collapsedSize: le = 0,
        panelSize: ve = 0,
        minSize: Pe = 0,
        pivotIndices: ee
      } = fr(G, I, Y), Oe = X ?? Pe;
      if (Cn(ve, le)) {
        const He = A.current.get(I.id), ct = He != null && He >= Oe ? He : Oe, Ve = Yr(G, I) === G.length - 1 ? ve - ct : ct - ve, C = ji({
          delta: Ve,
          initialLayout: Y,
          panelConstraints: ie,
          pivotIndices: ee,
          prevLayout: Y,
          trigger: "imperative-api"
        });
        Yo(Y, C) || (w(C), P.current.layout = C, re && re(C), Ur(G, C, S.current));
      }
    }
  }, []), ge = Tt((I) => {
    const {
      layout: X,
      panelDataArray: re
    } = P.current, {
      panelSize: Y
    } = fr(re, I, X);
    return Be(Y != null, `Panel size not found for panel "${I.id}"`), Y;
  }, []), pe = Tt((I, X) => {
    const {
      panelDataArray: re
    } = P.current, Y = Yr(re, I);
    return oE({
      defaultSize: X,
      dragState: m,
      layout: b,
      panelData: re,
      panelIndex: Y
    });
  }, [m, b]), V = Tt((I) => {
    const {
      layout: X,
      panelDataArray: re
    } = P.current, {
      collapsedSize: Y = 0,
      collapsible: G,
      panelSize: ie
    } = fr(re, I, X);
    return Be(ie != null, `Panel size not found for panel "${I.id}"`), G === !0 && Cn(ie, Y);
  }, []), Q = Tt((I) => {
    const {
      layout: X,
      panelDataArray: re
    } = P.current, {
      collapsedSize: Y = 0,
      collapsible: G,
      panelSize: ie
    } = fr(re, I, X);
    return Be(ie != null, `Panel size not found for panel "${I.id}"`), !G || Rr(ie, Y) > 0;
  }, []), B = Tt((I) => {
    const {
      panelDataArray: X
    } = P.current;
    X.push(I), X.sort((re, Y) => {
      const G = re.order, ie = Y.order;
      return G == null && ie == null ? 0 : G == null ? -1 : ie == null ? 1 : G - ie;
    }), P.current.panelDataArrayChanged = !0, _();
  }, [_]);
  xr(() => {
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
        const ve = sE(I, G, re);
        ve && (A.current = new Map(Object.entries(ve.expandToSizes)), ie = ve.layout);
      }
      ie == null && (ie = iE({
        panelDataArray: G
      }));
      const le = id({
        layout: ie,
        panelConstraints: G.map((ve) => ve.constraints)
      });
      nd(Y, le) || (w(le), P.current.layout = le, X && X(le), Ur(G, le, S.current));
    }
  }), xr(() => {
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
      initialLayout: He
    } = ie ?? {}, ct = gm(le, I, Y);
    let et = rE(re, I, G, ie, ve, Y);
    const Ve = G === "horizontal";
    document.dir === "rtl" && Ve && (et = -et);
    const C = Oe.map((f) => f.constraints), T = ji({
      delta: et,
      initialLayout: He ?? ee,
      panelConstraints: C,
      pivotIndices: ct,
      prevLayout: ee,
      trigger: sm(re) ? "keyboard" : "mouse-or-touch"
    }), D = !Yo(ee, T);
    (cm(re) || lm(re)) && E.current != et && (E.current = et, D ? lc(I, 0) : Ve ? lc(I, et < 0 ? fm : dm) : lc(I, et < 0 ? pm : hm)), D && (w(T), P.current.layout = T, Pe && Pe(T), Ur(Oe, T, S.current));
  }, []), j = Tt((I, X) => {
    const {
      onLayout: re
    } = N.current, {
      layout: Y,
      panelDataArray: G
    } = P.current, ie = G.map((He) => He.constraints), {
      panelSize: le,
      pivotIndices: ve
    } = fr(G, I, Y);
    Be(le != null, `Panel size not found for panel "${I.id}"`);
    const ee = Yr(G, I) === G.length - 1 ? le - X : X - le, Oe = ji({
      delta: ee,
      initialLayout: Y,
      panelConstraints: ie,
      pivotIndices: ve,
      prevLayout: Y,
      trigger: "imperative-api"
    });
    Yo(Y, Oe) || (w(Oe), P.current.layout = Oe, re && re(Oe), Ur(G, Oe, S.current));
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
    } = fr(Y, I, re);
    Oe != null && (ie && ve && Cn(Oe, G) ? Cn(G, le) || j(I, le) : Oe < ee ? j(I, ee) : Oe > Pe && j(I, Pe));
  }, [j]), _e = Tt((I, X) => {
    const {
      direction: re
    } = N.current, {
      layout: Y
    } = P.current;
    if (!h.current)
      return;
    const G = ds(I, h.current);
    Be(G, `Drag handle element not found for id "${I}"`);
    const ie = vm(re, X);
    g({
      dragHandleId: I,
      dragHandleRect: G.getBoundingClientRect(),
      initialCursorPosition: ie,
      initialLayout: Y
    });
  }, []), J = Tt(() => {
    g(null);
  }, []), L = Tt((I) => {
    const {
      panelDataArray: X
    } = P.current, re = Yr(X, I);
    re >= 0 && (X.splice(re, 1), delete S.current[I.id], P.current.panelDataArrayChanged = !0, _());
  }, [_]), q = F_(() => ({
    collapsePanel: U,
    direction: r,
    dragState: m,
    expandPanel: ue,
    getPanelSize: ge,
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
  }), [U, m, r, ue, ge, pe, p, V, Q, fe, B, se, j, _e, J, L]), ye = {
    display: "flex",
    flexDirection: r === "horizontal" ? "row" : "column",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  };
  return ui(ls.Provider, {
    value: q
  }, ui(u, {
    ...d,
    children: t,
    className: n,
    id: o,
    ref: h,
    style: {
      ...ye,
      ...l
    },
    // CSS selectors
    "data-panel-group": "",
    "data-panel-group-direction": r,
    "data-panel-group-id": p
  }));
}
const Em = nm((e, t) => ui(_m, {
  ...e,
  forwardedRef: t
}));
_m.displayName = "PanelGroup";
Em.displayName = "forwardRef(PanelGroup)";
function Yr(e, t) {
  return e.findIndex((n) => n === t || n.id === t.id);
}
function fr(e, t, n) {
  const r = Yr(e, t), o = r === e.length - 1 ? [r - 1, r] : [r, r + 1], a = n[r];
  return {
    ...t.constraints,
    panelSize: a,
    pivotIndices: o
  };
}
function uE({
  disabled: e,
  handleId: t,
  resizeHandler: n,
  panelGroupElement: r
}) {
  br(() => {
    if (e || n == null || r == null)
      return;
    const i = ds(t, r);
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
            Be(s, `No group element found for id "${s}"`);
            const c = io(s, r), l = mm(s, t, r);
            Be(l !== null, `No resize element found for id "${t}"`);
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
function Sm({
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
  const m = Dt(null), g = Dt({
    onDragging: a
  });
  br(() => {
    g.current.onDragging = a;
  });
  const b = rm(ls);
  if (b === null)
    throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
  const {
    direction: w,
    groupId: _,
    registerResizeHandle: S,
    startDragging: A,
    stopDragging: E,
    panelGroupElement: N
  } = b, P = ql(i), [U, ue] = ri("inactive"), [ge, pe] = ri(!1), [V, Q] = ri(null), B = Dt({
    state: U
  });
  xr(() => {
    B.current.state = U;
  }), br(() => {
    if (n)
      Q(null);
    else {
      const _e = S(P);
      Q(() => _e);
    }
  }, [n, P, S]);
  const se = (p = r == null ? void 0 : r.coarse) !== null && p !== void 0 ? p : 15, j = (h = r == null ? void 0 : r.fine) !== null && h !== void 0 ? h : 5;
  return br(() => {
    if (n || V == null)
      return;
    const _e = m.current;
    return Be(_e, "Element ref not attached"), K_(P, _e, w, {
      coarse: se,
      fine: j
    }, (L, q, ye) => {
      if (q)
        switch (L) {
          case "down": {
            ue("drag"), A(P, ye);
            const {
              onDragging: I
            } = g.current;
            I && I(!0);
            break;
          }
          case "move": {
            const {
              state: I
            } = B.current;
            I !== "drag" && ue("hover"), V(ye);
            break;
          }
          case "up": {
            ue("hover"), E();
            const {
              onDragging: I
            } = g.current;
            I && I(!1);
            break;
          }
        }
      else
        ue("inactive");
    });
  }, [se, w, n, j, S, P, V, A, E]), uE({
    disabled: n,
    handleId: P,
    resizeHandler: V,
    panelGroupElement: N
  }), ui(u, {
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
    "data-panel-group-direction": w,
    "data-panel-group-id": _,
    "data-resize-handle": "",
    "data-resize-handle-active": U === "drag" ? "pointer" : ge ? "keyboard" : void 0,
    "data-resize-handle-state": U,
    "data-panel-resize-handle-enabled": !n,
    "data-panel-resize-handle-id": P
  });
}
Sm.displayName = "PanelResizeHandle";
const fE = ({
  className: e,
  ...t
}) => /* @__PURE__ */ v.jsx(
  Em,
  {
    className: $e(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      e
    ),
    ...t
  }
), ad = am, dE = ({
  withHandle: e,
  className: t,
  ...n
}) => /* @__PURE__ */ v.jsx(
  Sm,
  {
    className: $e(
      "relative flex w-px items-center justify-center bg-slate-200 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90 dark:bg-slate-800 dark:focus-visible:ring-slate-300",
      t
    ),
    ...n,
    children: e && /* @__PURE__ */ v.jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-800", children: /* @__PURE__ */ v.jsx(M_, { className: "h-2.5 w-2.5" }) })
  }
);
function pE(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ps(...e) {
  return (t) => e.forEach((n) => pE(n, t));
}
function wt(...e) {
  return x.useCallback(ps(...e), e);
}
var Rn = x.forwardRef((e, t) => {
  const { children: n, ...r } = e, i = x.Children.toArray(n), o = i.find(mE);
  if (o) {
    const a = o.props.children, s = i.map((c) => c === o ? x.Children.count(a) > 1 ? x.Children.only(null) : x.isValidElement(a) ? a.props.children : null : c);
    return /* @__PURE__ */ v.jsx(tl, { ...r, ref: t, children: x.isValidElement(a) ? x.cloneElement(a, void 0, s) : null });
  }
  return /* @__PURE__ */ v.jsx(tl, { ...r, ref: t, children: n });
});
Rn.displayName = "Slot";
var tl = x.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (x.isValidElement(n)) {
    const i = yE(n);
    return x.cloneElement(n, {
      ...gE(r, n.props),
      // @ts-ignore
      ref: t ? ps(t, i) : i
    });
  }
  return x.Children.count(n) > 1 ? x.Children.only(null) : null;
});
tl.displayName = "SlotClone";
var hE = ({ children: e }) => /* @__PURE__ */ v.jsx(v.Fragment, { children: e });
function mE(e) {
  return x.isValidElement(e) && e.type === hE;
}
function gE(e, t) {
  const n = { ...t };
  for (const r in t) {
    const i = e[r], o = t[r];
    /^on[A-Z]/.test(r) ? i && o ? n[r] = (...s) => {
      o(...s), i(...s);
    } : i && (n[r] = i) : r === "style" ? n[r] = { ...i, ...o } : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function yE(e) {
  var r, i;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var vE = [
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
], pt = vE.reduce((e, t) => {
  const n = x.forwardRef((r, i) => {
    const { asChild: o, ...a } = r, s = o ? Rn : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(s, { ...a, ref: i });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Cm(e, t) {
  e && Pl.flushSync(() => e.dispatchEvent(t));
}
var bE = "AspectRatio", Am = x.forwardRef(
  (e, t) => {
    const { ratio: n = 1 / 1, style: r, ...i } = e;
    return /* @__PURE__ */ v.jsx(
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
        children: /* @__PURE__ */ v.jsx(
          pt.div,
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
Am.displayName = bE;
var xE = Am;
const Om = xE, Kl = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  "div",
  {
    ref: n,
    className: $e(
      "rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      e
    ),
    ...t
  }
));
Kl.displayName = "Card";
const Rm = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  "div",
  {
    ref: n,
    className: $e("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Rm.displayName = "CardHeader";
const wE = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  "h3",
  {
    ref: n,
    className: $e(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
wE.displayName = "CardTitle";
const _E = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  "p",
  {
    ref: n,
    className: $e("text-sm text-slate-500 dark:text-slate-400", e),
    ...t
  }
));
_E.displayName = "CardDescription";
const km = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx("div", { ref: n, className: $e("p-6 pt-0", e), ...t }));
km.displayName = "CardContent";
const EE = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  "div",
  {
    ref: n,
    className: $e("flex items-center p-6 pt-0", e),
    ...t
  }
));
EE.displayName = "CardFooter";
const SE = "data:image/svg+xml,%3c!--%20icon666.com%20-%20MILLIONS%20vector%20ICONS%20FREE%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20368%20368'%20style='enable-background:new%200%200%20368%20368;'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cg%3e%3cpath%20d='M328,32H40C18,32,0,50,0,72v224c0,22,18,40,40,40h288c22,0,40-18,40-40V72C368,50,350,32,328,32z%20M352,185.6l-38-38%20c-6.4-6.4-16-6.4-22.4,0L200,238.8l-0.4-0.4L153.2,192c-6-6-16.4-6-22.4,0l-39.2,39.2c-3.2,3.2-3.2,8,0,11.2%20c3.2,3.2,8,3.2,11.2,0l39.2-39.2l46.4,46.4l0.4,0.4l-32.4,32.4c-3.2,3.2-3.2,8,0,11.2c1.6,1.6,3.6,2.4,5.6,2.4s4-0.8,5.6-2.4%20l135.2-134.8l47.6,47.6c0.4,0.4,1.2,0.8,1.6,1.2V296c0,13.2-10.8,24-24,24H40c-13.2,0-24-10.8-24-24V72c0-13.2,10.8-24,24-24h288%20c13.2,0,24,10.8,24,24V185.6z'%3e%3c/path%3e%3cpath%20d='M72.4,250.4l-8,8c-3.2,3.2-3.2,8,0,11.2C66,271.2,68,272,70,272s4-0.8,5.6-2.4l8-8c3.2-3.2,3.2-8,0-11.2%20C80.4,247.2,75.6,247.2,72.4,250.4z'%3e%3c/path%3e%3cpath%20d='M88,80c-22,0-40,18-40,40s18,40,40,40s40-18,40-40S110,80,88,80z%20M88,144c-13.2,0-24-10.8-24-24s10.8-24,24-24%20s24,10.8,24,24S101.2,144,88,144z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
function Tm({ media: e, placeholder: t }) {
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    e && e.picture && /* @__PURE__ */ v.jsx("img", { src: String(e.thumbnail), alt: String(e.alt), className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain" }),
    e && e.svg && /* @__PURE__ */ v.jsx("img", { src: String(e.reference), alt: String(e.alt), className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain" }),
    t && e === null && /* @__PURE__ */ v.jsx("img", { src: SE, alt: "Selection", className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain" })
  ] });
}
function CE({ className: e, media: t }) {
  const n = yi(), r = yr((o) => o.main.currentMedia), i = () => {
    n(Jc(t));
  };
  return /* @__PURE__ */ v.jsxs(Kl, { className: $e(e, { "border-primary": t.id === (r == null ? void 0 : r.id) }), onClick: i, children: [
    /* @__PURE__ */ v.jsx(Rm, { className: "p-0 pb-6", children: /* @__PURE__ */ v.jsx(Om, { ratio: 4 / 3, className: "rounded-t-lg overflow-hidden bg-checkerboard", children: /* @__PURE__ */ v.jsx(Tm, { media: t }) }) }),
    /* @__PURE__ */ v.jsx(km, { className: "text-ellipsis overflow-hidden text-nowrap", children: t.label })
  ] });
}
function AE() {
  const e = yi(), { items: t, status: n, error: r } = yr((i) => i.media);
  return Kn(() => {
    n === "idle" && e(ni());
  }, [n, e]), n === "loading" || n === "idle" ? /* @__PURE__ */ v.jsx("div", { children: "Loading..." }) : n === "failed" ? /* @__PURE__ */ v.jsxs("div", { children: [
    "Error: ",
    r
  ] }) : /* @__PURE__ */ v.jsx("div", { className: "p-3 h-[calc(100%-10rem)] overflow-y-auto", children: /* @__PURE__ */ v.jsx("div", { className: "grid grid-cols-[repeat(auto-fit,minmax(200px,2fr))] gap-2", children: t.length > 0 && t.map(
    (i) => /* @__PURE__ */ v.jsx(CE, { className: "aspect-[124/129]", media: i }, i.id)
  ) }) });
}
function Pm(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Pm(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function OE() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = Pm(e)) && (r && (r += " "), r += t);
  return r;
}
const sd = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, cd = OE, Nm = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return cd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: i, defaultVariants: o } = t, a = Object.keys(i).map((l) => {
    const u = n == null ? void 0 : n[l], d = o == null ? void 0 : o[l];
    if (u === null) return null;
    const p = sd(u) || sd(d);
    return i[l][p];
  }), s = n && Object.entries(n).reduce((l, u) => {
    let [d, p] = u;
    return p === void 0 || (l[d] = p), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
    let { class: d, className: p, ...h } = u;
    return Object.entries(h).every((m) => {
      let [g, b] = m;
      return Array.isArray(b) ? b.includes({
        ...o,
        ...s
      }[g]) : {
        ...o,
        ...s
      }[g] === b;
    }) ? [
      ...l,
      d,
      p
    ] : l;
  }, []);
  return cd(e, a, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, RE = Nm(
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
), wr = x.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...i }, o) => {
    const a = r ? Rn : "button";
    return /* @__PURE__ */ v.jsx(
      a,
      {
        className: $e(RE({ variant: t, size: n, className: e })),
        ref: o,
        ...i
      }
    );
  }
);
wr.displayName = "Button";
const ld = () => {
};
let Xl = {}, Mm = {}, Im = null, Dm = {
  mark: ld,
  measure: ld
};
try {
  typeof window < "u" && (Xl = window), typeof document < "u" && (Mm = document), typeof MutationObserver < "u" && (Im = MutationObserver), typeof performance < "u" && (Dm = performance);
} catch {
}
const {
  userAgent: ud = ""
} = Xl.navigator || {}, Jn = Xl, at = Mm, fd = Im, Go = Dm;
Jn.document;
const In = !!at.documentElement && !!at.head && typeof at.addEventListener == "function" && typeof at.createElement == "function", jm = ~ud.indexOf("MSIE") || ~ud.indexOf("Trident/");
var st = "classic", Fm = "duotone", $t = "sharp", Vt = "sharp-duotone", kE = [st, Fm, $t, Vt], TE = {
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
}, dd = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, PE = ["kit"], NE = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, ME = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, IE = {
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
}, DE = {
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
}, jE = {
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
}, FE = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, LE = {
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
}, zE = {
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
}, Lm = {
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
}, $E = ["solid", "regular", "light", "thin", "duotone", "brands"], zm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], VE = zm.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Li = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, UE = [...Object.keys(FE), ...$E, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Li.GROUP, Li.SWAP_OPACITY, Li.PRIMARY, Li.SECONDARY].concat(zm.map((e) => "".concat(e, "x"))).concat(VE.map((e) => "w-".concat(e))), BE = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, WE = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, HE = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, pd = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const kn = "___FONT_AWESOME___", nl = 16, $m = "fa", Vm = "svg-inline--fa", kr = "data-fa-i2svg", rl = "data-fa-pseudo-element", qE = "data-fa-pseudo-element-pending", Jl = "data-prefix", Ql = "data-icon", hd = "fontawesome-i2svg", YE = "async", GE = ["HTML", "HEAD", "STYLE", "SCRIPT"], Um = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})(), Bm = [st, $t, Vt];
function No(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[st];
    }
  });
}
const Wm = {
  ...Lm
};
Wm[st] = {
  ...Lm[st],
  ...dd.kit,
  ...dd["kit-duotone"]
};
const _r = No(Wm), il = {
  ...zE
};
il[st] = {
  ...il[st],
  ...pd.kit,
  ...pd["kit-duotone"]
};
const oo = No(il), ol = {
  ...LE
};
ol[st] = {
  ...ol[st],
  ...HE.kit
};
const Er = No(ol), al = {
  ...jE
};
al[st] = {
  ...al[st],
  ...WE.kit
};
const ZE = No(al), KE = NE, Hm = "fa-layers-text", XE = ME, JE = {
  ...TE
};
No(JE);
const QE = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], uc = Li, fi = /* @__PURE__ */ new Set();
Object.keys(oo[st]).map(fi.add.bind(fi));
Object.keys(oo[$t]).map(fi.add.bind(fi));
Object.keys(oo[Vt]).map(fi.add.bind(fi));
const eS = [...PE, ...UE], Yi = Jn.FontAwesomeConfig || {};
function tS(e) {
  var t = at.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function nS(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
at && typeof at.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const i = nS(tS(n));
  i != null && (Yi[r] = i);
});
const qm = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: $m,
  replacementClass: Vm,
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
Yi.familyPrefix && (Yi.cssPrefix = Yi.familyPrefix);
const di = {
  ...qm,
  ...Yi
};
di.autoReplaceSvg || (di.observeMutations = !1);
const we = {};
Object.keys(qm).forEach((e) => {
  Object.defineProperty(we, e, {
    enumerable: !0,
    set: function(t) {
      di[e] = t, Gi.forEach((n) => n(we));
    },
    get: function() {
      return di[e];
    }
  });
});
Object.defineProperty(we, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    di.cssPrefix = e, Gi.forEach((t) => t(we));
  },
  get: function() {
    return di.cssPrefix;
  }
});
Jn.FontAwesomeConfig = we;
const Gi = [];
function rS(e) {
  return Gi.push(e), () => {
    Gi.splice(Gi.indexOf(e), 1);
  };
}
const Bn = nl, dn = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function iS(e) {
  if (!e || !In)
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
const oS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ao() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += oS[Math.random() * 62 | 0];
  return t;
}
function Ei(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function eu(e) {
  return e.classList ? Ei(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Ym(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function aS(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Ym(e[n]), '" '), "").trim();
}
function hs(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function tu(e) {
  return e.size !== dn.size || e.x !== dn.x || e.y !== dn.y || e.rotate !== dn.rotate || e.flipX || e.flipY;
}
function sS(e) {
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
function cS(e) {
  let {
    transform: t,
    width: n = nl,
    height: r = nl,
    startCentered: i = !1
  } = e, o = "";
  return i && jm ? o += "translate(".concat(t.x / Bn - n / 2, "em, ").concat(t.y / Bn - r / 2, "em) ") : i ? o += "translate(calc(-50% + ".concat(t.x / Bn, "em), calc(-50% + ").concat(t.y / Bn, "em)) ") : o += "translate(".concat(t.x / Bn, "em, ").concat(t.y / Bn, "em) "), o += "scale(".concat(t.size / Bn * (t.flipX ? -1 : 1), ", ").concat(t.size / Bn * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var lS = `:root, :host {
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
function Gm() {
  const e = $m, t = Vm, n = we.cssPrefix, r = we.replacementClass;
  let i = lS;
  if (n !== e || r !== t) {
    const o = new RegExp("\\.".concat(e, "\\-"), "g"), a = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    i = i.replace(o, ".".concat(n, "-")).replace(a, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return i;
}
let md = !1;
function fc() {
  we.autoAddCss && !md && (iS(Gm()), md = !0);
}
var uS = {
  mixout() {
    return {
      dom: {
        css: Gm,
        insertCss: fc
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        fc();
      },
      beforeI2svg() {
        fc();
      }
    };
  }
};
const Tn = Jn || {};
Tn[kn] || (Tn[kn] = {});
Tn[kn].styles || (Tn[kn].styles = {});
Tn[kn].hooks || (Tn[kn].hooks = {});
Tn[kn].shims || (Tn[kn].shims = []);
var pn = Tn[kn];
const Zm = [], Km = function() {
  at.removeEventListener("DOMContentLoaded", Km), Ra = 1, Zm.map((e) => e());
};
let Ra = !1;
In && (Ra = (at.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(at.readyState), Ra || at.addEventListener("DOMContentLoaded", Km));
function fS(e) {
  In && (Ra ? setTimeout(e, 0) : Zm.push(e));
}
function Mo(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Ym(e) : "<".concat(t, " ").concat(aS(n), ">").concat(r.map(Mo).join(""), "</").concat(t, ">");
}
function gd(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var dc = function(t, n, r, i) {
  var o = Object.keys(t), a = o.length, s = n, c, l, u;
  for (r === void 0 ? (c = 1, u = t[o[0]]) : (c = 0, u = r); c < a; c++)
    l = o[c], u = s(u, t[l], l, t);
  return u;
};
function dS(e) {
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
function sl(e) {
  const t = dS(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function pS(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function yd(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function cl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, i = yd(t);
  typeof pn.hooks.addPack == "function" && !r ? pn.hooks.addPack(e, yd(t)) : pn.styles[e] = {
    ...pn.styles[e] || {},
    ...i
  }, e === "fas" && cl("fa", t);
}
const {
  styles: pr,
  shims: hS
} = pn, mS = {
  [st]: Object.values(Er[st]),
  [$t]: Object.values(Er[$t]),
  [Vt]: Object.values(Er[Vt])
};
let nu = null, Xm = {}, Jm = {}, Qm = {}, eg = {}, tg = {};
const gS = {
  [st]: Object.keys(_r[st]),
  [$t]: Object.keys(_r[$t]),
  [Vt]: Object.keys(_r[Vt])
};
function yS(e) {
  return ~eS.indexOf(e);
}
function vS(e, t) {
  const n = t.split("-"), r = n[0], i = n.slice(1).join("-");
  return r === e && i !== "" && !yS(i) ? i : null;
}
const ng = () => {
  const e = (r) => dc(pr, (i, o, a) => (i[a] = dc(o, r, {}), i), {});
  Xm = e((r, i, o) => (i[3] && (r[i[3]] = o), i[2] && i[2].filter((s) => typeof s == "number").forEach((s) => {
    r[s.toString(16)] = o;
  }), r)), Jm = e((r, i, o) => (r[o] = o, i[2] && i[2].filter((s) => typeof s == "string").forEach((s) => {
    r[s] = o;
  }), r)), tg = e((r, i, o) => {
    const a = i[2];
    return r[o] = o, a.forEach((s) => {
      r[s] = o;
    }), r;
  });
  const t = "far" in pr || we.autoFetchSvg, n = dc(hS, (r, i) => {
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
  Qm = n.names, eg = n.unicodes, nu = ms(we.styleDefault, {
    family: we.familyDefault
  });
};
rS((e) => {
  nu = ms(e.styleDefault, {
    family: we.familyDefault
  });
});
ng();
function ru(e, t) {
  return (Xm[e] || {})[t];
}
function bS(e, t) {
  return (Jm[e] || {})[t];
}
function Gn(e, t) {
  return (tg[e] || {})[t];
}
function rg(e) {
  return Qm[e] || {
    prefix: null,
    iconName: null
  };
}
function xS(e) {
  const t = eg[e], n = ru("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Qn() {
  return nu;
}
const iu = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function ms(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = st
  } = t, r = _r[n][e], i = oo[n][e] || oo[n][r], o = e in pn.styles ? e : null;
  return i || o || null;
}
const wS = {
  [st]: Object.keys(Er[st]),
  [$t]: Object.keys(Er[$t]),
  [Vt]: Object.keys(Er[Vt])
};
function gs(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t, r = {
    [st]: "".concat(we.cssPrefix, "-").concat(st),
    [$t]: "".concat(we.cssPrefix, "-").concat($t),
    [Vt]: "".concat(we.cssPrefix, "-").concat(Vt)
  };
  let i = null, o = st;
  const a = kE.filter((c) => c !== Fm);
  a.forEach((c) => {
    (e.includes(r[c]) || e.some((l) => wS[c].includes(l))) && (o = c);
  });
  const s = e.reduce((c, l) => {
    const u = vS(we.cssPrefix, l);
    if (pr[l] ? (l = mS[o].includes(l) ? ZE[o][l] : l, i = l, c.prefix = l) : gS[o].indexOf(l) > -1 ? (i = l, c.prefix = ms(l, {
      family: o
    })) : u ? c.iconName = u : l !== we.replacementClass && !a.some((d) => l === r[d]) && c.rest.push(l), !n && c.prefix && c.iconName) {
      const d = i === "fa" ? rg(c.iconName) : {}, p = Gn(c.prefix, c.iconName);
      d.prefix && (i = null), c.iconName = d.iconName || p || c.iconName, c.prefix = d.prefix || c.prefix, c.prefix === "far" && !pr.far && pr.fas && !we.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, iu());
  return (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"), !s.prefix && o === $t && (pr.fass || we.autoFetchSvg) && (s.prefix = "fass", s.iconName = Gn(s.prefix, s.iconName) || s.iconName), !s.prefix && o === Vt && (pr.fasds || we.autoFetchSvg) && (s.prefix = "fasds", s.iconName = Gn(s.prefix, s.iconName) || s.iconName), (s.prefix === "fa" || i === "fa") && (s.prefix = Qn() || "fas"), s;
}
class _S {
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
      }, cl(o, i[o]);
      const a = Er[st][o];
      a && cl(a, i[o]), ng();
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
let vd = [], Xr = {};
const ii = {}, ES = Object.keys(ii);
function SS(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return vd = e, Xr = {}, Object.keys(ii).forEach((r) => {
    ES.indexOf(r) === -1 && delete ii[r];
  }), vd.forEach((r) => {
    const i = r.mixout ? r.mixout() : {};
    if (Object.keys(i).forEach((o) => {
      typeof i[o] == "function" && (n[o] = i[o]), typeof i[o] == "object" && Object.keys(i[o]).forEach((a) => {
        n[o] || (n[o] = {}), n[o][a] = i[o][a];
      });
    }), r.hooks) {
      const o = r.hooks();
      Object.keys(o).forEach((a) => {
        Xr[a] || (Xr[a] = []), Xr[a].push(o[a]);
      });
    }
    r.provides && r.provides(ii);
  }), n;
}
function ll(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  return (Xr[e] || []).forEach((a) => {
    t = a.apply(null, [t, ...r]);
  }), t;
}
function Tr(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (Xr[e] || []).forEach((o) => {
    o.apply(null, n);
  });
}
function er() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return ii[e] ? ii[e].apply(null, t) : void 0;
}
function ul(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Qn();
  if (t)
    return t = Gn(n, t) || t, gd(ig.definitions, n, t) || gd(pn.styles, n, t);
}
const ig = new _S(), CS = () => {
  we.autoReplaceSvg = !1, we.observeMutations = !1, Tr("noAuto");
}, AS = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return In ? (Tr("beforeI2svg", e), er("pseudoElements2svg", e), er("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    we.autoReplaceSvg === !1 && (we.autoReplaceSvg = !0), we.observeMutations = !0, fS(() => {
      RS({
        autoReplaceSvgRoot: t
      }), Tr("watch", e);
    });
  }
}, OS = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Gn(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = ms(e[0]);
      return {
        prefix: n,
        iconName: Gn(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(we.cssPrefix, "-")) > -1 || e.match(KE))) {
      const t = gs(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Qn(),
        iconName: Gn(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Qn();
      return {
        prefix: t,
        iconName: Gn(t, e) || e
      };
    }
  }
}, qt = {
  noAuto: CS,
  config: we,
  dom: AS,
  parse: OS,
  library: ig,
  findIconDefinition: ul,
  toHtml: Mo
}, RS = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = at
  } = e;
  (Object.keys(pn.styles).length > 0 || we.autoFetchSvg) && In && we.autoReplaceSvg && qt.dom.i2svg({
    node: t
  });
};
function ys(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Mo(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!In) return;
      const n = at.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function kS(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: i,
    styles: o,
    transform: a
  } = e;
  if (tu(a) && n.found && !r.found) {
    const {
      width: s,
      height: c
    } = n, l = {
      x: s / c / 2,
      y: 0.5
    };
    i.style = hs({
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
function TS(e) {
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
function ou(e) {
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
  } = n.found ? n : t, m = r === "fak", g = [we.replacementClass, i ? "".concat(we.cssPrefix, "-").concat(i) : ""].filter((E) => u.classes.indexOf(E) === -1).filter((E) => E !== "" || !!E).concat(u.classes).join(" ");
  let b = {
    children: [],
    attributes: {
      ...u.attributes,
      "data-prefix": r,
      "data-icon": i,
      class: g,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(p, " ").concat(h)
    }
  };
  const w = m && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(p / h * 16 * 0.0625, "em")
  } : {};
  d && (b.attributes[kr] = ""), s && (b.children.push({
    tag: "title",
    attributes: {
      id: b.attributes["aria-labelledby"] || "title-".concat(l || ao())
    },
    children: [s]
  }), delete b.attributes.title);
  const _ = {
    ...b,
    prefix: r,
    iconName: i,
    main: t,
    mask: n,
    maskId: c,
    transform: o,
    symbol: a,
    styles: {
      ...w,
      ...u.styles
    }
  }, {
    children: S,
    attributes: A
  } = n.found && t.found ? er("generateAbstractMask", _) || {
    children: [],
    attributes: {}
  } : er("generateAbstractIcon", _) || {
    children: [],
    attributes: {}
  };
  return _.children = S, _.attributes = A, a ? TS(_) : kS(_);
}
function bd(e) {
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
  s && (c[kr] = "");
  const l = {
    ...a.styles
  };
  tu(i) && (l.transform = cS({
    transform: i,
    startCentered: !0,
    width: n,
    height: r
  }), l["-webkit-transform"] = l.transform);
  const u = hs(l);
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
function PS(e) {
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
  }, o = hs(r.styles);
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
  styles: pc
} = pn;
function fl(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let i = null;
  return Array.isArray(r) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(we.cssPrefix, "-").concat(uc.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(we.cssPrefix, "-").concat(uc.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(we.cssPrefix, "-").concat(uc.PRIMARY),
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
const NS = {
  found: !1,
  width: 512,
  height: 512
};
function MS(e, t) {
  !Um && !we.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function dl(e, t) {
  let n = t;
  return t === "fa" && we.styleDefault !== null && (t = Qn()), new Promise((r, i) => {
    if (n === "fa") {
      const o = rg(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && pc[t] && pc[t][e]) {
      const o = pc[t][e];
      return r(fl(o));
    }
    MS(e, t), r({
      ...NS,
      icon: we.showMissingIcons && e ? er("missingIconAbstract") || {} : {}
    });
  });
}
const xd = () => {
}, pl = we.measurePerformance && Go && Go.mark && Go.measure ? Go : {
  mark: xd,
  measure: xd
}, zi = 'FA "6.6.0"', IS = (e) => (pl.mark("".concat(zi, " ").concat(e, " begins")), () => og(e)), og = (e) => {
  pl.mark("".concat(zi, " ").concat(e, " ends")), pl.measure("".concat(zi, " ").concat(e), "".concat(zi, " ").concat(e, " begins"), "".concat(zi, " ").concat(e, " ends"));
};
var au = {
  begin: IS,
  end: og
};
const ua = () => {
};
function wd(e) {
  return typeof (e.getAttribute ? e.getAttribute(kr) : null) == "string";
}
function DS(e) {
  const t = e.getAttribute ? e.getAttribute(Jl) : null, n = e.getAttribute ? e.getAttribute(Ql) : null;
  return t && n;
}
function jS(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(we.replacementClass);
}
function FS() {
  return we.autoReplaceSvg === !0 ? fa.replace : fa[we.autoReplaceSvg] || fa.replace;
}
function LS(e) {
  return at.createElementNS("http://www.w3.org/2000/svg", e);
}
function zS(e) {
  return at.createElement(e);
}
function ag(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? LS : zS
  } = t;
  if (typeof e == "string")
    return at.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(o) {
    r.setAttribute(o, e.attributes[o]);
  }), (e.children || []).forEach(function(o) {
    r.appendChild(ag(o, {
      ceFn: n
    }));
  }), r;
}
function $S(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const fa = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(ag(n), t);
      }), t.getAttribute(kr) === null && we.keepOriginalSource) {
        let n = at.createComment($S(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~eu(t).indexOf(we.replacementClass))
      return fa.replace(e);
    const r = new RegExp("".concat(we.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const o = n[0].attributes.class.split(" ").reduce((a, s) => (s === we.replacementClass || s.match(r) ? a.toSvg.push(s) : a.toNode.push(s), a), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    const i = n.map((o) => Mo(o)).join(`
`);
    t.setAttribute(kr, ""), t.innerHTML = i;
  }
};
function _d(e) {
  e();
}
function sg(e, t) {
  const n = typeof t == "function" ? t : ua;
  if (e.length === 0)
    n();
  else {
    let r = _d;
    we.mutateApproach === YE && (r = Jn.requestAnimationFrame || _d), r(() => {
      const i = FS(), o = au.begin("mutate");
      e.map(i), o(), n();
    });
  }
}
let su = !1;
function cg() {
  su = !0;
}
function hl() {
  su = !1;
}
let ka = null;
function Ed(e) {
  if (!fd || !we.observeMutations)
    return;
  const {
    treeCallback: t = ua,
    nodeCallback: n = ua,
    pseudoElementsCallback: r = ua,
    observeMutationsRoot: i = at
  } = e;
  ka = new fd((o) => {
    if (su) return;
    const a = Qn();
    Ei(o).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !wd(s.addedNodes[0]) && (we.searchPseudoElements && r(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && we.searchPseudoElements && r(s.target.parentNode), s.type === "attributes" && wd(s.target) && ~QE.indexOf(s.attributeName))
        if (s.attributeName === "class" && DS(s.target)) {
          const {
            prefix: c,
            iconName: l
          } = gs(eu(s.target));
          s.target.setAttribute(Jl, c || a), l && s.target.setAttribute(Ql, l);
        } else jS(s.target) && n(s.target);
    });
  }), In && ka.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function VS() {
  ka && ka.disconnect();
}
function US(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, i) => {
    const o = i.split(":"), a = o[0], s = o.slice(1);
    return a && s.length > 0 && (r[a] = s.join(":").trim()), r;
  }, {})), n;
}
function BS(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = gs(eu(e));
  return i.prefix || (i.prefix = Qn()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = bS(i.prefix, e.innerText) || ru(i.prefix, sl(e.innerText))), !i.iconName && we.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function WS(e) {
  const t = Ei(e.attributes).reduce((i, o) => (i.name !== "class" && i.name !== "style" && (i[o.name] = o.value), i), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return we.autoA11y && (n ? t["aria-labelledby"] = "".concat(we.replacementClass, "-title-").concat(r || ao()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function HS() {
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
function Sd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: i
  } = BS(e), o = WS(e), a = ll("parseNodeAttributes", {}, e);
  let s = t.styleParser ? US(e) : [];
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
      classes: i,
      styles: s,
      attributes: o
    },
    ...a
  };
}
const {
  styles: qS
} = pn;
function lg(e) {
  const t = we.autoReplaceSvg === "nest" ? Sd(e, {
    styleParser: !1
  }) : Sd(e);
  return ~t.extra.classes.indexOf(Hm) ? er("generateLayersText", e, t) : er("generateSvgReplacementMutation", e, t);
}
let yn = /* @__PURE__ */ new Set();
Bm.map((e) => {
  yn.add("fa-".concat(e));
});
Object.keys(_r[st]).map(yn.add.bind(yn));
Object.keys(_r[$t]).map(yn.add.bind(yn));
Object.keys(_r[Vt]).map(yn.add.bind(yn));
yn = [...yn];
function Cd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!In) return Promise.resolve();
  const n = at.documentElement.classList, r = (u) => n.add("".concat(hd, "-").concat(u)), i = (u) => n.remove("".concat(hd, "-").concat(u)), o = we.autoFetchSvg ? yn : Bm.map((u) => "fa-".concat(u)).concat(Object.keys(qS));
  o.includes("fa") || o.push("fa");
  const a = [".".concat(Hm, ":not([").concat(kr, "])")].concat(o.map((u) => ".".concat(u, ":not([").concat(kr, "])"))).join(", ");
  if (a.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = Ei(e.querySelectorAll(a));
  } catch {
  }
  if (s.length > 0)
    r("pending"), i("complete");
  else
    return Promise.resolve();
  const c = au.begin("onTree"), l = s.reduce((u, d) => {
    try {
      const p = lg(d);
      p && u.push(p);
    } catch (p) {
      Um || p.name === "MissingIcon" && console.error(p);
    }
    return u;
  }, []);
  return new Promise((u, d) => {
    Promise.all(l).then((p) => {
      sg(p, () => {
        r("active"), r("complete"), i("pending"), typeof t == "function" && t(), c(), u();
      });
    }).catch((p) => {
      c(), d(p);
    });
  });
}
function YS(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  lg(e).then((n) => {
    n && sg([n], t);
  });
}
function GS(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : ul(t || {});
    let {
      mask: i
    } = n;
    return i && (i = (i || {}).icon ? i : ul(i || {})), e(r, {
      ...n,
      mask: i
    });
  };
}
const ZS = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = dn,
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
  return ys({
    type: "icon",
    ...e
  }, () => (Tr("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), we.autoA11y && (a ? l["aria-labelledby"] = "".concat(we.replacementClass, "-title-").concat(s || ao()) : (l["aria-hidden"] = "true", l.focusable = "false")), ou({
    icons: {
      main: fl(h),
      mask: i ? fl(i.icon) : {
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
    maskId: o,
    titleId: s,
    extra: {
      attributes: l,
      styles: u,
      classes: c
    }
  })));
};
var KS = {
  mixout() {
    return {
      icon: GS(ZS)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Cd, e.nodeCallback = YS, e;
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
      return Cd(n, r);
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
        Promise.all([dl(r, a), l.iconName ? dl(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((m) => {
          let [g, b] = m;
          p([t, ou({
            icons: {
              main: g,
              mask: b
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
      const s = hs(a);
      s.length > 0 && (r.style = s);
      let c;
      return tu(o) && (c = er("generateAbstractTransformGrouping", {
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
}, XS = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return ys({
          type: "layer"
        }, () => {
          Tr("beforeDOMElementCreation", {
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
}, JS = {
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
        return ys({
          type: "counter",
          content: e
        }, () => (Tr("beforeDOMElementCreation", {
          content: e,
          params: t
        }), PS({
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
}, QS = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = dn,
          title: r = null,
          classes: i = [],
          attributes: o = {},
          styles: a = {}
        } = t;
        return ys({
          type: "text",
          content: e
        }, () => (Tr("beforeDOMElementCreation", {
          content: e,
          params: t
        }), bd({
          content: e,
          transform: {
            ...dn,
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
      if (jm) {
        const c = parseInt(getComputedStyle(t).fontSize, 10), l = t.getBoundingClientRect();
        a = l.width / c, s = l.height / c;
      }
      return we.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, bd({
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
const eC = new RegExp('"', "ug"), Ad = [1105920, 1112319], Od = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...DE,
  ...IE,
  ...BE
}, ml = Object.keys(Od).reduce((e, t) => (e[t.toLowerCase()] = Od[t], e), {}), tC = Object.keys(ml).reduce((e, t) => {
  const n = ml[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function nC(e) {
  const t = e.replace(eC, ""), n = pS(t, 0), r = n >= Ad[0] && n <= Ad[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: sl(i ? t[0] : t),
    isSecondary: r || i
  };
}
function rC(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
  return (ml[n] || {})[i] || tC[n];
}
function Rd(e, t) {
  const n = "".concat(qE).concat(t.replace(":", "-"));
  return new Promise((r, i) => {
    if (e.getAttribute(n) !== null)
      return r();
    const a = Ei(e.children).filter((p) => p.getAttribute(rl) === t)[0], s = Jn.getComputedStyle(e, t), c = s.getPropertyValue("font-family"), l = c.match(XE), u = s.getPropertyValue("font-weight"), d = s.getPropertyValue("content");
    if (a && !l)
      return e.removeChild(a), r();
    if (l && d !== "none" && d !== "") {
      const p = s.getPropertyValue("content");
      let h = rC(c, u);
      const {
        value: m,
        isSecondary: g
      } = nC(p), b = l[0].startsWith("FontAwesome");
      let w = ru(h, m), _ = w;
      if (b) {
        const S = xS(m);
        S.iconName && S.prefix && (w = S.iconName, h = S.prefix);
      }
      if (w && !g && (!a || a.getAttribute(Jl) !== h || a.getAttribute(Ql) !== _)) {
        e.setAttribute(n, _), a && e.removeChild(a);
        const S = HS(), {
          extra: A
        } = S;
        A.attributes[rl] = t, dl(w, h).then((E) => {
          const N = ou({
            ...S,
            icons: {
              main: E,
              mask: iu()
            },
            prefix: h,
            iconName: _,
            extra: A,
            watchable: !0
          }), P = at.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(P, e.firstChild) : e.appendChild(P), P.outerHTML = N.map((U) => Mo(U)).join(`
`), e.removeAttribute(n), r();
        }).catch(i);
      } else
        r();
    } else
      r();
  });
}
function iC(e) {
  return Promise.all([Rd(e, "::before"), Rd(e, "::after")]);
}
function oC(e) {
  return e.parentNode !== document.head && !~GE.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(rl) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function kd(e) {
  if (In)
    return new Promise((t, n) => {
      const r = Ei(e.querySelectorAll("*")).filter(oC).map(iC), i = au.begin("searchPseudoElements");
      cg(), Promise.all(r).then(() => {
        i(), hl(), t();
      }).catch(() => {
        i(), hl(), n();
      });
    });
}
var aC = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = kd, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = at
      } = t;
      we.searchPseudoElements && kd(n);
    };
  }
};
let Td = !1;
var sC = {
  mixout() {
    return {
      dom: {
        unwatch() {
          cg(), Td = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Ed(ll("mutationObserverCallbacks", {}));
      },
      noAuto() {
        VS();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Td ? hl() : Ed(ll("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Pd = (e) => {
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
var cC = {
  mixout() {
    return {
      parse: {
        transform: (e) => Pd(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Pd(n)), e;
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
const hc = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Nd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function lC(e) {
  return e.tag === "g" ? e.children : [e];
}
var uC = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? gs(n.split(" ").map((i) => i.trim())) : iu();
        return r.prefix || (r.prefix = Qn()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
      } = o, p = sS({
        transform: s,
        containerWidth: u,
        iconWidth: c
      }), h = {
        tag: "rect",
        attributes: {
          ...hc,
          fill: "white"
        }
      }, m = l.children ? {
        children: l.children.map(Nd)
      } : {}, g = {
        tag: "g",
        attributes: {
          ...p.inner
        },
        children: [Nd({
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
      }, w = "mask-".concat(a || ao()), _ = "clip-".concat(a || ao()), S = {
        tag: "mask",
        attributes: {
          ...hc,
          id: w,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [h, b]
      }, A = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: _
          },
          children: lC(d)
        }, S]
      };
      return n.push(A, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(_, ")"),
          mask: "url(#".concat(w, ")"),
          ...hc
        }
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, fC = {
  provides(e) {
    let t = !1;
    Jn.matchMedia && (t = Jn.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
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
}, dC = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, pC = [uS, KS, XS, JS, QS, aC, sC, cC, uC, fC, dC];
SS(pC, {
  mixoutsTo: qt
});
qt.noAuto;
qt.config;
qt.library;
qt.dom;
const gl = qt.parse;
qt.findIconDefinition;
qt.toHtml;
const hC = qt.icon;
qt.layer;
qt.text;
qt.counter;
var yl = { exports: {} }, Zo = { exports: {} }, Xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Md;
function mC() {
  if (Md) return Xe;
  Md = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
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
    return typeof E == "string" || typeof E == "function" || E === r || E === l || E === o || E === i || E === d || E === p || typeof E == "object" && E !== null && (E.$$typeof === m || E.$$typeof === h || E.$$typeof === a || E.$$typeof === s || E.$$typeof === u || E.$$typeof === b || E.$$typeof === w || E.$$typeof === _ || E.$$typeof === g);
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
var Id;
function gC() {
  return Id || (Id = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function S(ee) {
      return typeof ee == "string" || typeof ee == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      ee === r || ee === l || ee === o || ee === i || ee === d || ee === p || typeof ee == "object" && ee !== null && (ee.$$typeof === m || ee.$$typeof === h || ee.$$typeof === a || ee.$$typeof === s || ee.$$typeof === u || ee.$$typeof === b || ee.$$typeof === w || ee.$$typeof === _ || ee.$$typeof === g);
    }
    function A(ee) {
      if (typeof ee == "object" && ee !== null) {
        var Oe = ee.$$typeof;
        switch (Oe) {
          case t:
            var He = ee.type;
            switch (He) {
              case c:
              case l:
              case r:
              case o:
              case i:
              case d:
                return He;
              default:
                var ct = He && He.$$typeof;
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
    var E = c, N = l, P = s, U = a, ue = t, ge = u, pe = r, V = m, Q = h, B = n, se = o, j = i, fe = d, _e = !1;
    function J(ee) {
      return _e || (_e = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), L(ee) || A(ee) === c;
    }
    function L(ee) {
      return A(ee) === l;
    }
    function q(ee) {
      return A(ee) === s;
    }
    function ye(ee) {
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
    Je.AsyncMode = E, Je.ConcurrentMode = N, Je.ContextConsumer = P, Je.ContextProvider = U, Je.Element = ue, Je.ForwardRef = ge, Je.Fragment = pe, Je.Lazy = V, Je.Memo = Q, Je.Portal = B, Je.Profiler = se, Je.StrictMode = j, Je.Suspense = fe, Je.isAsyncMode = J, Je.isConcurrentMode = L, Je.isContextConsumer = q, Je.isContextProvider = ye, Je.isElement = I, Je.isForwardRef = X, Je.isFragment = re, Je.isLazy = Y, Je.isMemo = G, Je.isPortal = ie, Je.isProfiler = le, Je.isStrictMode = ve, Je.isSuspense = Pe, Je.isValidElementType = S, Je.typeOf = A;
  }()), Je;
}
var Dd;
function ug() {
  return Dd || (Dd = 1, process.env.NODE_ENV === "production" ? Zo.exports = mC() : Zo.exports = gC()), Zo.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var mc, jd;
function yC() {
  if (jd) return mc;
  jd = 1;
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
  return mc = i() ? Object.assign : function(o, a) {
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
  }, mc;
}
var gc, Fd;
function cu() {
  if (Fd) return gc;
  Fd = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return gc = e, gc;
}
var yc, Ld;
function fg() {
  return Ld || (Ld = 1, yc = Function.call.bind(Object.prototype.hasOwnProperty)), yc;
}
var vc, zd;
function vC() {
  if (zd) return vc;
  zd = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = cu(), n = {}, r = fg();
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
  }, vc = i, vc;
}
var bc, $d;
function bC() {
  if ($d) return bc;
  $d = 1;
  var e = ug(), t = yC(), n = cu(), r = fg(), i = vC(), o = function() {
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
  return bc = function(s, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(L) {
      var q = L && (l && L[l] || L[u]);
      if (typeof q == "function")
        return q;
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
      element: A(),
      elementType: E(),
      instanceOf: N,
      node: ge(),
      objectOf: U,
      oneOf: P,
      oneOfType: ue,
      shape: V,
      exact: Q
    };
    function m(L, q) {
      return L === q ? L !== 0 || 1 / L === 1 / q : L !== L && q !== q;
    }
    function g(L, q) {
      this.message = L, this.data = q && typeof q == "object" ? q : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function b(L) {
      if (process.env.NODE_ENV !== "production")
        var q = {}, ye = 0;
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
            ye < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + ve + "` prop on `" + ie + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), q[Oe] = !0, ye++);
          }
        }
        return Y[G] == null ? re ? Y[G] === null ? new g("The " + le + " `" + ve + "` is marked as required " + ("in `" + ie + "`, but its value is `null`.")) : new g("The " + le + " `" + ve + "` is marked as required in " + ("`" + ie + "`, but its value is `undefined`.")) : null : L(Y, G, ie, le, ve);
      }
      var X = I.bind(null, !1);
      return X.isRequired = I.bind(null, !0), X;
    }
    function w(L) {
      function q(ye, I, X, re, Y, G) {
        var ie = ye[I], le = j(ie);
        if (le !== L) {
          var ve = fe(ie);
          return new g(
            "Invalid " + re + " `" + Y + "` of type " + ("`" + ve + "` supplied to `" + X + "`, expected ") + ("`" + L + "`."),
            { expectedType: L }
          );
        }
        return null;
      }
      return b(q);
    }
    function _() {
      return b(a);
    }
    function S(L) {
      function q(ye, I, X, re, Y) {
        if (typeof L != "function")
          return new g("Property `" + Y + "` of component `" + X + "` has invalid PropType notation inside arrayOf.");
        var G = ye[I];
        if (!Array.isArray(G)) {
          var ie = j(G);
          return new g("Invalid " + re + " `" + Y + "` of type " + ("`" + ie + "` supplied to `" + X + "`, expected an array."));
        }
        for (var le = 0; le < G.length; le++) {
          var ve = L(G, le, X, re, Y + "[" + le + "]", n);
          if (ve instanceof Error)
            return ve;
        }
        return null;
      }
      return b(q);
    }
    function A() {
      function L(q, ye, I, X, re) {
        var Y = q[ye];
        if (!s(Y)) {
          var G = j(Y);
          return new g("Invalid " + X + " `" + re + "` of type " + ("`" + G + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(L);
    }
    function E() {
      function L(q, ye, I, X, re) {
        var Y = q[ye];
        if (!e.isValidElementType(Y)) {
          var G = j(Y);
          return new g("Invalid " + X + " `" + re + "` of type " + ("`" + G + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(L);
    }
    function N(L) {
      function q(ye, I, X, re, Y) {
        if (!(ye[I] instanceof L)) {
          var G = L.name || p, ie = J(ye[I]);
          return new g("Invalid " + re + " `" + Y + "` of type " + ("`" + ie + "` supplied to `" + X + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return b(q);
    }
    function P(L) {
      if (!Array.isArray(L))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), a;
      function q(ye, I, X, re, Y) {
        for (var G = ye[I], ie = 0; ie < L.length; ie++)
          if (m(G, L[ie]))
            return null;
        var le = JSON.stringify(L, function(Pe, ee) {
          var Oe = fe(ee);
          return Oe === "symbol" ? String(ee) : ee;
        });
        return new g("Invalid " + re + " `" + Y + "` of value `" + String(G) + "` " + ("supplied to `" + X + "`, expected one of " + le + "."));
      }
      return b(q);
    }
    function U(L) {
      function q(ye, I, X, re, Y) {
        if (typeof L != "function")
          return new g("Property `" + Y + "` of component `" + X + "` has invalid PropType notation inside objectOf.");
        var G = ye[I], ie = j(G);
        if (ie !== "object")
          return new g("Invalid " + re + " `" + Y + "` of type " + ("`" + ie + "` supplied to `" + X + "`, expected an object."));
        for (var le in G)
          if (r(G, le)) {
            var ve = L(G, le, X, re, Y + "." + le, n);
            if (ve instanceof Error)
              return ve;
          }
        return null;
      }
      return b(q);
    }
    function ue(L) {
      if (!Array.isArray(L))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var q = 0; q < L.length; q++) {
        var ye = L[q];
        if (typeof ye != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + _e(ye) + " at index " + q + "."
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
        return new g("Invalid " + G + " `" + ie + "` supplied to " + ("`" + Y + "`" + Oe + "."));
      }
      return b(I);
    }
    function ge() {
      function L(q, ye, I, X, re) {
        return B(q[ye]) ? null : new g("Invalid " + X + " `" + re + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return b(L);
    }
    function pe(L, q, ye, I, X) {
      return new g(
        (L || "React class") + ": " + q + " type `" + ye + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + X + "`."
      );
    }
    function V(L) {
      function q(ye, I, X, re, Y) {
        var G = ye[I], ie = j(G);
        if (ie !== "object")
          return new g("Invalid " + re + " `" + Y + "` of type `" + ie + "` " + ("supplied to `" + X + "`, expected `object`."));
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
      return b(q);
    }
    function Q(L) {
      function q(ye, I, X, re, Y) {
        var G = ye[I], ie = j(G);
        if (ie !== "object")
          return new g("Invalid " + re + " `" + Y + "` of type `" + ie + "` " + ("supplied to `" + X + "`, expected `object`."));
        var le = t({}, ye[I], L);
        for (var ve in le) {
          var Pe = L[ve];
          if (r(L, ve) && typeof Pe != "function")
            return pe(X, re, Y, ve, fe(Pe));
          if (!Pe)
            return new g(
              "Invalid " + re + " `" + Y + "` key `" + ve + "` supplied to `" + X + "`.\nBad object: " + JSON.stringify(ye[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(L), null, "  ")
            );
          var ee = Pe(G, ve, X, re, Y + "." + ve, n);
          if (ee)
            return ee;
        }
        return null;
      }
      return b(q);
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
            var ye = q.call(L), I;
            if (q !== L.entries) {
              for (; !(I = ye.next()).done; )
                if (!B(I.value))
                  return !1;
            } else
              for (; !(I = ye.next()).done; ) {
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
  }, bc;
}
var xc, Vd;
function xC() {
  if (Vd) return xc;
  Vd = 1;
  var e = cu();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, xc = function() {
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
  }, xc;
}
if (process.env.NODE_ENV !== "production") {
  var wC = ug(), _C = !0;
  yl.exports = bC()(wC.isElement, _C);
} else
  yl.exports = xC()();
var EC = yl.exports;
const We = /* @__PURE__ */ Cp(EC);
function Ud(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ud(Object(n), !0).forEach(function(r) {
      Jr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ud(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ta(e) {
  "@babel/helpers - typeof";
  return Ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ta(e);
}
function Jr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function SC(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function CC(e, t) {
  if (e == null) return {};
  var n = SC(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function vl(e) {
  return AC(e) || OC(e) || RC(e) || kC();
}
function AC(e) {
  if (Array.isArray(e)) return bl(e);
}
function OC(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function RC(e, t) {
  if (e) {
    if (typeof e == "string") return bl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bl(e, t);
  }
}
function bl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function kC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TC(e) {
  var t, n = e.beat, r = e.fade, i = e.beatFade, o = e.bounce, a = e.shake, s = e.flash, c = e.spin, l = e.spinPulse, u = e.spinReverse, d = e.pulse, p = e.fixedWidth, h = e.inverse, m = e.border, g = e.listItem, b = e.flip, w = e.size, _ = e.rotation, S = e.pull, A = (t = {
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
    "fa-li": g,
    "fa-flip": b === !0,
    "fa-flip-horizontal": b === "horizontal" || b === "both",
    "fa-flip-vertical": b === "vertical" || b === "both"
  }, Jr(t, "fa-".concat(w), typeof w < "u" && w !== null), Jr(t, "fa-rotate-".concat(_), typeof _ < "u" && _ !== null && _ !== 0), Jr(t, "fa-pull-".concat(S), typeof S < "u" && S !== null), Jr(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(A).map(function(E) {
    return A[E] ? E : null;
  }).filter(function(E) {
    return E;
  });
}
function PC(e) {
  return e = e - 0, e === e;
}
function dg(e) {
  return PC(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var NC = ["style"];
function MC(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function IC(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = dg(n.slice(0, r)), o = n.slice(r + 1).trim();
    return i.startsWith("webkit") ? t[MC(i)] = o : t[i] = o, t;
  }, {});
}
function pg(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(c) {
    return pg(e, c);
  }), i = Object.keys(t.attributes || {}).reduce(function(c, l) {
    var u = t.attributes[l];
    switch (l) {
      case "class":
        c.attrs.className = u, delete t.attributes.class;
        break;
      case "style":
        c.attrs.style = IC(u);
        break;
      default:
        l.indexOf("aria-") === 0 || l.indexOf("data-") === 0 ? c.attrs[l.toLowerCase()] = u : c.attrs[dg(l)] = u;
    }
    return c;
  }, {
    attrs: {}
  }), o = n.style, a = o === void 0 ? {} : o, s = CC(n, NC);
  return i.attrs.style = ln(ln({}, i.attrs.style), a), e.apply(void 0, [t.tag, ln(ln({}, i.attrs), s)].concat(vl(r)));
}
var hg = !1;
try {
  hg = process.env.NODE_ENV === "production";
} catch {
}
function DC() {
  if (!hg && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Bd(e) {
  if (e && Ta(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (gl.icon)
    return gl.icon(e);
  if (e === null)
    return null;
  if (e && Ta(e) === "object" && e.prefix && e.iconName)
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
function wc(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Jr({}, e, t) : {};
}
var Wd = {
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
}, Pr = /* @__PURE__ */ Le.forwardRef(function(e, t) {
  var n = ln(ln({}, Wd), e), r = n.icon, i = n.mask, o = n.symbol, a = n.className, s = n.title, c = n.titleId, l = n.maskId, u = Bd(r), d = wc("classes", [].concat(vl(TC(n)), vl((a || "").split(" ")))), p = wc("transform", typeof n.transform == "string" ? gl.transform(n.transform) : n.transform), h = wc("mask", Bd(i)), m = hC(u, ln(ln(ln(ln({}, d), p), h), {}, {
    symbol: o,
    title: s,
    titleId: c,
    maskId: l
  }));
  if (!m)
    return DC("Could not find icon", u), null;
  var g = m.abstract, b = {
    ref: t
  };
  return Object.keys(n).forEach(function(w) {
    Wd.hasOwnProperty(w) || (b[w] = n[w]);
  }), jC(g[0], b);
});
Pr.displayName = "FontAwesomeIcon";
Pr.propTypes = {
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
var jC = pg.bind(null, Le.createElement);
const mg = {
  prefix: "fas",
  iconName: "upload",
  icon: [512, 512, [], "f093", "M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]
}, FC = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, LC = FC, zC = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, $C = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
};
var Io = (e) => e.type === "checkbox", Qr = (e) => e instanceof Date, Ct = (e) => e == null;
const gg = (e) => typeof e == "object";
var bt = (e) => !Ct(e) && !Array.isArray(e) && gg(e) && !Qr(e), yg = (e) => bt(e) && e.target ? Io(e.target) ? e.target.checked : e.target.value : e, VC = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, vg = (e, t) => e.has(VC(t)), UC = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return bt(t) && t.hasOwnProperty("isPrototypeOf");
}, lu = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Mt(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(lu && (e instanceof Blob || e instanceof FileList)) && (n || bt(e)))
    if (t = n ? [] : {}, !n && !UC(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = Mt(e[r]));
  else
    return e;
  return t;
}
var vs = (e) => Array.isArray(e) ? e.filter(Boolean) : [], dt = (e) => e === void 0, ce = (e, t, n) => {
  if (!t || !bt(e))
    return n;
  const r = vs(t.split(/[,[\].]+?/)).reduce((i, o) => Ct(i) ? i : i[o], e);
  return dt(r) || r === e ? dt(e[t]) ? n : e[t] : r;
}, un = (e) => typeof e == "boolean", uu = (e) => /^\w*$/.test(e), bg = (e) => vs(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Qe = (e, t, n) => {
  let r = -1;
  const i = uu(t) ? [t] : bg(t), o = i.length, a = o - 1;
  for (; ++r < o; ) {
    const s = i[r];
    let c = n;
    if (r !== a) {
      const l = e[s];
      c = bt(l) || Array.isArray(l) ? l : isNaN(+i[r + 1]) ? {} : [];
    }
    if (s === "__proto__")
      return;
    e[s] = c, e = e[s];
  }
  return e;
};
const Pa = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Kt = {
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
}, xg = Le.createContext(null), bs = () => Le.useContext(xg), BC = (e) => {
  const { children: t, ...n } = e;
  return Le.createElement(xg.Provider, { value: n }, t);
};
var wg = (e, t, n, r = !0) => {
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
}, It = (e) => bt(e) && !Object.keys(e).length, _g = (e, t, n, r) => {
  n(e);
  const { name: i, ...o } = e;
  return It(o) || Object.keys(o).length >= Object.keys(t).length || Object.keys(o).find((a) => t[a] === (!r || Kt.all));
}, Zi = (e) => Array.isArray(e) ? e : [e], Eg = (e, t, n) => !e || !t || e === t || Zi(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function fu(e) {
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
function WC(e) {
  const t = bs(), { control: n = t.control, disabled: r, name: i, exact: o } = e || {}, [a, s] = Le.useState(n._formState), c = Le.useRef(!0), l = Le.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = Le.useRef(i);
  return u.current = i, fu({
    disabled: r,
    next: (d) => c.current && Eg(u.current, d.name, o) && _g(d, l.current, n._updateFormState) && s({
      ...n._formState,
      ...d
    }),
    subject: n._subjects.state
  }), Le.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), wg(a, n, l.current, !1);
}
var hn = (e) => typeof e == "string", Sg = (e, t, n, r, i) => hn(e) ? (r && t.watch.add(e), ce(n, e, i)) : Array.isArray(e) ? e.map((o) => (r && t.watch.add(o), ce(n, o))) : (r && (t.watchAll = !0), n);
function HC(e) {
  const t = bs(), { control: n = t.control, name: r, defaultValue: i, disabled: o, exact: a } = e || {}, s = Le.useRef(r);
  s.current = r, fu({
    disabled: o,
    subject: n._subjects.values,
    next: (u) => {
      Eg(s.current, u.name, a) && l(Mt(Sg(s.current, n._names, u.values || n._formValues, !1, i)));
    }
  });
  const [c, l] = Le.useState(n._getWatch(r, i));
  return Le.useEffect(() => n._removeUnmounted()), c;
}
function qC(e) {
  const t = bs(), { name: n, disabled: r, control: i = t.control, shouldUnregister: o } = e, a = vg(i._names.array, n), s = HC({
    control: i,
    name: n,
    defaultValue: ce(i._formValues, n, ce(i._defaultValues, n, e.defaultValue)),
    exact: !0
  }), c = WC({
    control: i,
    name: n,
    exact: !0
  }), l = Le.useRef(i.register(n, {
    ...e.rules,
    value: s,
    ...un(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return Le.useEffect(() => {
    const u = i._options.shouldUnregister || o, d = (p, h) => {
      const m = ce(i._fields, p);
      m && m._f && (m._f.mount = h);
    };
    if (d(n, !0), u) {
      const p = Mt(ce(i._options.defaultValues, n));
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
      ...un(r) || c.disabled ? { disabled: c.disabled || r } : {},
      onChange: Le.useCallback((u) => l.current.onChange({
        target: {
          value: yg(u),
          name: n
        },
        type: Pa.CHANGE
      }), [n]),
      onBlur: Le.useCallback(() => l.current.onBlur({
        target: {
          value: ce(i._formValues, n),
          name: n
        },
        type: Pa.BLUR
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
const YC = (e) => e.render(qC(e));
var Cg = (e, t, n, r, i) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: i || !0
  }
} : {}, Hd = (e) => ({
  isOnSubmit: !e || e === Kt.onSubmit,
  isOnBlur: e === Kt.onBlur,
  isOnChange: e === Kt.onChange,
  isOnAll: e === Kt.all,
  isOnTouch: e === Kt.onTouched
}), qd = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const Ki = (e, t, n, r) => {
  for (const i of n || Object.keys(e)) {
    const o = ce(e, i);
    if (o) {
      const { _f: a, ...s } = o;
      if (a) {
        if (a.refs && a.refs[0] && t(a.refs[0], i) && !r)
          break;
        if (a.ref && t(a.ref, a.name) && !r)
          break;
        Ki(s, t);
      } else bt(s) && Ki(s, t);
    }
  }
};
var GC = (e, t, n) => {
  const r = Zi(ce(e, n));
  return Qe(r, "root", t[n]), Qe(e, n, r), e;
}, du = (e) => e.type === "file", Zn = (e) => typeof e == "function", Na = (e) => {
  if (!lu)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, da = (e) => hn(e), pu = (e) => e.type === "radio", Ma = (e) => e instanceof RegExp;
const Yd = {
  value: !1,
  isValid: !1
}, Gd = { value: !0, isValid: !0 };
var Ag = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !dt(e[0].attributes.value) ? dt(e[0].value) || e[0].value === "" ? Gd : { value: e[0].value, isValid: !0 } : Gd
    ) : Yd;
  }
  return Yd;
};
const Zd = {
  isValid: !1,
  value: null
};
var Og = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Zd) : Zd;
function Kd(e, t, n = "validate") {
  if (da(e) || Array.isArray(e) && e.every(da) || un(e) && !e)
    return {
      type: n,
      message: da(e) ? e : "",
      ref: t
    };
}
var Br = (e) => bt(e) && !Ma(e) ? e : {
  value: e,
  message: ""
}, Xd = async (e, t, n, r, i) => {
  const { ref: o, refs: a, required: s, maxLength: c, minLength: l, min: u, max: d, pattern: p, validate: h, name: m, valueAsNumber: g, mount: b, disabled: w } = e._f, _ = ce(t, m);
  if (!b || w)
    return {};
  const S = a ? a[0] : o, A = (V) => {
    r && S.reportValidity && (S.setCustomValidity(un(V) ? "" : V || ""), S.reportValidity());
  }, E = {}, N = pu(o), P = Io(o), U = N || P, ue = (g || du(o)) && dt(o.value) && dt(_) || Na(o) && o.value === "" || _ === "" || Array.isArray(_) && !_.length, ge = Cg.bind(null, m, n, E), pe = (V, Q, B, se = En.maxLength, j = En.minLength) => {
    const fe = V ? Q : B;
    E[m] = {
      type: V ? se : j,
      message: fe,
      ref: o,
      ...ge(V ? se : j, fe)
    };
  };
  if (i ? !Array.isArray(_) || !_.length : s && (!U && (ue || Ct(_)) || un(_) && !_ || P && !Ag(a).isValid || N && !Og(a).isValid)) {
    const { value: V, message: Q } = da(s) ? { value: !!s, message: s } : Br(s);
    if (V && (E[m] = {
      type: En.required,
      message: Q,
      ref: S,
      ...ge(En.required, Q)
    }, !n))
      return A(Q), E;
  }
  if (!ue && (!Ct(u) || !Ct(d))) {
    let V, Q;
    const B = Br(d), se = Br(u);
    if (!Ct(_) && !isNaN(_)) {
      const j = o.valueAsNumber || _ && +_;
      Ct(B.value) || (V = j > B.value), Ct(se.value) || (Q = j < se.value);
    } else {
      const j = o.valueAsDate || new Date(_), fe = (L) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + L), _e = o.type == "time", J = o.type == "week";
      hn(B.value) && _ && (V = _e ? fe(_) > fe(B.value) : J ? _ > B.value : j > new Date(B.value)), hn(se.value) && _ && (Q = _e ? fe(_) < fe(se.value) : J ? _ < se.value : j < new Date(se.value));
    }
    if ((V || Q) && (pe(!!V, B.message, se.message, En.max, En.min), !n))
      return A(E[m].message), E;
  }
  if ((c || l) && !ue && (hn(_) || i && Array.isArray(_))) {
    const V = Br(c), Q = Br(l), B = !Ct(V.value) && _.length > +V.value, se = !Ct(Q.value) && _.length < +Q.value;
    if ((B || se) && (pe(B, V.message, Q.message), !n))
      return A(E[m].message), E;
  }
  if (p && !ue && hn(_)) {
    const { value: V, message: Q } = Br(p);
    if (Ma(V) && !_.match(V) && (E[m] = {
      type: En.pattern,
      message: Q,
      ref: o,
      ...ge(En.pattern, Q)
    }, !n))
      return A(Q), E;
  }
  if (h) {
    if (Zn(h)) {
      const V = await h(_, t), Q = Kd(V, S);
      if (Q && (E[m] = {
        ...Q,
        ...ge(En.validate, Q.message)
      }, !n))
        return A(Q.message), E;
    } else if (bt(h)) {
      let V = {};
      for (const Q in h) {
        if (!It(V) && !n)
          break;
        const B = Kd(await h[Q](_, t), S, Q);
        B && (V = {
          ...B,
          ...ge(Q, B.message)
        }, A(B.message), n && (E[m] = V));
      }
      if (!It(V) && (E[m] = {
        ref: S,
        ...V
      }, !n))
        return E;
    }
  }
  return A(!0), E;
};
function ZC(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = dt(e) ? r++ : e[t[r++]];
  return e;
}
function KC(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !dt(e[t]))
      return !1;
  return !0;
}
function vt(e, t) {
  const n = Array.isArray(t) ? t : uu(t) ? [t] : bg(t), r = n.length === 1 ? e : ZC(e, n), i = n.length - 1, o = n[i];
  return r && delete r[o], i !== 0 && (bt(r) && It(r) || Array.isArray(r) && KC(r)) && vt(e, n.slice(0, -1)), e;
}
var _c = () => {
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
}, Ia = (e) => Ct(e) || !gg(e);
function gr(e, t) {
  if (Ia(e) || Ia(t))
    return e === t;
  if (Qr(e) && Qr(t))
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
      if (Qr(o) && Qr(a) || bt(o) && bt(a) || Array.isArray(o) && Array.isArray(a) ? !gr(o, a) : o !== a)
        return !1;
    }
  }
  return !0;
}
var Rg = (e) => e.type === "select-multiple", XC = (e) => pu(e) || Io(e), Ec = (e) => Na(e) && e.isConnected, kg = (e) => {
  for (const t in e)
    if (Zn(e[t]))
      return !0;
  return !1;
};
function Da(e, t = {}) {
  const n = Array.isArray(e);
  if (bt(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || bt(e[r]) && !kg(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Da(e[r], t[r])) : Ct(e[r]) || (t[r] = !0);
  return t;
}
function Tg(e, t, n) {
  const r = Array.isArray(e);
  if (bt(e) || r)
    for (const i in e)
      Array.isArray(e[i]) || bt(e[i]) && !kg(e[i]) ? dt(t) || Ia(n[i]) ? n[i] = Array.isArray(e[i]) ? Da(e[i], []) : { ...Da(e[i]) } : Tg(e[i], Ct(t) ? {} : t[i], n[i]) : n[i] = !gr(e[i], t[i]);
  return n;
}
var Ko = (e, t) => Tg(e, t, Da(t)), Pg = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => dt(e) ? e : t ? e === "" ? NaN : e && +e : n && hn(e) ? new Date(e) : r ? r(e) : e;
function Sc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return du(t) ? t.files : pu(t) ? Og(e.refs).value : Rg(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Io(t) ? Ag(e.refs).value : Pg(dt(t.value) ? e.ref.value : t.value, e);
}
var JC = (e, t, n, r) => {
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
}, Mi = (e) => dt(e) ? e : Ma(e) ? e.source : bt(e) ? Ma(e.value) ? e.value.source : e.value : e, QC = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Jd(e, t, n) {
  const r = ce(e, n);
  if (r || uu(n))
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
var e1 = (e, t, n, r, i) => i.isOnAll ? !1 : !n && i.isOnTouch ? !(t || e) : (n ? r.isOnBlur : i.isOnBlur) ? !e : (n ? r.isOnChange : i.isOnChange) ? e : !0, t1 = (e, t) => !vs(ce(e, t)).length && vt(e, t);
const n1 = {
  mode: Kt.onSubmit,
  reValidateMode: Kt.onChange,
  shouldFocusError: !0
};
function r1(e = {}) {
  let t = {
    ...n1,
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
  }, r = {}, i = bt(t.defaultValues) || bt(t.values) ? Mt(t.defaultValues || t.values) || {} : {}, o = t.shouldUnregister ? {} : Mt(i), a = {
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
    values: _c(),
    array: _c(),
    state: _c()
  }, p = Hd(t.mode), h = Hd(t.reValidateMode), m = t.criteriaMode === Kt.all, g = (C) => (T) => {
    clearTimeout(l), l = setTimeout(C, T);
  }, b = async (C) => {
    if (u.isValid || C) {
      const T = t.resolver ? It((await U()).errors) : await ge(r, !0);
      T !== n.isValid && d.state.next({
        isValid: T
      });
    }
  }, w = (C, T) => {
    (u.isValidating || u.validatingFields) && ((C || Array.from(s.mount)).forEach((D) => {
      D && (T ? Qe(n.validatingFields, D, T) : vt(n.validatingFields, D));
    }), d.state.next({
      validatingFields: n.validatingFields,
      isValidating: !It(n.validatingFields)
    }));
  }, _ = (C, T = [], D, f, O = !0, k = !0) => {
    if (f && D) {
      if (a.action = !0, k && Array.isArray(ce(r, C))) {
        const F = D(ce(r, C), f.argA, f.argB);
        O && Qe(r, C, F);
      }
      if (k && Array.isArray(ce(n.errors, C))) {
        const F = D(ce(n.errors, C), f.argA, f.argB);
        O && Qe(n.errors, C, F), t1(n.errors, C);
      }
      if (u.touchedFields && k && Array.isArray(ce(n.touchedFields, C))) {
        const F = D(ce(n.touchedFields, C), f.argA, f.argB);
        O && Qe(n.touchedFields, C, F);
      }
      u.dirtyFields && (n.dirtyFields = Ko(i, o)), d.state.next({
        name: C,
        isDirty: V(C, T),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      Qe(o, C, T);
  }, S = (C, T) => {
    Qe(n.errors, C, T), d.state.next({
      errors: n.errors
    });
  }, A = (C) => {
    n.errors = C, d.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, E = (C, T, D, f) => {
    const O = ce(r, C);
    if (O) {
      const k = ce(o, C, dt(D) ? ce(i, C) : D);
      dt(k) || f && f.defaultChecked || T ? Qe(o, C, T ? k : Sc(O._f)) : se(C, k), a.mount && b();
    }
  }, N = (C, T, D, f, O) => {
    let k = !1, F = !1;
    const M = {
      name: C
    }, Z = !!(ce(r, C) && ce(r, C)._f && ce(r, C)._f.disabled);
    if (!D || f) {
      u.isDirty && (F = n.isDirty, n.isDirty = M.isDirty = V(), k = F !== M.isDirty);
      const W = Z || gr(ce(i, C), T);
      F = !!(!Z && ce(n.dirtyFields, C)), W || Z ? vt(n.dirtyFields, C) : Qe(n.dirtyFields, C, !0), M.dirtyFields = n.dirtyFields, k = k || u.dirtyFields && F !== !W;
    }
    if (D) {
      const W = ce(n.touchedFields, C);
      W || (Qe(n.touchedFields, C, D), M.touchedFields = n.touchedFields, k = k || u.touchedFields && W !== D);
    }
    return k && O && d.state.next(M), k ? M : {};
  }, P = (C, T, D, f) => {
    const O = ce(n.errors, C), k = u.isValid && un(T) && n.isValid !== T;
    if (e.delayError && D ? (c = g(() => S(C, D)), c(e.delayError)) : (clearTimeout(l), c = null, D ? Qe(n.errors, C, D) : vt(n.errors, C)), (D ? !gr(O, D) : O) || !It(f) || k) {
      const F = {
        ...f,
        ...k && un(T) ? { isValid: T } : {},
        errors: n.errors,
        name: C
      };
      n = {
        ...n,
        ...F
      }, d.state.next(F);
    }
  }, U = async (C) => {
    w(C, !0);
    const T = await t.resolver(o, t.context, JC(C || s.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return w(C), T;
  }, ue = async (C) => {
    const { errors: T } = await U(C);
    if (C)
      for (const D of C) {
        const f = ce(T, D);
        f ? Qe(n.errors, D, f) : vt(n.errors, D);
      }
    else
      n.errors = T;
    return T;
  }, ge = async (C, T, D = {
    valid: !0
  }) => {
    for (const f in C) {
      const O = C[f];
      if (O) {
        const { _f: k, ...F } = O;
        if (k) {
          const M = s.array.has(k.name);
          w([f], !0);
          const Z = await Xd(O, o, m, t.shouldUseNativeValidation && !T, M);
          if (w([f]), Z[k.name] && (D.valid = !1, T))
            break;
          !T && (ce(Z, k.name) ? M ? GC(n.errors, Z, k.name) : Qe(n.errors, k.name, Z[k.name]) : vt(n.errors, k.name));
        }
        !It(F) && await ge(F, T, D);
      }
    }
    return D.valid;
  }, pe = () => {
    for (const C of s.unMount) {
      const T = ce(r, C);
      T && (T._f.refs ? T._f.refs.every((D) => !Ec(D)) : !Ec(T._f.ref)) && Y(C);
    }
    s.unMount = /* @__PURE__ */ new Set();
  }, V = (C, T) => (C && T && Qe(o, C, T), !gr(q(), i)), Q = (C, T, D) => Sg(C, s, {
    ...a.mount ? o : dt(T) ? i : hn(C) ? { [C]: T } : T
  }, D, T), B = (C) => vs(ce(a.mount ? o : i, C, e.shouldUnregister ? ce(i, C, []) : [])), se = (C, T, D = {}) => {
    const f = ce(r, C);
    let O = T;
    if (f) {
      const k = f._f;
      k && (!k.disabled && Qe(o, C, Pg(T, k)), O = Na(k.ref) && Ct(T) ? "" : T, Rg(k.ref) ? [...k.ref.options].forEach((F) => F.selected = O.includes(F.value)) : k.refs ? Io(k.ref) ? k.refs.length > 1 ? k.refs.forEach((F) => (!F.defaultChecked || !F.disabled) && (F.checked = Array.isArray(O) ? !!O.find((M) => M === F.value) : O === F.value)) : k.refs[0] && (k.refs[0].checked = !!O) : k.refs.forEach((F) => F.checked = F.value === O) : du(k.ref) ? k.ref.value = "" : (k.ref.value = O, k.ref.type || d.values.next({
        name: C,
        values: { ...o }
      })));
    }
    (D.shouldDirty || D.shouldTouch) && N(C, O, D.shouldTouch, D.shouldDirty, !0), D.shouldValidate && L(C);
  }, j = (C, T, D) => {
    for (const f in T) {
      const O = T[f], k = `${C}.${f}`, F = ce(r, k);
      (s.array.has(C) || !Ia(O) || F && !F._f) && !Qr(O) ? j(k, O, D) : se(k, O, D);
    }
  }, fe = (C, T, D = {}) => {
    const f = ce(r, C), O = s.array.has(C), k = Mt(T);
    Qe(o, C, k), O ? (d.array.next({
      name: C,
      values: { ...o }
    }), (u.isDirty || u.dirtyFields) && D.shouldDirty && d.state.next({
      name: C,
      dirtyFields: Ko(i, o),
      isDirty: V(C, k)
    })) : f && !f._f && !Ct(k) ? j(C, k, D) : se(C, k, D), qd(C, s) && d.state.next({ ...n }), d.values.next({
      name: a.mount ? C : void 0,
      values: { ...o }
    });
  }, _e = async (C) => {
    a.mount = !0;
    const T = C.target;
    let D = T.name, f = !0;
    const O = ce(r, D), k = () => T.type ? Sc(O._f) : yg(C), F = (M) => {
      f = Number.isNaN(M) || M === ce(o, D, M);
    };
    if (O) {
      let M, Z;
      const W = k(), de = C.type === Pa.BLUR || C.type === Pa.FOCUS_OUT, Re = !QC(O._f) && !t.resolver && !ce(n.errors, D) && !O._f.deps || e1(de, ce(n.touchedFields, D), n.isSubmitted, h, p), Me = qd(D, s, de);
      Qe(o, D, W), de ? (O._f.onBlur && O._f.onBlur(C), c && c(0)) : O._f.onChange && O._f.onChange(C);
      const qe = N(D, W, de, !1), Ee = !It(qe) || Me;
      if (!de && d.values.next({
        name: D,
        type: C.type,
        values: { ...o }
      }), Re)
        return u.isValid && b(), Ee && d.state.next({ name: D, ...Me ? {} : qe });
      if (!de && Me && d.state.next({ ...n }), t.resolver) {
        const { errors: ft } = await U([D]);
        if (F(W), f) {
          const y = Jd(n.errors, r, D), $ = Jd(ft, r, y.name || D);
          M = $.error, D = $.name, Z = It(ft);
        }
      } else
        w([D], !0), M = (await Xd(O, o, m, t.shouldUseNativeValidation))[D], w([D]), F(W), f && (M ? Z = !1 : u.isValid && (Z = await ge(r, !0)));
      f && (O._f.deps && L(O._f.deps), P(D, Z, M, qe));
    }
  }, J = (C, T) => {
    if (ce(n.errors, T) && C.focus)
      return C.focus(), 1;
  }, L = async (C, T = {}) => {
    let D, f;
    const O = Zi(C);
    if (t.resolver) {
      const k = await ue(dt(C) ? C : O);
      D = It(k), f = C ? !O.some((F) => ce(k, F)) : D;
    } else C ? (f = (await Promise.all(O.map(async (k) => {
      const F = ce(r, k);
      return await ge(F && F._f ? { [k]: F } : F);
    }))).every(Boolean), !(!f && !n.isValid) && b()) : f = D = await ge(r);
    return d.state.next({
      ...!hn(C) || u.isValid && D !== n.isValid ? {} : { name: C },
      ...t.resolver || !C ? { isValid: D } : {},
      errors: n.errors
    }), T.shouldFocus && !f && Ki(r, J, C ? O : s.mount), f;
  }, q = (C) => {
    const T = {
      ...a.mount ? o : i
    };
    return dt(C) ? T : hn(C) ? ce(T, C) : C.map((D) => ce(T, D));
  }, ye = (C, T) => ({
    invalid: !!ce((T || n).errors, C),
    isDirty: !!ce((T || n).dirtyFields, C),
    error: ce((T || n).errors, C),
    isValidating: !!ce(n.validatingFields, C),
    isTouched: !!ce((T || n).touchedFields, C)
  }), I = (C) => {
    C && Zi(C).forEach((T) => vt(n.errors, T)), d.state.next({
      errors: C ? n.errors : {}
    });
  }, X = (C, T, D) => {
    const f = (ce(r, C, { _f: {} })._f || {}).ref, O = ce(n.errors, C) || {}, { ref: k, message: F, type: M, ...Z } = O;
    Qe(n.errors, C, {
      ...Z,
      ...T,
      ref: f
    }), d.state.next({
      name: C,
      errors: n.errors,
      isValid: !1
    }), D && D.shouldFocus && f && f.focus && f.focus();
  }, re = (C, T) => Zn(C) ? d.values.subscribe({
    next: (D) => C(Q(void 0, T), D)
  }) : Q(C, T, !0), Y = (C, T = {}) => {
    for (const D of C ? Zi(C) : s.mount)
      s.mount.delete(D), s.array.delete(D), T.keepValue || (vt(r, D), vt(o, D)), !T.keepError && vt(n.errors, D), !T.keepDirty && vt(n.dirtyFields, D), !T.keepTouched && vt(n.touchedFields, D), !T.keepIsValidating && vt(n.validatingFields, D), !t.shouldUnregister && !T.keepDefaultValue && vt(i, D);
    d.values.next({
      values: { ...o }
    }), d.state.next({
      ...n,
      ...T.keepDirty ? { isDirty: V() } : {}
    }), !T.keepIsValid && b();
  }, G = ({ disabled: C, name: T, field: D, fields: f, value: O }) => {
    if (un(C) && a.mount || C) {
      const k = C ? void 0 : dt(O) ? Sc(D ? D._f : ce(f, T)._f) : O;
      Qe(o, T, k), N(T, k, !1, !1, !0);
    }
  }, ie = (C, T = {}) => {
    let D = ce(r, C);
    const f = un(T.disabled);
    return Qe(r, C, {
      ...D || {},
      _f: {
        ...D && D._f ? D._f : { ref: { name: C } },
        name: C,
        mount: !0,
        ...T
      }
    }), s.mount.add(C), D ? G({
      field: D,
      disabled: T.disabled,
      name: C,
      value: T.value
    }) : E(C, !0, T.value), {
      ...f ? { disabled: T.disabled } : {},
      ...t.progressive ? {
        required: !!T.required,
        min: Mi(T.min),
        max: Mi(T.max),
        minLength: Mi(T.minLength),
        maxLength: Mi(T.maxLength),
        pattern: Mi(T.pattern)
      } : {},
      name: C,
      onChange: _e,
      onBlur: _e,
      ref: (O) => {
        if (O) {
          ie(C, T), D = ce(r, C);
          const k = dt(O.value) && O.querySelectorAll && O.querySelectorAll("input,select,textarea")[0] || O, F = XC(k), M = D._f.refs || [];
          if (F ? M.find((Z) => Z === k) : k === D._f.ref)
            return;
          Qe(r, C, {
            _f: {
              ...D._f,
              ...F ? {
                refs: [
                  ...M.filter(Ec),
                  k,
                  ...Array.isArray(ce(i, C)) ? [{}] : []
                ],
                ref: { type: k.type, name: C }
              } : { ref: k }
            }
          }), E(C, !1, void 0, k);
        } else
          D = ce(r, C, {}), D._f && (D._f.mount = !1), (t.shouldUnregister || T.shouldUnregister) && !(vg(s.array, C) && a.action) && s.unMount.add(C);
      }
    };
  }, le = () => t.shouldFocusError && Ki(r, J, s.mount), ve = (C) => {
    un(C) && (d.state.next({ disabled: C }), Ki(r, (T, D) => {
      const f = ce(r, D);
      f && (T.disabled = f._f.disabled || C, Array.isArray(f._f.refs) && f._f.refs.forEach((O) => {
        O.disabled = f._f.disabled || C;
      }));
    }, 0, !1));
  }, Pe = (C, T) => async (D) => {
    let f;
    D && (D.preventDefault && D.preventDefault(), D.persist && D.persist());
    let O = Mt(o);
    if (d.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: k, values: F } = await U();
      n.errors = k, O = F;
    } else
      await ge(r);
    if (vt(n.errors, "root"), It(n.errors)) {
      d.state.next({
        errors: {}
      });
      try {
        await C(O, D);
      } catch (k) {
        f = k;
      }
    } else
      T && await T({ ...n.errors }, D), le(), setTimeout(le);
    if (d.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: It(n.errors) && !f,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), f)
      throw f;
  }, ee = (C, T = {}) => {
    ce(r, C) && (dt(T.defaultValue) ? fe(C, Mt(ce(i, C))) : (fe(C, T.defaultValue), Qe(i, C, Mt(T.defaultValue))), T.keepTouched || vt(n.touchedFields, C), T.keepDirty || (vt(n.dirtyFields, C), n.isDirty = T.defaultValue ? V(C, Mt(ce(i, C))) : V()), T.keepError || (vt(n.errors, C), u.isValid && b()), d.state.next({ ...n }));
  }, Oe = (C, T = {}) => {
    const D = C ? Mt(C) : i, f = Mt(D), O = It(C), k = O ? i : f;
    if (T.keepDefaultValues || (i = D), !T.keepValues) {
      if (T.keepDirtyValues)
        for (const F of s.mount)
          ce(n.dirtyFields, F) ? Qe(k, F, ce(o, F)) : fe(F, ce(k, F));
      else {
        if (lu && dt(C))
          for (const F of s.mount) {
            const M = ce(r, F);
            if (M && M._f) {
              const Z = Array.isArray(M._f.refs) ? M._f.refs[0] : M._f.ref;
              if (Na(Z)) {
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
      o = e.shouldUnregister ? T.keepDefaultValues ? Mt(i) : {} : Mt(k), d.array.next({
        values: { ...k }
      }), d.values.next({
        values: { ...k }
      });
    }
    s = {
      mount: T.keepDirtyValues ? s.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, a.mount = !u.isValid || !!T.keepIsValid || !!T.keepDirtyValues, a.watch = !!e.shouldUnregister, d.state.next({
      submitCount: T.keepSubmitCount ? n.submitCount : 0,
      isDirty: O ? !1 : T.keepDirty ? n.isDirty : !!(T.keepDefaultValues && !gr(C, i)),
      isSubmitted: T.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: O ? {} : T.keepDirtyValues ? T.keepDefaultValues && o ? Ko(i, o) : n.dirtyFields : T.keepDefaultValues && C ? Ko(i, C) : T.keepDirty ? n.dirtyFields : {},
      touchedFields: T.keepTouched ? n.touchedFields : {},
      errors: T.keepErrors ? n.errors : {},
      isSubmitSuccessful: T.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, He = (C, T) => Oe(Zn(C) ? C(o) : C, T);
  return {
    control: {
      register: ie,
      unregister: Y,
      getFieldState: ye,
      handleSubmit: Pe,
      setError: X,
      _executeSchema: U,
      _getWatch: Q,
      _getDirty: V,
      _updateValid: b,
      _removeUnmounted: pe,
      _updateFieldArray: _,
      _updateDisabledField: G,
      _getFieldArray: B,
      _reset: Oe,
      _resetDefaultValues: () => Zn(t.defaultValues) && t.defaultValues().then((C) => {
        He(C, t.resetOptions), d.state.next({
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
    reset: He,
    resetField: ee,
    clearErrors: I,
    unregister: Y,
    setError: X,
    setFocus: (C, T = {}) => {
      const D = ce(r, C), f = D && D._f;
      if (f) {
        const O = f.refs ? f.refs[0] : f.ref;
        O.focus && (O.focus(), T.shouldSelect && O.select());
      }
    },
    getFieldState: ye
  };
}
function i1(e = {}) {
  const t = Le.useRef(), n = Le.useRef(), [r, i] = Le.useState({
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
    ...r1(e),
    formState: r
  });
  const o = t.current.control;
  return o._options = e, fu({
    subject: o._subjects.state,
    next: (a) => {
      _g(a, o._proxyFormState, o._updateFormState, !0) && i({ ...o._formState });
    }
  }), Le.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), Le.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const a = o._getDirty();
      a !== r.isDirty && o._subjects.state.next({
        isDirty: a
      });
    }
  }, [o, r.isDirty]), Le.useEffect(() => {
    e.values && !gr(e.values, n.current) ? (o._reset(e.values, o._options.resetOptions), n.current = e.values, i((a) => ({ ...a }))) : o._resetDefaultValues();
  }, [e.values, o]), Le.useEffect(() => {
    e.errors && o._setErrors(e.errors);
  }, [e.errors, o]), Le.useEffect(() => {
    o._state.mount || (o._updateValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({ ...o._formState })), o._removeUnmounted();
  }), Le.useEffect(() => {
    e.shouldUnregister && o._subjects.values.next({
      values: o._getWatch()
    });
  }, [e.shouldUnregister, o]), t.current.formState = wg(r, o), t.current;
}
var Ze;
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
})(Ze || (Ze = {}));
var xl;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(xl || (xl = {}));
const xe = Ze.arrayToEnum([
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
]), Yn = (e) => {
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
}, oe = Ze.arrayToEnum([
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
]), o1 = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
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
    return JSON.stringify(this.issues, Ze.jsonStringifyReplacer, 2);
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
const pi = (e, t) => {
  let n;
  switch (e.code) {
    case oe.invalid_type:
      e.received === xe.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case oe.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Ze.jsonStringifyReplacer)}`;
      break;
    case oe.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Ze.joinValues(e.keys, ", ")}`;
      break;
    case oe.invalid_union:
      n = "Invalid input";
      break;
    case oe.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Ze.joinValues(e.options)}`;
      break;
    case oe.invalid_enum_value:
      n = `Invalid enum value. Expected ${Ze.joinValues(e.options)}, received '${e.received}'`;
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
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Ze.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
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
      n = t.defaultError, Ze.assertNever(e);
  }
  return { message: n };
};
let Ng = pi;
function a1(e) {
  Ng = e;
}
function ja() {
  return Ng;
}
const Fa = (e) => {
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
}, s1 = [];
function me(e, t) {
  const n = ja(), r = Fa({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      n,
      n === pi ? void 0 : pi
      // then global default map
    ].filter((i) => !!i)
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
    for (const i of n) {
      if (i.status === "aborted")
        return Te;
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
    return Et.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const i of n) {
      const { key: o, value: a } = i;
      if (o.status === "aborted" || a.status === "aborted")
        return Te;
      o.status === "dirty" && t.dirty(), a.status === "dirty" && t.dirty(), o.value !== "__proto__" && (typeof a.value < "u" || i.alwaysSet) && (r[o.value] = a.value);
    }
    return { status: t.value, value: r };
  }
}
const Te = Object.freeze({
  status: "aborted"
}), ei = (e) => ({ status: "dirty", value: e }), At = (e) => ({ status: "valid", value: e }), wl = (e) => e.status === "aborted", _l = (e) => e.status === "dirty", so = (e) => e.status === "valid", co = (e) => typeof Promise < "u" && e instanceof Promise;
function La(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function Mg(e, t, n, r, i) {
  if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ae;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Ae || (Ae = {}));
var $i, Vi;
class vn {
  constructor(t, n, r, i) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Qd = (e, t) => {
  if (so(t))
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
    return Yn(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Yn(t.data),
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
        parsedType: Yn(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (co(n))
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
      parsedType: Yn(t)
    }, o = this._parseSync({ data: t, path: i.path, parent: i });
    return Qd(i, o);
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
      parsedType: Yn(t)
    }, i = this._parse({ data: t, path: r.path, parent: r }), o = await (co(i) ? i : Promise.resolve(i));
    return Qd(r, o);
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
      typeName: ke.ZodEffects,
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
    return ir.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return tn.create(this, this._def);
  }
  promise() {
    return mi.create(this, this._def);
  }
  or(t) {
    return po.create([this, t], this._def);
  }
  and(t) {
    return ho.create(this, t, this._def);
  }
  transform(t) {
    return new nn({
      ...je(this._def),
      schema: this,
      typeName: ke.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new bo({
      ...je(this._def),
      innerType: this,
      defaultValue: n,
      typeName: ke.ZodDefault
    });
  }
  brand() {
    return new hu({
      typeName: ke.ZodBranded,
      type: this,
      ...je(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new xo({
      ...je(this._def),
      innerType: this,
      catchValue: n,
      typeName: ke.ZodCatch
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
    return Do.create(this, t);
  }
  readonly() {
    return wo.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const c1 = /^c[^\s-]{8,}$/i, l1 = /^[0-9a-z]+$/, u1 = /^[0-9A-HJKMNP-TV-Z]{26}$/, f1 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, d1 = /^[a-z0-9_-]{21}$/i, p1 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, h1 = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, m1 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Cc;
const g1 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, y1 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, v1 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Ig = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", b1 = new RegExp(`^${Ig}$`);
function Dg(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function x1(e) {
  return new RegExp(`^${Dg(e)}$`);
}
function jg(e) {
  let t = `${Ig}T${Dg(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function w1(e, t) {
  return !!((t === "v4" || !t) && g1.test(e) || (t === "v6" || !t) && y1.test(e));
}
class Xt extends ze {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== xe.string) {
      const o = this._getOrReturnCtx(t);
      return me(o, {
        code: oe.invalid_type,
        expected: xe.string,
        received: o.parsedType
      }), Te;
    }
    const r = new Et();
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
        h1.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
          validation: "email",
          code: oe.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "emoji")
        Cc || (Cc = new RegExp(m1, "u")), Cc.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
          validation: "emoji",
          code: oe.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "uuid")
        f1.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
          validation: "uuid",
          code: oe.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "nanoid")
        d1.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
          validation: "nanoid",
          code: oe.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "cuid")
        c1.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
          validation: "cuid",
          code: oe.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "cuid2")
        l1.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
          validation: "cuid2",
          code: oe.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "ulid")
        u1.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
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
      }), r.dirty()) : o.kind === "datetime" ? jg(o).test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
        code: oe.invalid_string,
        validation: "datetime",
        message: o.message
      }), r.dirty()) : o.kind === "date" ? b1.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
        code: oe.invalid_string,
        validation: "date",
        message: o.message
      }), r.dirty()) : o.kind === "time" ? x1(o).test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
        code: oe.invalid_string,
        validation: "time",
        message: o.message
      }), r.dirty()) : o.kind === "duration" ? p1.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
        validation: "duration",
        code: oe.invalid_string,
        message: o.message
      }), r.dirty()) : o.kind === "ip" ? w1(t.data, o.version) || (i = this._getOrReturnCtx(t, i), me(i, {
        validation: "ip",
        code: oe.invalid_string,
        message: o.message
      }), r.dirty()) : o.kind === "base64" ? v1.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
        validation: "base64",
        code: oe.invalid_string,
        message: o.message
      }), r.dirty()) : Ze.assertNever(o);
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
    typeName: ke.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...je(e)
  });
};
function _1(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, i = n > r ? n : r, o = parseInt(e.toFixed(i).replace(".", "")), a = parseInt(t.toFixed(i).replace(".", ""));
  return o % a / Math.pow(10, i);
}
class tr extends ze {
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
      }), Te;
    }
    let r;
    const i = new Et();
    for (const o of this._def.checks)
      o.kind === "int" ? Ze.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), me(r, {
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
      }), i.dirty()) : o.kind === "multipleOf" ? _1(t.data, o.value) !== 0 && (r = this._getOrReturnCtx(t, r), me(r, {
        code: oe.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), i.dirty()) : o.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), me(r, {
        code: oe.not_finite,
        message: o.message
      }), i.dirty()) : Ze.assertNever(o);
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
    return new tr({
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
    return new tr({
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Ze.isInteger(t.value));
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
tr.create = (e) => new tr({
  checks: [],
  typeName: ke.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...je(e)
});
class nr extends ze {
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
      }), Te;
    }
    let r;
    const i = new Et();
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
      }), i.dirty()) : Ze.assertNever(o);
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
    return new nr({
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
    return new nr({
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
nr.create = (e) => {
  var t;
  return new nr({
    checks: [],
    typeName: ke.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...je(e)
  });
};
class lo extends ze {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== xe.boolean) {
      const r = this._getOrReturnCtx(t);
      return me(r, {
        code: oe.invalid_type,
        expected: xe.boolean,
        received: r.parsedType
      }), Te;
    }
    return At(t.data);
  }
}
lo.create = (e) => new lo({
  typeName: ke.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...je(e)
});
class Nr extends ze {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== xe.date) {
      const o = this._getOrReturnCtx(t);
      return me(o, {
        code: oe.invalid_type,
        expected: xe.date,
        received: o.parsedType
      }), Te;
    }
    if (isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return me(o, {
        code: oe.invalid_date
      }), Te;
    }
    const r = new Et();
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
      }), r.dirty()) : Ze.assertNever(o);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Nr({
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
Nr.create = (e) => new Nr({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: ke.ZodDate,
  ...je(e)
});
class za extends ze {
  _parse(t) {
    if (this._getType(t) !== xe.symbol) {
      const r = this._getOrReturnCtx(t);
      return me(r, {
        code: oe.invalid_type,
        expected: xe.symbol,
        received: r.parsedType
      }), Te;
    }
    return At(t.data);
  }
}
za.create = (e) => new za({
  typeName: ke.ZodSymbol,
  ...je(e)
});
class uo extends ze {
  _parse(t) {
    if (this._getType(t) !== xe.undefined) {
      const r = this._getOrReturnCtx(t);
      return me(r, {
        code: oe.invalid_type,
        expected: xe.undefined,
        received: r.parsedType
      }), Te;
    }
    return At(t.data);
  }
}
uo.create = (e) => new uo({
  typeName: ke.ZodUndefined,
  ...je(e)
});
class fo extends ze {
  _parse(t) {
    if (this._getType(t) !== xe.null) {
      const r = this._getOrReturnCtx(t);
      return me(r, {
        code: oe.invalid_type,
        expected: xe.null,
        received: r.parsedType
      }), Te;
    }
    return At(t.data);
  }
}
fo.create = (e) => new fo({
  typeName: ke.ZodNull,
  ...je(e)
});
class hi extends ze {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return At(t.data);
  }
}
hi.create = (e) => new hi({
  typeName: ke.ZodAny,
  ...je(e)
});
class Sr extends ze {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return At(t.data);
  }
}
Sr.create = (e) => new Sr({
  typeName: ke.ZodUnknown,
  ...je(e)
});
class Pn extends ze {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return me(n, {
      code: oe.invalid_type,
      expected: xe.never,
      received: n.parsedType
    }), Te;
  }
}
Pn.create = (e) => new Pn({
  typeName: ke.ZodNever,
  ...je(e)
});
class $a extends ze {
  _parse(t) {
    if (this._getType(t) !== xe.undefined) {
      const r = this._getOrReturnCtx(t);
      return me(r, {
        code: oe.invalid_type,
        expected: xe.void,
        received: r.parsedType
      }), Te;
    }
    return At(t.data);
  }
}
$a.create = (e) => new $a({
  typeName: ke.ZodVoid,
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
      }), Te;
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
      return Promise.all([...n.data].map((a, s) => i.type._parseAsync(new vn(n, a, n.path, s)))).then((a) => Et.mergeArray(r, a));
    const o = [...n.data].map((a, s) => i.type._parseSync(new vn(n, a, n.path, s)));
    return Et.mergeArray(r, o);
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
  typeName: ke.ZodArray,
  ...je(t)
});
function Gr(e) {
  if (e instanceof ut) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = gn.create(Gr(r));
    }
    return new ut({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof tn ? new tn({
    ...e._def,
    type: Gr(e.element)
  }) : e instanceof gn ? gn.create(Gr(e.unwrap())) : e instanceof ir ? ir.create(Gr(e.unwrap())) : e instanceof bn ? bn.create(e.items.map((t) => Gr(t))) : e;
}
class ut extends ze {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = Ze.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== xe.object) {
      const l = this._getOrReturnCtx(t);
      return me(l, {
        code: oe.invalid_type,
        expected: xe.object,
        received: l.parsedType
      }), Te;
    }
    const { status: r, ctx: i } = this._processInputParams(t), { shape: o, keys: a } = this._getCached(), s = [];
    if (!(this._def.catchall instanceof Pn && this._def.unknownKeys === "strip"))
      for (const l in i.data)
        a.includes(l) || s.push(l);
    const c = [];
    for (const l of a) {
      const u = o[l], d = i.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new vn(i, d, i.path, l)),
        alwaysSet: l in i.data
      });
    }
    if (this._def.catchall instanceof Pn) {
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
            new vn(i, d, i.path, u)
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
    }).then((l) => Et.mergeObjectSync(r, l)) : Et.mergeObjectSync(r, c);
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
      typeName: ke.ZodObject
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
    return Ze.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new ut({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return Ze.objectKeys(this.shape).forEach((r) => {
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
    return Gr(this);
  }
  partial(t) {
    const n = {};
    return Ze.objectKeys(this.shape).forEach((r) => {
      const i = this.shape[r];
      t && !t[r] ? n[r] = i : n[r] = i.optional();
    }), new ut({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return Ze.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let o = this.shape[r];
        for (; o instanceof gn; )
          o = o._def.innerType;
        n[r] = o;
      }
    }), new ut({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return Fg(Ze.objectKeys(this.shape));
  }
}
ut.create = (e, t) => new ut({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Pn.create(),
  typeName: ke.ZodObject,
  ...je(t)
});
ut.strictCreate = (e, t) => new ut({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Pn.create(),
  typeName: ke.ZodObject,
  ...je(t)
});
ut.lazycreate = (e, t) => new ut({
  shape: e,
  unknownKeys: "strip",
  catchall: Pn.create(),
  typeName: ke.ZodObject,
  ...je(t)
});
class po extends ze {
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
      }), Te;
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
      }), Te;
    }
  }
  get options() {
    return this._def.options;
  }
}
po.create = (e, t) => new po({
  options: e,
  typeName: ke.ZodUnion,
  ...je(t)
});
const Sn = (e) => e instanceof go ? Sn(e.schema) : e instanceof nn ? Sn(e.innerType()) : e instanceof yo ? [e.value] : e instanceof rr ? e.options : e instanceof vo ? Ze.objectValues(e.enum) : e instanceof bo ? Sn(e._def.innerType) : e instanceof uo ? [void 0] : e instanceof fo ? [null] : e instanceof gn ? [void 0, ...Sn(e.unwrap())] : e instanceof ir ? [null, ...Sn(e.unwrap())] : e instanceof hu || e instanceof wo ? Sn(e.unwrap()) : e instanceof xo ? Sn(e._def.innerType) : [];
class xs extends ze {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== xe.object)
      return me(n, {
        code: oe.invalid_type,
        expected: xe.object,
        received: n.parsedType
      }), Te;
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
    }), Te);
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
      const a = Sn(o.shape[t]);
      if (!a.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const s of a) {
        if (i.has(s))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(s)}`);
        i.set(s, o);
      }
    }
    return new xs({
      typeName: ke.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: i,
      ...je(r)
    });
  }
}
function El(e, t) {
  const n = Yn(e), r = Yn(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === xe.object && r === xe.object) {
    const i = Ze.objectKeys(t), o = Ze.objectKeys(e).filter((s) => i.indexOf(s) !== -1), a = { ...e, ...t };
    for (const s of o) {
      const c = El(e[s], t[s]);
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
      const a = e[o], s = t[o], c = El(a, s);
      if (!c.valid)
        return { valid: !1 };
      i.push(c.data);
    }
    return { valid: !0, data: i };
  } else return n === xe.date && r === xe.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class ho extends ze {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), i = (o, a) => {
      if (wl(o) || wl(a))
        return Te;
      const s = El(o.value, a.value);
      return s.valid ? ((_l(o) || _l(a)) && n.dirty(), { status: n.value, value: s.data }) : (me(r, {
        code: oe.invalid_intersection_types
      }), Te);
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
ho.create = (e, t, n) => new ho({
  left: e,
  right: t,
  typeName: ke.ZodIntersection,
  ...je(n)
});
class bn extends ze {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== xe.array)
      return me(r, {
        code: oe.invalid_type,
        expected: xe.array,
        received: r.parsedType
      }), Te;
    if (r.data.length < this._def.items.length)
      return me(r, {
        code: oe.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Te;
    !this._def.rest && r.data.length > this._def.items.length && (me(r, {
      code: oe.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const o = [...r.data].map((a, s) => {
      const c = this._def.items[s] || this._def.rest;
      return c ? c._parse(new vn(r, a, r.path, s)) : null;
    }).filter((a) => !!a);
    return r.common.async ? Promise.all(o).then((a) => Et.mergeArray(n, a)) : Et.mergeArray(n, o);
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
    typeName: ke.ZodTuple,
    rest: null,
    ...je(t)
  });
};
class mo extends ze {
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
      }), Te;
    const i = [], o = this._def.keyType, a = this._def.valueType;
    for (const s in r.data)
      i.push({
        key: o._parse(new vn(r, s, r.path, s)),
        value: a._parse(new vn(r, r.data[s], r.path, s)),
        alwaysSet: s in r.data
      });
    return r.common.async ? Et.mergeObjectAsync(n, i) : Et.mergeObjectSync(n, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof ze ? new mo({
      keyType: t,
      valueType: n,
      typeName: ke.ZodRecord,
      ...je(r)
    }) : new mo({
      keyType: Xt.create(),
      valueType: t,
      typeName: ke.ZodRecord,
      ...je(n)
    });
  }
}
class Va extends ze {
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
      }), Te;
    const i = this._def.keyType, o = this._def.valueType, a = [...r.data.entries()].map(([s, c], l) => ({
      key: i._parse(new vn(r, s, r.path, [l, "key"])),
      value: o._parse(new vn(r, c, r.path, [l, "value"]))
    }));
    if (r.common.async) {
      const s = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of a) {
          const l = await c.key, u = await c.value;
          if (l.status === "aborted" || u.status === "aborted")
            return Te;
          (l.status === "dirty" || u.status === "dirty") && n.dirty(), s.set(l.value, u.value);
        }
        return { status: n.value, value: s };
      });
    } else {
      const s = /* @__PURE__ */ new Map();
      for (const c of a) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted")
          return Te;
        (l.status === "dirty" || u.status === "dirty") && n.dirty(), s.set(l.value, u.value);
      }
      return { status: n.value, value: s };
    }
  }
}
Va.create = (e, t, n) => new Va({
  valueType: t,
  keyType: e,
  typeName: ke.ZodMap,
  ...je(n)
});
class Mr extends ze {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== xe.set)
      return me(r, {
        code: oe.invalid_type,
        expected: xe.set,
        received: r.parsedType
      }), Te;
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
          return Te;
        u.status === "dirty" && n.dirty(), l.add(u.value);
      }
      return { status: n.value, value: l };
    }
    const s = [...r.data.values()].map((c, l) => o._parse(new vn(r, c, r.path, l)));
    return r.common.async ? Promise.all(s).then((c) => a(c)) : a(s);
  }
  min(t, n) {
    return new Mr({
      ...this._def,
      minSize: { value: t, message: Ae.toString(n) }
    });
  }
  max(t, n) {
    return new Mr({
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
Mr.create = (e, t) => new Mr({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: ke.ZodSet,
  ...je(t)
});
class oi extends ze {
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
      }), Te;
    function r(s, c) {
      return Fa({
        data: s,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ja(),
          pi
        ].filter((l) => !!l),
        issueData: {
          code: oe.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function i(s, c) {
      return Fa({
        data: s,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ja(),
          pi
        ].filter((l) => !!l),
        issueData: {
          code: oe.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const o = { errorMap: n.common.contextualErrorMap }, a = n.data;
    if (this._def.returns instanceof mi) {
      const s = this;
      return At(async function(...c) {
        const l = new Ut([]), u = await s._def.args.parseAsync(c, o).catch((h) => {
          throw l.addIssue(r(c, h)), l;
        }), d = await Reflect.apply(a, this, u);
        return await s._def.returns._def.type.parseAsync(d, o).catch((h) => {
          throw l.addIssue(i(d, h)), l;
        });
      });
    } else {
      const s = this;
      return At(function(...c) {
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
    return new oi({
      ...this._def,
      args: bn.create(t).rest(Sr.create())
    });
  }
  returns(t) {
    return new oi({
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
    return new oi({
      args: t || bn.create([]).rest(Sr.create()),
      returns: n || Sr.create(),
      typeName: ke.ZodFunction,
      ...je(r)
    });
  }
}
class go extends ze {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
go.create = (e, t) => new go({
  getter: e,
  typeName: ke.ZodLazy,
  ...je(t)
});
class yo extends ze {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return me(n, {
        received: n.data,
        code: oe.invalid_literal,
        expected: this._def.value
      }), Te;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
yo.create = (e, t) => new yo({
  value: e,
  typeName: ke.ZodLiteral,
  ...je(t)
});
function Fg(e, t) {
  return new rr({
    values: e,
    typeName: ke.ZodEnum,
    ...je(t)
  });
}
class rr extends ze {
  constructor() {
    super(...arguments), $i.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return me(n, {
        expected: Ze.joinValues(r),
        received: n.parsedType,
        code: oe.invalid_type
      }), Te;
    }
    if (La(this, $i) || Mg(this, $i, new Set(this._def.values)), !La(this, $i).has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return me(n, {
        received: n.data,
        code: oe.invalid_enum_value,
        options: r
      }), Te;
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
    return rr.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return rr.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
$i = /* @__PURE__ */ new WeakMap();
rr.create = Fg;
class vo extends ze {
  constructor() {
    super(...arguments), Vi.set(this, void 0);
  }
  _parse(t) {
    const n = Ze.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== xe.string && r.parsedType !== xe.number) {
      const i = Ze.objectValues(n);
      return me(r, {
        expected: Ze.joinValues(i),
        received: r.parsedType,
        code: oe.invalid_type
      }), Te;
    }
    if (La(this, Vi) || Mg(this, Vi, new Set(Ze.getValidEnumValues(this._def.values))), !La(this, Vi).has(t.data)) {
      const i = Ze.objectValues(n);
      return me(r, {
        received: r.data,
        code: oe.invalid_enum_value,
        options: i
      }), Te;
    }
    return At(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Vi = /* @__PURE__ */ new WeakMap();
vo.create = (e, t) => new vo({
  values: e,
  typeName: ke.ZodNativeEnum,
  ...je(t)
});
class mi extends ze {
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
      }), Te;
    const r = n.parsedType === xe.promise ? n.data : Promise.resolve(n.data);
    return At(r.then((i) => this._def.type.parseAsync(i, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
mi.create = (e, t) => new mi({
  type: e,
  typeName: ke.ZodPromise,
  ...je(t)
});
class nn extends ze {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ke.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
            return Te;
          const c = await this._def.schema._parseAsync({
            data: s,
            path: r.path,
            parent: r
          });
          return c.status === "aborted" ? Te : c.status === "dirty" || n.value === "dirty" ? ei(c.value) : c;
        });
      {
        if (n.value === "aborted")
          return Te;
        const s = this._def.schema._parseSync({
          data: a,
          path: r.path,
          parent: r
        });
        return s.status === "aborted" ? Te : s.status === "dirty" || n.value === "dirty" ? ei(s.value) : s;
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
        return s.status === "aborted" ? Te : (s.status === "dirty" && n.dirty(), a(s.value), { status: n.value, value: s.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => s.status === "aborted" ? Te : (s.status === "dirty" && n.dirty(), a(s.value).then(() => ({ status: n.value, value: s.value }))));
    }
    if (i.type === "transform")
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!so(a))
          return a;
        const s = i.transform(a.value, o);
        if (s instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: s };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((a) => so(a) ? Promise.resolve(i.transform(a.value, o)).then((s) => ({ status: n.value, value: s })) : a);
    Ze.assertNever(i);
  }
}
nn.create = (e, t, n) => new nn({
  schema: e,
  typeName: ke.ZodEffects,
  effect: t,
  ...je(n)
});
nn.createWithPreprocess = (e, t, n) => new nn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: ke.ZodEffects,
  ...je(n)
});
class gn extends ze {
  _parse(t) {
    return this._getType(t) === xe.undefined ? At(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
gn.create = (e, t) => new gn({
  innerType: e,
  typeName: ke.ZodOptional,
  ...je(t)
});
class ir extends ze {
  _parse(t) {
    return this._getType(t) === xe.null ? At(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ir.create = (e, t) => new ir({
  innerType: e,
  typeName: ke.ZodNullable,
  ...je(t)
});
class bo extends ze {
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
bo.create = (e, t) => new bo({
  innerType: e,
  typeName: ke.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...je(t)
});
class xo extends ze {
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
    return co(i) ? i.then((o) => ({
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
xo.create = (e, t) => new xo({
  innerType: e,
  typeName: ke.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...je(t)
});
class Ua extends ze {
  _parse(t) {
    if (this._getType(t) !== xe.nan) {
      const r = this._getOrReturnCtx(t);
      return me(r, {
        code: oe.invalid_type,
        expected: xe.nan,
        received: r.parsedType
      }), Te;
    }
    return { status: "valid", value: t.data };
  }
}
Ua.create = (e) => new Ua({
  typeName: ke.ZodNaN,
  ...je(e)
});
const E1 = Symbol("zod_brand");
class hu extends ze {
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
class Do extends ze {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? Te : o.status === "dirty" ? (n.dirty(), ei(o.value)) : this._def.out._parseAsync({
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
      return i.status === "aborted" ? Te : i.status === "dirty" ? (n.dirty(), {
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
    return new Do({
      in: t,
      out: n,
      typeName: ke.ZodPipeline
    });
  }
}
class wo extends ze {
  _parse(t) {
    const n = this._def.innerType._parse(t), r = (i) => (so(i) && (i.value = Object.freeze(i.value)), i);
    return co(n) ? n.then((i) => r(i)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
wo.create = (e, t) => new wo({
  innerType: e,
  typeName: ke.ZodReadonly,
  ...je(t)
});
function Lg(e, t = {}, n) {
  return e ? hi.create().superRefine((r, i) => {
    var o, a;
    if (!e(r)) {
      const s = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (a = (o = s.fatal) !== null && o !== void 0 ? o : n) !== null && a !== void 0 ? a : !0, l = typeof s == "string" ? { message: s } : s;
      i.addIssue({ code: "custom", ...l, fatal: c });
    }
  }) : hi.create();
}
const S1 = {
  object: ut.lazycreate
};
var ke;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(ke || (ke = {}));
const C1 = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Lg((n) => n instanceof e, t), zg = Xt.create, $g = tr.create, A1 = Ua.create, O1 = nr.create, Vg = lo.create, R1 = Nr.create, k1 = za.create, T1 = uo.create, P1 = fo.create, N1 = hi.create, M1 = Sr.create, I1 = Pn.create, D1 = $a.create, j1 = tn.create, F1 = ut.create, L1 = ut.strictCreate, z1 = po.create, $1 = xs.create, V1 = ho.create, U1 = bn.create, B1 = mo.create, W1 = Va.create, H1 = Mr.create, q1 = oi.create, Y1 = go.create, G1 = yo.create, Z1 = rr.create, K1 = vo.create, X1 = mi.create, ep = nn.create, J1 = gn.create, Q1 = ir.create, eA = nn.createWithPreprocess, tA = Do.create, nA = () => zg().optional(), rA = () => $g().optional(), iA = () => Vg().optional(), oA = {
  string: (e) => Xt.create({ ...e, coerce: !0 }),
  number: (e) => tr.create({ ...e, coerce: !0 }),
  boolean: (e) => lo.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => nr.create({ ...e, coerce: !0 }),
  date: (e) => Nr.create({ ...e, coerce: !0 })
}, aA = Te;
var Ii = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: pi,
  setErrorMap: a1,
  getErrorMap: ja,
  makeIssue: Fa,
  EMPTY_PATH: s1,
  addIssueToContext: me,
  ParseStatus: Et,
  INVALID: Te,
  DIRTY: ei,
  OK: At,
  isAborted: wl,
  isDirty: _l,
  isValid: so,
  isAsync: co,
  get util() {
    return Ze;
  },
  get objectUtil() {
    return xl;
  },
  ZodParsedType: xe,
  getParsedType: Yn,
  ZodType: ze,
  datetimeRegex: jg,
  ZodString: Xt,
  ZodNumber: tr,
  ZodBigInt: nr,
  ZodBoolean: lo,
  ZodDate: Nr,
  ZodSymbol: za,
  ZodUndefined: uo,
  ZodNull: fo,
  ZodAny: hi,
  ZodUnknown: Sr,
  ZodNever: Pn,
  ZodVoid: $a,
  ZodArray: tn,
  ZodObject: ut,
  ZodUnion: po,
  ZodDiscriminatedUnion: xs,
  ZodIntersection: ho,
  ZodTuple: bn,
  ZodRecord: mo,
  ZodMap: Va,
  ZodSet: Mr,
  ZodFunction: oi,
  ZodLazy: go,
  ZodLiteral: yo,
  ZodEnum: rr,
  ZodNativeEnum: vo,
  ZodPromise: mi,
  ZodEffects: nn,
  ZodTransformer: nn,
  ZodOptional: gn,
  ZodNullable: ir,
  ZodDefault: bo,
  ZodCatch: xo,
  ZodNaN: Ua,
  BRAND: E1,
  ZodBranded: hu,
  ZodPipeline: Do,
  ZodReadonly: wo,
  custom: Lg,
  Schema: ze,
  ZodSchema: ze,
  late: S1,
  get ZodFirstPartyTypeKind() {
    return ke;
  },
  coerce: oA,
  any: N1,
  array: j1,
  bigint: O1,
  boolean: Vg,
  date: R1,
  discriminatedUnion: $1,
  effect: ep,
  enum: Z1,
  function: q1,
  instanceof: C1,
  intersection: V1,
  lazy: Y1,
  literal: G1,
  map: W1,
  nan: A1,
  nativeEnum: K1,
  never: I1,
  null: P1,
  nullable: Q1,
  number: $g,
  object: F1,
  oboolean: iA,
  onumber: rA,
  optional: J1,
  ostring: nA,
  pipeline: tA,
  preprocess: eA,
  promise: X1,
  record: B1,
  set: H1,
  strictObject: L1,
  string: zg,
  symbol: k1,
  transformer: ep,
  tuple: U1,
  undefined: T1,
  union: z1,
  unknown: M1,
  void: D1,
  NEVER: aA,
  ZodIssueCode: oe,
  quotelessJson: o1,
  ZodError: Ut
});
const tp = (e, t, n) => {
  if (e && "reportValidity" in e) {
    const r = ce(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, Ug = (e, t) => {
  for (const n in t.fields) {
    const r = t.fields[n];
    r && r.ref && "reportValidity" in r.ref ? tp(r.ref, n, e) : r.refs && r.refs.forEach((i) => tp(i, n, e));
  }
}, sA = (e, t) => {
  t.shouldUseNativeValidation && Ug(e, t);
  const n = {};
  for (const r in e) {
    const i = ce(t.fields, r), o = Object.assign(e[r] || {}, { ref: i && i.ref });
    if (cA(t.names || Object.keys(e), r)) {
      const a = Object.assign({}, ce(n, r));
      Qe(a, "root", o), Qe(n, r, a);
    } else Qe(n, r, o);
  }
  return n;
}, cA = (e, t) => e.some((n) => n.startsWith(t + "."));
var lA = function(e, t) {
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
      n[a] = Cg(a, t, n, i, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, uA = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, i, o) {
    try {
      return Promise.resolve(function(a, s) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return o.shouldUseNativeValidation && Ug({}, o), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return s(l);
        }
        return c && c.then ? c.then(void 0, s) : c;
      }(0, function(a) {
        if (function(s) {
          return Array.isArray(s == null ? void 0 : s.errors);
        }(a)) return { values: {}, errors: sA(lA(a.errors, !o.shouldUseNativeValidation && o.criteriaMode === "all"), o) };
        throw a;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
}, fA = "Label", Bg = x.forwardRef((e, t) => /* @__PURE__ */ v.jsx(
  pt.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var i;
      n.target.closest("button, input, select, textarea") || ((i = e.onMouseDown) == null || i.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Bg.displayName = fA;
var Wg = Bg;
const dA = Nm(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Hg = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  Wg,
  {
    ref: n,
    className: $e(dA(), e),
    ...t
  }
));
Hg.displayName = Wg.displayName;
const pA = BC, qg = x.createContext(
  {}
), Xo = ({
  ...e
}) => /* @__PURE__ */ v.jsx(qg.Provider, { value: { name: e.name }, children: /* @__PURE__ */ v.jsx(YC, { ...e }) }), ws = () => {
  const e = x.useContext(qg), t = x.useContext(Yg), { getFieldState: n, formState: r } = bs(), i = n(e.name, r);
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
}, Yg = x.createContext(
  {}
), Zr = x.forwardRef(({ className: e, ...t }, n) => {
  const r = x.useId();
  return /* @__PURE__ */ v.jsx(Yg.Provider, { value: { id: r }, children: /* @__PURE__ */ v.jsx("div", { ref: n, className: $e("space-y-2", e), ...t }) });
});
Zr.displayName = "FormItem";
const Ui = x.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: i } = ws();
  return /* @__PURE__ */ v.jsx(
    Hg,
    {
      ref: n,
      className: $e(r && "text-red-500 dark:text-red-900", e),
      htmlFor: i,
      ...t
    }
  );
});
Ui.displayName = "FormLabel";
const Bi = x.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: i, formMessageId: o } = ws();
  return /* @__PURE__ */ v.jsx(
    Rn,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${i} ${o}` : `${i}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
Bi.displayName = "FormControl";
const hA = x.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = ws();
  return /* @__PURE__ */ v.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: $e("text-sm text-slate-500 dark:text-slate-400", e),
      ...t
    }
  );
});
hA.displayName = "FormDescription";
const pa = x.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: i, formMessageId: o } = ws(), a = i ? String(i == null ? void 0 : i.message) : t;
  return a ? /* @__PURE__ */ v.jsx(
    "p",
    {
      ref: r,
      id: o,
      className: $e("text-sm font-medium text-red-500 dark:text-red-900", e),
      ...n,
      children: a
    }
  ) : null;
});
pa.displayName = "FormMessage";
const Xi = x.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ v.jsx(
    "input",
    {
      type: t,
      className: $e(
        "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        e
      ),
      ref: r,
      ...n
    }
  )
);
Xi.displayName = "Input";
const Gg = x.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
    "textarea",
    {
      className: $e(
        "flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        e
      ),
      ref: n,
      ...t
    }
  )
);
Gg.displayName = "Textarea";
const mA = Ii.object({
  label: Ii.string().min(1, "Ce champs ne doit pas être vide"),
  alt: Ii.string().optional(),
  description: Ii.string().optional(),
  file: Ii.any()
});
function gA() {
  const e = yr((a) => a.main.currentMedia);
  if (e === null)
    return /* @__PURE__ */ v.jsx("p", { children: "Pas de media " });
  const t = yi(), n = i1({
    resolver: uA(mA),
    mode: "onBlur",
    defaultValues: {
      label: e.label,
      alt: e.alt === void 0 ? "" : String(e.alt),
      description: e.description === void 0 ? "" : String(e.description),
      file: null
    }
  }), r = n.register("file");
  Kn(() => {
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
    if (c = await t(sa(l)), s !== null && e.id !== void 0) {
      const u = {
        id: e.id,
        file: s
      };
      c = await t(ca(u));
    }
    t(Jc(c.payload));
  }, o = () => {
    t(Jc(null));
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "h-full", children: [
    /* @__PURE__ */ v.jsx("div", { className: "border-y-2 h-20 flex items-center", children: /* @__PURE__ */ v.jsxs("div", { className: "px-6 flex items-center justify-between w-full", children: [
      /* @__PURE__ */ v.jsx("span", { className: "text-ellipsis", children: e.label }),
      /* @__PURE__ */ v.jsx(wr, { variant: "ghost", onClick: o, children: /* @__PURE__ */ v.jsx(Pr, { icon: LC, className: "h-5 w-5 text-gray-500" }) })
    ] }) }),
    /* @__PURE__ */ v.jsxs("div", { className: "px-6 pb-6 h-[calc(100%-5rem)] overflow-y-auto", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "my-3 bg-checkerboard flex justify-center", children: [
        e.picture && /* @__PURE__ */ v.jsx("img", { src: String(e.thumbnail), alt: String(e.alt), className: "" }),
        e.svg && /* @__PURE__ */ v.jsx("img", { src: String(e.reference), alt: String(e.alt), className: "" })
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "my-3", children: [
        /* @__PURE__ */ v.jsxs("div", { className: "mb-2 border-b-2 flex justify-between", children: [
          /* @__PURE__ */ v.jsx("div", { className: "flex justify-start", children: "Created at" }),
          /* @__PURE__ */ v.jsx("div", { className: "flex justify-end", children: Kf(e.createdAt) && Zf(String(e.createdAt)) })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "mb-2 border-b-2 flex justify-between", children: [
          /* @__PURE__ */ v.jsx("div", { className: "flex justify-start", children: "Updated at" }),
          /* @__PURE__ */ v.jsx("div", { className: "flex justify-end", children: Kf(e.updatedAt) && Zf(String(e.updatedAt)) })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "mb-2 border-b-2 flex justify-between", children: [
          /* @__PURE__ */ v.jsx("div", { className: "flex justify-start", children: "Extension" }),
          /* @__PURE__ */ v.jsx("div", { className: "flex justify-end", children: e.extension })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "mb-2 border-b-2 flex justify-between", children: [
          /* @__PURE__ */ v.jsx("div", { className: "flex justify-start", children: "MimeType" }),
          /* @__PURE__ */ v.jsx("div", { className: "flex justify-end", children: e.mimeType })
        ] })
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: "max-w-md mx-auto mt-10", children: /* @__PURE__ */ v.jsx(pA, { ...n, children: /* @__PURE__ */ v.jsxs("form", { onSubmit: n.handleSubmit(i), className: "space-y-6", children: [
        /* @__PURE__ */ v.jsx(
          Xo,
          {
            name: "file",
            control: n.control,
            render: ({ field: a }) => /* @__PURE__ */ v.jsxs(Zr, { children: [
              /* @__PURE__ */ v.jsx(Ui, { children: "Fichier" }),
              /* @__PURE__ */ v.jsx(Bi, { children: /* @__PURE__ */ v.jsx(
                Xi,
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
        /* @__PURE__ */ v.jsx(
          Xo,
          {
            control: n.control,
            name: "label",
            render: ({ field: a }) => /* @__PURE__ */ v.jsxs(Zr, { children: [
              /* @__PURE__ */ v.jsx(Ui, { children: "Libellé" }),
              /* @__PURE__ */ v.jsx(Bi, { children: /* @__PURE__ */ v.jsx(
                Xi,
                {
                  ...a
                }
              ) }),
              /* @__PURE__ */ v.jsx(pa, { className: "text-red-600" })
            ] })
          }
        ),
        /* @__PURE__ */ v.jsx(
          Xo,
          {
            control: n.control,
            name: "alt",
            render: ({ field: a }) => /* @__PURE__ */ v.jsxs(Zr, { children: [
              /* @__PURE__ */ v.jsx(Ui, { children: "Balise alt" }),
              /* @__PURE__ */ v.jsx(Bi, { children: /* @__PURE__ */ v.jsx(
                Xi,
                {
                  ...a
                }
              ) }),
              /* @__PURE__ */ v.jsx(pa, { className: "text-red-600" })
            ] })
          }
        ),
        /* @__PURE__ */ v.jsx(
          Xo,
          {
            control: n.control,
            name: "description",
            render: ({ field: a }) => /* @__PURE__ */ v.jsxs(Zr, { children: [
              /* @__PURE__ */ v.jsx(Ui, { children: "Description" }),
              /* @__PURE__ */ v.jsx(Bi, { children: /* @__PURE__ */ v.jsx(
                Gg,
                {
                  ...a
                }
              ) }),
              /* @__PURE__ */ v.jsx(pa, { className: "text-red-600" })
            ] })
          }
        ),
        /* @__PURE__ */ v.jsx(Zr, { children: /* @__PURE__ */ v.jsx(wr, { type: "submit", className: "w-full", children: "Valider" }) })
      ] }) }) })
    ] })
  ] });
}
const Zg = x.forwardRef(({ ...e }, t) => /* @__PURE__ */ v.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
Zg.displayName = "Breadcrumb";
const Kg = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  "ol",
  {
    ref: n,
    className: $e(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-slate-500 sm:gap-2.5 dark:text-slate-400",
      e
    ),
    ...t
  }
));
Kg.displayName = "BreadcrumbList";
const Wi = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  "li",
  {
    ref: n,
    className: $e("inline-flex items-center gap-1.5", e),
    ...t
  }
));
Wi.displayName = "BreadcrumbItem";
const Sl = x.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const i = e ? Rn : "a";
  return /* @__PURE__ */ v.jsx(
    i,
    {
      ref: r,
      className: $e("transition-colors hover:text-slate-950 dark:hover:text-slate-50", t),
      ...n
    }
  );
});
Sl.displayName = "BreadcrumbLink";
const Xg = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: $e("font-normal text-slate-950 dark:text-slate-50", e),
    ...t
  }
));
Xg.displayName = "BreadcrumbPage";
const ha = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ v.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: $e("[&>svg]:size-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ v.jsx(tm, {})
  }
);
ha.displayName = "BreadcrumbSeparator";
const Jg = ({
  className: e,
  ...t
}) => /* @__PURE__ */ v.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: $e("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ v.jsx(N_, { className: "h-4 w-4" }),
      /* @__PURE__ */ v.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
Jg.displayName = "BreadcrumbElipssis";
function Ue(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), n === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function yA(e, t) {
  const n = x.createContext(t);
  function r(o) {
    const { children: a, ...s } = o, c = x.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ v.jsx(n.Provider, { value: c, children: a });
  }
  function i(o) {
    const a = x.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${o}\` must be used within \`${e}\``);
  }
  return r.displayName = e + "Provider", [r, i];
}
function Si(e, t = []) {
  let n = [];
  function r(o, a) {
    const s = x.createContext(a), c = n.length;
    n = [...n, a];
    function l(d) {
      const { scope: p, children: h, ...m } = d, g = (p == null ? void 0 : p[e][c]) || s, b = x.useMemo(() => m, Object.values(m));
      return /* @__PURE__ */ v.jsx(g.Provider, { value: b, children: h });
    }
    function u(d, p) {
      const h = (p == null ? void 0 : p[e][c]) || s, m = x.useContext(h);
      if (m) return m;
      if (a !== void 0) return a;
      throw new Error(`\`${d}\` must be used within \`${o}\``);
    }
    return l.displayName = o + "Provider", [l, u];
  }
  const i = () => {
    const o = n.map((a) => x.createContext(a));
    return function(s) {
      const c = (s == null ? void 0 : s[e]) || o;
      return x.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return i.scopeName = e, [r, vA(i, ...t)];
}
function vA(...e) {
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
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function rn(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e;
  }), x.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function mu({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, i] = bA({ defaultProp: t, onChange: n }), o = e !== void 0, a = o ? e : r, s = rn(n), c = x.useCallback(
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
function bA({
  defaultProp: e,
  onChange: t
}) {
  const n = x.useState(e), [r] = n, i = x.useRef(r), o = rn(t);
  return x.useEffect(() => {
    i.current !== r && (o(r), i.current = r);
  }, [r, i, o]), n;
}
function Qg(e) {
  const t = e + "CollectionProvider", [n, r] = Si(t), [i, o] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (h) => {
    const { scope: m, children: g } = h, b = Le.useRef(null), w = Le.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ v.jsx(i, { scope: m, itemMap: w, collectionRef: b, children: g });
  };
  a.displayName = t;
  const s = e + "CollectionSlot", c = Le.forwardRef(
    (h, m) => {
      const { scope: g, children: b } = h, w = o(s, g), _ = wt(m, w.collectionRef);
      return /* @__PURE__ */ v.jsx(Rn, { ref: _, children: b });
    }
  );
  c.displayName = s;
  const l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = Le.forwardRef(
    (h, m) => {
      const { scope: g, children: b, ...w } = h, _ = Le.useRef(null), S = wt(m, _), A = o(l, g);
      return Le.useEffect(() => (A.itemMap.set(_, { ref: _, ...w }), () => void A.itemMap.delete(_))), /* @__PURE__ */ v.jsx(Rn, { [u]: "", ref: S, children: b });
    }
  );
  d.displayName = l;
  function p(h) {
    const m = o(e + "CollectionConsumer", h);
    return Le.useCallback(() => {
      const b = m.collectionRef.current;
      if (!b) return [];
      const w = Array.from(b.querySelectorAll(`[${u}]`));
      return Array.from(m.itemMap.values()).sort(
        (A, E) => w.indexOf(A.ref.current) - w.indexOf(E.ref.current)
      );
    }, [m.collectionRef, m.itemMap]);
  }
  return [
    { Provider: a, Slot: c, ItemSlot: d },
    p,
    r
  ];
}
var xA = x.createContext(void 0);
function ey(e) {
  const t = x.useContext(xA);
  return e || t || "ltr";
}
function wA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rn(e);
  x.useEffect(() => {
    const r = (i) => {
      i.key === "Escape" && n(i);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var _A = "DismissableLayer", Cl = "dismissableLayer.update", EA = "dismissableLayer.pointerDownOutside", SA = "dismissableLayer.focusOutside", np, ty = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), gu = x.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: i,
      onFocusOutside: o,
      onInteractOutside: a,
      onDismiss: s,
      ...c
    } = e, l = x.useContext(ty), [u, d] = x.useState(null), p = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = x.useState({}), m = wt(t, (P) => d(P)), g = Array.from(l.layers), [b] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), w = g.indexOf(b), _ = u ? g.indexOf(u) : -1, S = l.layersWithOutsidePointerEventsDisabled.size > 0, A = _ >= w, E = OA((P) => {
      const U = P.target, ue = [...l.branches].some((ge) => ge.contains(U));
      !A || ue || (i == null || i(P), a == null || a(P), P.defaultPrevented || s == null || s());
    }, p), N = RA((P) => {
      const U = P.target;
      [...l.branches].some((ge) => ge.contains(U)) || (o == null || o(P), a == null || a(P), P.defaultPrevented || s == null || s());
    }, p);
    return wA((P) => {
      _ === l.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && s && (P.preventDefault(), s()));
    }, p), x.useEffect(() => {
      if (u)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (np = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), rp(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = np);
        };
    }, [u, p, n, l]), x.useEffect(() => () => {
      u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), rp());
    }, [u, l]), x.useEffect(() => {
      const P = () => h({});
      return document.addEventListener(Cl, P), () => document.removeEventListener(Cl, P);
    }, []), /* @__PURE__ */ v.jsx(
      pt.div,
      {
        ...c,
        ref: m,
        style: {
          pointerEvents: S ? A ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Ue(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: Ue(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: Ue(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
gu.displayName = _A;
var CA = "DismissableLayerBranch", AA = x.forwardRef((e, t) => {
  const n = x.useContext(ty), r = x.useRef(null), i = wt(t, r);
  return x.useEffect(() => {
    const o = r.current;
    if (o)
      return n.branches.add(o), () => {
        n.branches.delete(o);
      };
  }, [n.branches]), /* @__PURE__ */ v.jsx(pt.div, { ...e, ref: i });
});
AA.displayName = CA;
function OA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rn(e), r = x.useRef(!1), i = x.useRef(() => {
  });
  return x.useEffect(() => {
    const o = (s) => {
      if (s.target && !r.current) {
        let c = function() {
          ny(
            EA,
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
function RA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rn(e), r = x.useRef(!1);
  return x.useEffect(() => {
    const i = (o) => {
      o.target && !r.current && ny(SA, n, { originalEvent: o }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function rp() {
  const e = new CustomEvent(Cl);
  document.dispatchEvent(e);
}
function ny(e, t, n, { discrete: r }) {
  const i = n.originalEvent.target, o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }), r ? Cm(i, o) : i.dispatchEvent(o);
}
var Ac = 0;
function ry() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ip()), document.body.insertAdjacentElement("beforeend", e[1] ?? ip()), Ac++, () => {
      Ac === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Ac--;
    };
  }, []);
}
function ip() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Oc = "focusScope.autoFocusOnMount", Rc = "focusScope.autoFocusOnUnmount", op = { bubbles: !1, cancelable: !0 }, kA = "FocusScope", yu = x.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: i,
    onUnmountAutoFocus: o,
    ...a
  } = e, [s, c] = x.useState(null), l = rn(i), u = rn(o), d = x.useRef(null), p = wt(t, (g) => c(g)), h = x.useRef({
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
        const A = S.target;
        s.contains(A) ? d.current = A : Hn(d.current, { select: !0 });
      }, b = function(S) {
        if (h.paused || !s) return;
        const A = S.relatedTarget;
        A !== null && (s.contains(A) || Hn(d.current, { select: !0 }));
      }, w = function(S) {
        if (document.activeElement === document.body)
          for (const E of S)
            E.removedNodes.length > 0 && Hn(s);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", b);
      const _ = new MutationObserver(w);
      return s && _.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", b), _.disconnect();
      };
    }
  }, [r, s, h.paused]), x.useEffect(() => {
    if (s) {
      sp.add(h);
      const g = document.activeElement;
      if (!s.contains(g)) {
        const w = new CustomEvent(Oc, op);
        s.addEventListener(Oc, l), s.dispatchEvent(w), w.defaultPrevented || (TA(DA(iy(s)), { select: !0 }), document.activeElement === g && Hn(s));
      }
      return () => {
        s.removeEventListener(Oc, l), setTimeout(() => {
          const w = new CustomEvent(Rc, op);
          s.addEventListener(Rc, u), s.dispatchEvent(w), w.defaultPrevented || Hn(g ?? document.body, { select: !0 }), s.removeEventListener(Rc, u), sp.remove(h);
        }, 0);
      };
    }
  }, [s, l, u, h]);
  const m = x.useCallback(
    (g) => {
      if (!n && !r || h.paused) return;
      const b = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, w = document.activeElement;
      if (b && w) {
        const _ = g.currentTarget, [S, A] = PA(_);
        S && A ? !g.shiftKey && w === A ? (g.preventDefault(), n && Hn(S, { select: !0 })) : g.shiftKey && w === S && (g.preventDefault(), n && Hn(A, { select: !0 })) : w === _ && g.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ v.jsx(pt.div, { tabIndex: -1, ...a, ref: p, onKeyDown: m });
});
yu.displayName = kA;
function TA(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Hn(r, { select: t }), document.activeElement !== n) return;
}
function PA(e) {
  const t = iy(e), n = ap(t, e), r = ap(t.reverse(), e);
  return [n, r];
}
function iy(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const i = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ap(e, t) {
  for (const n of e)
    if (!NA(n, { upTo: t })) return n;
}
function NA(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function MA(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Hn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && MA(e) && t && e.select();
  }
}
var sp = IA();
function IA() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = cp(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = cp(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function cp(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function DA(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ir = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {
}, jA = x.useId || (() => {
}), FA = 0;
function ai(e) {
  const [t, n] = x.useState(jA());
  return Ir(() => {
    n((r) => r ?? String(FA++));
  }, [e]), t ? `radix-${t}` : "";
}
const LA = ["top", "right", "bottom", "left"], mn = Math.min, Lt = Math.max, Ba = Math.round, Jo = Math.floor, or = (e) => ({
  x: e,
  y: e
}), zA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, $A = {
  start: "end",
  end: "start"
};
function Al(e, t, n) {
  return Lt(e, mn(t, n));
}
function Nn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mn(e) {
  return e.split("-")[0];
}
function Ci(e) {
  return e.split("-")[1];
}
function vu(e) {
  return e === "x" ? "y" : "x";
}
function bu(e) {
  return e === "y" ? "height" : "width";
}
function ar(e) {
  return ["top", "bottom"].includes(Mn(e)) ? "y" : "x";
}
function xu(e) {
  return vu(ar(e));
}
function VA(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ci(e), i = xu(e), o = bu(i);
  let a = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (a = Wa(a)), [a, Wa(a)];
}
function UA(e) {
  const t = Wa(e);
  return [Ol(e), t, Ol(t)];
}
function Ol(e) {
  return e.replace(/start|end/g, (t) => $A[t]);
}
function BA(e, t, n) {
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
function WA(e, t, n, r) {
  const i = Ci(e);
  let o = BA(Mn(e), n === "start", r);
  return i && (o = o.map((a) => a + "-" + i), t && (o = o.concat(o.map(Ol)))), o;
}
function Wa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => zA[t]);
}
function HA(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function oy(e) {
  return typeof e != "number" ? HA(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ha(e) {
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
function lp(e, t, n) {
  let {
    reference: r,
    floating: i
  } = e;
  const o = ar(t), a = xu(t), s = bu(a), c = Mn(t), l = o === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, p = r[s] / 2 - i[s] / 2;
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
  switch (Ci(t)) {
    case "start":
      h[a] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      h[a] += p * (n && l ? -1 : 1);
      break;
  }
  return h;
}
const qA = async (e, t, n) => {
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
  } = lp(l, r, c), p = r, h = {}, m = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: b,
      fn: w
    } = s[g], {
      x: _,
      y: S,
      data: A,
      reset: E
    } = await w({
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
    u = _ ?? u, d = S ?? d, h = {
      ...h,
      [b]: {
        ...h[b],
        ...A
      }
    }, E && m <= 50 && (m++, typeof E == "object" && (E.placement && (p = E.placement), E.rects && (l = E.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : E.rects), {
      x: u,
      y: d
    } = lp(l, p, c)), g = -1);
  }
  return {
    x: u,
    y: d,
    placement: p,
    strategy: i,
    middlewareData: h
  };
};
async function _o(e, t) {
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
  } = Nn(t, e), m = oy(h), b = s[p ? d === "floating" ? "reference" : "floating" : d], w = Ha(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(b))) == null || n ? b : b.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), _ = d === "floating" ? {
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
  }, E = Ha(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: _,
    offsetParent: S,
    strategy: c
  }) : _);
  return {
    top: (w.top - E.top + m.top) / A.y,
    bottom: (E.bottom - w.bottom + m.bottom) / A.y,
    left: (w.left - E.left + m.left) / A.x,
    right: (E.right - w.right + m.right) / A.x
  };
}
const YA = (e) => ({
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
    } = Nn(e, t) || {};
    if (l == null)
      return {};
    const d = oy(u), p = {
      x: n,
      y: r
    }, h = xu(i), m = bu(h), g = await a.getDimensions(l), b = h === "y", w = b ? "top" : "left", _ = b ? "bottom" : "right", S = b ? "clientHeight" : "clientWidth", A = o.reference[m] + o.reference[h] - p[h] - o.floating[m], E = p[h] - o.reference[h], N = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
    let P = N ? N[S] : 0;
    (!P || !await (a.isElement == null ? void 0 : a.isElement(N))) && (P = s.floating[S] || o.floating[m]);
    const U = A / 2 - E / 2, ue = P / 2 - g[m] / 2 - 1, ge = mn(d[w], ue), pe = mn(d[_], ue), V = ge, Q = P - g[m] - pe, B = P / 2 - g[m] / 2 + U, se = Al(V, B, Q), j = !c.arrow && Ci(i) != null && B !== se && o.reference[m] / 2 - (B < V ? ge : pe) - g[m] / 2 < 0, fe = j ? B < V ? B - V : B - Q : 0;
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
}), GA = function(e) {
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
        flipAlignment: g = !0,
        ...b
      } = Nn(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const w = Mn(i), _ = ar(s), S = Mn(s) === s, A = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), E = p || (S || !g ? [Wa(s)] : UA(s)), N = m !== "none";
      !p && N && E.push(...WA(s, g, m, A));
      const P = [s, ...E], U = await _o(t, b), ue = [];
      let ge = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (u && ue.push(U[w]), d) {
        const B = VA(i, a, A);
        ue.push(U[B[0]], U[B[1]]);
      }
      if (ge = [...ge, {
        placement: i,
        overflows: ue
      }], !ue.every((B) => B <= 0)) {
        var pe, V;
        const B = (((pe = o.flip) == null ? void 0 : pe.index) || 0) + 1, se = P[B];
        if (se)
          return {
            data: {
              index: B,
              overflows: ge
            },
            reset: {
              placement: se
            }
          };
        let j = (V = ge.filter((fe) => fe.overflows[0] <= 0).sort((fe, _e) => fe.overflows[1] - _e.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!j)
          switch (h) {
            case "bestFit": {
              var Q;
              const fe = (Q = ge.filter((_e) => {
                if (N) {
                  const J = ar(_e.placement);
                  return J === _ || // Create a bias to the `y` side axis due to horizontal
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
function up(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function fp(e) {
  return LA.some((t) => e[t] >= 0);
}
const ZA = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...i
      } = Nn(e, t);
      switch (r) {
        case "referenceHidden": {
          const o = await _o(t, {
            ...i,
            elementContext: "reference"
          }), a = up(o, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: fp(a)
            }
          };
        }
        case "escaped": {
          const o = await _o(t, {
            ...i,
            altBoundary: !0
          }), a = up(o, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: fp(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function KA(e, t) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), a = Mn(n), s = Ci(n), c = ar(n) === "y", l = ["left", "top"].includes(a) ? -1 : 1, u = o && c ? -1 : 1, d = Nn(t, e);
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
const XA = function(e) {
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
      } = t, c = await KA(t, e);
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
}, JA = function(e) {
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
      }, u = await _o(t, c), d = ar(Mn(i)), p = vu(d);
      let h = l[p], m = l[d];
      if (o) {
        const b = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", _ = h + u[b], S = h - u[w];
        h = Al(_, h, S);
      }
      if (a) {
        const b = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", _ = m + u[b], S = m - u[w];
        m = Al(_, m, S);
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
}, QA = function(e) {
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
      } = Nn(e, t), u = {
        x: n,
        y: r
      }, d = ar(i), p = vu(d);
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
        const S = p === "y" ? "height" : "width", A = o.reference[p] - o.floating[S] + b.mainAxis, E = o.reference[p] + o.reference[S] - b.mainAxis;
        h < A ? h = A : h > E && (h = E);
      }
      if (l) {
        var w, _;
        const S = p === "y" ? "width" : "height", A = ["top", "left"].includes(Mn(i)), E = o.reference[d] - o.floating[S] + (A && ((w = a.offset) == null ? void 0 : w[d]) || 0) + (A ? 0 : b.crossAxis), N = o.reference[d] + o.reference[S] + (A ? 0 : ((_ = a.offset) == null ? void 0 : _[d]) || 0) - (A ? b.crossAxis : 0);
        m < E ? m = E : m > N && (m = N);
      }
      return {
        [p]: h,
        [d]: m
      };
    }
  };
}, eO = function(e) {
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
      } = Nn(e, t), c = await _o(t, s), l = Mn(n), u = Ci(n), d = ar(n) === "y", {
        width: p,
        height: h
      } = r.floating;
      let m, g;
      l === "top" || l === "bottom" ? (m = l, g = u === (await (i.isRTL == null ? void 0 : i.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (g = l, m = u === "end" ? "top" : "bottom");
      const b = h - c.top - c.bottom, w = p - c.left - c.right, _ = mn(h - c[m], b), S = mn(p - c[g], w), A = !t.middlewareData.shift;
      let E = _, N = S;
      if (d ? N = u || A ? mn(S, w) : w : E = u || A ? mn(_, b) : b, A && !u) {
        const U = Lt(c.left, 0), ue = Lt(c.right, 0), ge = Lt(c.top, 0), pe = Lt(c.bottom, 0);
        d ? N = p - 2 * (U !== 0 || ue !== 0 ? U + ue : Lt(c.left, c.right)) : E = h - 2 * (ge !== 0 || pe !== 0 ? ge + pe : Lt(c.top, c.bottom));
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
function Ai(e) {
  return ay(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Bt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Dn(e) {
  var t;
  return (t = (ay(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ay(e) {
  return e instanceof Node || e instanceof Bt(e).Node;
}
function on(e) {
  return e instanceof Element || e instanceof Bt(e).Element;
}
function xn(e) {
  return e instanceof HTMLElement || e instanceof Bt(e).HTMLElement;
}
function dp(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Bt(e).ShadowRoot;
}
function jo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = an(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function tO(e) {
  return ["table", "td", "th"].includes(Ai(e));
}
function _s(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function wu(e) {
  const t = _u(), n = on(e) ? an(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function nO(e) {
  let t = sr(e);
  for (; xn(t) && !gi(t); ) {
    if (wu(t))
      return t;
    if (_s(t))
      return null;
    t = sr(t);
  }
  return null;
}
function _u() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function gi(e) {
  return ["html", "body", "#document"].includes(Ai(e));
}
function an(e) {
  return Bt(e).getComputedStyle(e);
}
function Es(e) {
  return on(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function sr(e) {
  if (Ai(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    dp(e) && e.host || // Fallback.
    Dn(e)
  );
  return dp(t) ? t.host : t;
}
function sy(e) {
  const t = sr(e);
  return gi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : xn(t) && jo(t) ? t : sy(t);
}
function Eo(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = sy(e), o = i === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Bt(i);
  return o ? t.concat(a, a.visualViewport || [], jo(i) ? i : [], a.frameElement && n ? Eo(a.frameElement) : []) : t.concat(i, Eo(i, [], n));
}
function cy(e) {
  const t = an(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const i = xn(e), o = i ? e.offsetWidth : n, a = i ? e.offsetHeight : r, s = Ba(n) !== o || Ba(r) !== a;
  return s && (n = o, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Eu(e) {
  return on(e) ? e : e.contextElement;
}
function si(e) {
  const t = Eu(e);
  if (!xn(t))
    return or(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: i,
    $: o
  } = cy(t);
  let a = (o ? Ba(n.width) : n.width) / r, s = (o ? Ba(n.height) : n.height) / i;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const rO = /* @__PURE__ */ or(0);
function ly(e) {
  const t = Bt(e);
  return !_u() || !t.visualViewport ? rO : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function iO(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Bt(e) ? !1 : t;
}
function Dr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), o = Eu(e);
  let a = or(1);
  t && (r ? on(r) && (a = si(r)) : a = si(e));
  const s = iO(o, n, r) ? ly(o) : or(0);
  let c = (i.left + s.x) / a.x, l = (i.top + s.y) / a.y, u = i.width / a.x, d = i.height / a.y;
  if (o) {
    const p = Bt(o), h = r && on(r) ? Bt(r) : r;
    let m = p, g = m.frameElement;
    for (; g && r && h !== m; ) {
      const b = si(g), w = g.getBoundingClientRect(), _ = an(g), S = w.left + (g.clientLeft + parseFloat(_.paddingLeft)) * b.x, A = w.top + (g.clientTop + parseFloat(_.paddingTop)) * b.y;
      c *= b.x, l *= b.y, u *= b.x, d *= b.y, c += S, l += A, m = Bt(g), g = m.frameElement;
    }
  }
  return Ha({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function oO(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: i
  } = e;
  const o = i === "fixed", a = Dn(r), s = t ? _s(t.floating) : !1;
  if (r === a || s && o)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = or(1);
  const u = or(0), d = xn(r);
  if ((d || !d && !o) && ((Ai(r) !== "body" || jo(a)) && (c = Es(r)), xn(r))) {
    const p = Dr(r);
    l = si(r), u.x = p.x + r.clientLeft, u.y = p.y + r.clientTop;
  }
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y
  };
}
function aO(e) {
  return Array.from(e.getClientRects());
}
function uy(e) {
  return Dr(Dn(e)).left + Es(e).scrollLeft;
}
function sO(e) {
  const t = Dn(e), n = Es(e), r = e.ownerDocument.body, i = Lt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = Lt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + uy(e);
  const s = -n.scrollTop;
  return an(r).direction === "rtl" && (a += Lt(t.clientWidth, r.clientWidth) - i), {
    width: i,
    height: o,
    x: a,
    y: s
  };
}
function cO(e, t) {
  const n = Bt(e), r = Dn(e), i = n.visualViewport;
  let o = r.clientWidth, a = r.clientHeight, s = 0, c = 0;
  if (i) {
    o = i.width, a = i.height;
    const l = _u();
    (!l || l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: s,
    y: c
  };
}
function lO(e, t) {
  const n = Dr(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, o = xn(e) ? si(e) : or(1), a = e.clientWidth * o.x, s = e.clientHeight * o.y, c = i * o.x, l = r * o.y;
  return {
    width: a,
    height: s,
    x: c,
    y: l
  };
}
function pp(e, t, n) {
  let r;
  if (t === "viewport")
    r = cO(e, n);
  else if (t === "document")
    r = sO(Dn(e));
  else if (on(t))
    r = lO(t, n);
  else {
    const i = ly(e);
    r = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return Ha(r);
}
function fy(e, t) {
  const n = sr(e);
  return n === t || !on(n) || gi(n) ? !1 : an(n).position === "fixed" || fy(n, t);
}
function uO(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Eo(e, [], !1).filter((s) => on(s) && Ai(s) !== "body"), i = null;
  const o = an(e).position === "fixed";
  let a = o ? sr(e) : e;
  for (; on(a) && !gi(a); ) {
    const s = an(a), c = wu(a);
    !c && s.position === "fixed" && (i = null), (o ? !c && !i : !c && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || jo(a) && !c && fy(e, a)) ? r = r.filter((u) => u !== a) : i = s, a = sr(a);
  }
  return t.set(e, r), r;
}
function fO(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = e;
  const a = [...n === "clippingAncestors" ? _s(t) ? [] : uO(t, this._c) : [].concat(n), r], s = a[0], c = a.reduce((l, u) => {
    const d = pp(t, u, i);
    return l.top = Lt(d.top, l.top), l.right = mn(d.right, l.right), l.bottom = mn(d.bottom, l.bottom), l.left = Lt(d.left, l.left), l;
  }, pp(t, s, i));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function dO(e) {
  const {
    width: t,
    height: n
  } = cy(e);
  return {
    width: t,
    height: n
  };
}
function pO(e, t, n) {
  const r = xn(t), i = Dn(t), o = n === "fixed", a = Dr(e, !0, o, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = or(0);
  if (r || !r && !o)
    if ((Ai(t) !== "body" || jo(i)) && (s = Es(t)), r) {
      const d = Dr(t, !0, o, t);
      c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop;
    } else i && (c.x = uy(i));
  const l = a.left + s.scrollLeft - c.x, u = a.top + s.scrollTop - c.y;
  return {
    x: l,
    y: u,
    width: a.width,
    height: a.height
  };
}
function kc(e) {
  return an(e).position === "static";
}
function hp(e, t) {
  return !xn(e) || an(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function dy(e, t) {
  const n = Bt(e);
  if (_s(e))
    return n;
  if (!xn(e)) {
    let i = sr(e);
    for (; i && !gi(i); ) {
      if (on(i) && !kc(i))
        return i;
      i = sr(i);
    }
    return n;
  }
  let r = hp(e, t);
  for (; r && tO(r) && kc(r); )
    r = hp(r, t);
  return r && gi(r) && kc(r) && !wu(r) ? n : r || nO(e) || n;
}
const hO = async function(e) {
  const t = this.getOffsetParent || dy, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: pO(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function mO(e) {
  return an(e).direction === "rtl";
}
const gO = {
  convertOffsetParentRelativeRectToViewportRelativeRect: oO,
  getDocumentElement: Dn,
  getClippingRect: fO,
  getOffsetParent: dy,
  getElementRects: hO,
  getClientRects: aO,
  getDimensions: dO,
  getScale: si,
  isElement: on,
  isRTL: mO
};
function yO(e, t) {
  let n = null, r;
  const i = Dn(e);
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
    const h = Jo(u), m = Jo(i.clientWidth - (l + d)), g = Jo(i.clientHeight - (u + p)), b = Jo(l), _ = {
      rootMargin: -h + "px " + -m + "px " + -g + "px " + -b + "px",
      threshold: Lt(0, mn(1, c)) || 1
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
        ..._,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(A, _);
    }
    n.observe(e);
  }
  return a(!0), o;
}
function vO(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Eu(e), u = i || o ? [...l ? Eo(l) : [], ...Eo(t)] : [];
  u.forEach((w) => {
    i && w.addEventListener("scroll", n, {
      passive: !0
    }), o && w.addEventListener("resize", n);
  });
  const d = l && s ? yO(l, n) : null;
  let p = -1, h = null;
  a && (h = new ResizeObserver((w) => {
    let [_] = w;
    _ && _.target === l && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var S;
      (S = h) == null || S.observe(t);
    })), n();
  }), l && !c && h.observe(l), h.observe(t));
  let m, g = c ? Dr(e) : null;
  c && b();
  function b() {
    const w = Dr(e);
    g && (w.x !== g.x || w.y !== g.y || w.width !== g.width || w.height !== g.height) && n(), g = w, m = requestAnimationFrame(b);
  }
  return n(), () => {
    var w;
    u.forEach((_) => {
      i && _.removeEventListener("scroll", n), o && _.removeEventListener("resize", n);
    }), d == null || d(), (w = h) == null || w.disconnect(), h = null, c && cancelAnimationFrame(m);
  };
}
const bO = XA, xO = JA, wO = GA, _O = eO, EO = ZA, mp = YA, SO = QA, CO = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: gO,
    ...n
  }, o = {
    ...i.platform,
    _c: r
  };
  return qA(e, t, {
    ...i,
    platform: o
  });
};
var ma = typeof document < "u" ? gb : Kn;
function qa(e, t) {
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
        if (!qa(e[r], t[r]))
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
      if (!(o === "_owner" && e.$$typeof) && !qa(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function py(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function gp(e, t) {
  const n = py(e);
  return Math.round(t * n) / n;
}
function yp(e) {
  const t = x.useRef(e);
  return ma(() => {
    t.current = e;
  }), t;
}
function AO(e) {
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
  } = e, [u, d] = x.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, h] = x.useState(r);
  qa(p, r) || h(r);
  const [m, g] = x.useState(null), [b, w] = x.useState(null), _ = x.useCallback((fe) => {
    fe !== N.current && (N.current = fe, g(fe));
  }, []), S = x.useCallback((fe) => {
    fe !== P.current && (P.current = fe, w(fe));
  }, []), A = o || m, E = a || b, N = x.useRef(null), P = x.useRef(null), U = x.useRef(u), ue = c != null, ge = yp(c), pe = yp(i), V = x.useCallback(() => {
    if (!N.current || !P.current)
      return;
    const fe = {
      placement: t,
      strategy: n,
      middleware: p
    };
    pe.current && (fe.platform = pe.current), CO(N.current, P.current, fe).then((_e) => {
      const J = {
        ..._e,
        isPositioned: !0
      };
      Q.current && !qa(U.current, J) && (U.current = J, Pl.flushSync(() => {
        d(J);
      }));
    });
  }, [p, t, n, pe]);
  ma(() => {
    l === !1 && U.current.isPositioned && (U.current.isPositioned = !1, d((fe) => ({
      ...fe,
      isPositioned: !1
    })));
  }, [l]);
  const Q = x.useRef(!1);
  ma(() => (Q.current = !0, () => {
    Q.current = !1;
  }), []), ma(() => {
    if (A && (N.current = A), E && (P.current = E), A && E) {
      if (ge.current)
        return ge.current(A, E, V);
      V();
    }
  }, [A, E, V, ge, ue]);
  const B = x.useMemo(() => ({
    reference: N,
    floating: P,
    setReference: _,
    setFloating: S
  }), [_, S]), se = x.useMemo(() => ({
    reference: A,
    floating: E
  }), [A, E]), j = x.useMemo(() => {
    const fe = {
      position: n,
      left: 0,
      top: 0
    };
    if (!se.floating)
      return fe;
    const _e = gp(se.floating, u.x), J = gp(se.floating, u.y);
    return s ? {
      ...fe,
      transform: "translate(" + _e + "px, " + J + "px)",
      ...py(se.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: _e,
      top: J
    };
  }, [n, s, se.floating, u.x, u.y]);
  return x.useMemo(() => ({
    ...u,
    update: V,
    refs: B,
    elements: se,
    floatingStyles: j
  }), [u, V, B, se, j]);
}
const OO = (e) => {
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
      return r && t(r) ? r.current != null ? mp({
        element: r.current,
        padding: i
      }).fn(n) : {} : r ? mp({
        element: r,
        padding: i
      }).fn(n) : {};
    }
  };
}, RO = (e, t) => ({
  ...bO(e),
  options: [e, t]
}), kO = (e, t) => ({
  ...xO(e),
  options: [e, t]
}), TO = (e, t) => ({
  ...SO(e),
  options: [e, t]
}), PO = (e, t) => ({
  ...wO(e),
  options: [e, t]
}), NO = (e, t) => ({
  ..._O(e),
  options: [e, t]
}), MO = (e, t) => ({
  ...EO(e),
  options: [e, t]
}), IO = (e, t) => ({
  ...OO(e),
  options: [e, t]
});
var DO = "Arrow", hy = x.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: i = 5, ...o } = e;
  return /* @__PURE__ */ v.jsx(
    pt.svg,
    {
      ...o,
      ref: t,
      width: r,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ v.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
hy.displayName = DO;
var jO = hy;
function FO(e) {
  const [t, n] = x.useState(void 0);
  return Ir(() => {
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
var Su = "Popper", [my, gy] = Si(Su), [LO, yy] = my(Su), vy = (e) => {
  const { __scopePopper: t, children: n } = e, [r, i] = x.useState(null);
  return /* @__PURE__ */ v.jsx(LO, { scope: t, anchor: r, onAnchorChange: i, children: n });
};
vy.displayName = Su;
var by = "PopperAnchor", xy = x.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...i } = e, o = yy(by, n), a = x.useRef(null), s = wt(t, a);
    return x.useEffect(() => {
      o.onAnchorChange((r == null ? void 0 : r.current) || a.current);
    }), r ? null : /* @__PURE__ */ v.jsx(pt.div, { ...i, ref: s });
  }
);
xy.displayName = by;
var Cu = "PopperContent", [zO, $O] = my(Cu), wy = x.forwardRef(
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
      ...g
    } = e, b = yy(Cu, n), [w, _] = x.useState(null), S = wt(t, (Oe) => _(Oe)), [A, E] = x.useState(null), N = FO(A), P = (N == null ? void 0 : N.width) ?? 0, U = (N == null ? void 0 : N.height) ?? 0, ue = r + (o !== "center" ? "-" + o : ""), ge = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, pe = Array.isArray(l) ? l : [l], V = pe.length > 0, Q = {
      padding: ge,
      boundary: pe.filter(UO),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: B, floatingStyles: se, placement: j, isPositioned: fe, middlewareData: _e } = AO({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: ue,
      whileElementsMounted: (...Oe) => vO(...Oe, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        RO({ mainAxis: i + U, alignmentAxis: a }),
        c && kO({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? TO() : void 0,
          ...Q
        }),
        c && PO({ ...Q }),
        NO({
          ...Q,
          apply: ({ elements: Oe, rects: He, availableWidth: ct, availableHeight: et }) => {
            const { width: Ve, height: C } = He.reference, T = Oe.floating.style;
            T.setProperty("--radix-popper-available-width", `${ct}px`), T.setProperty("--radix-popper-available-height", `${et}px`), T.setProperty("--radix-popper-anchor-width", `${Ve}px`), T.setProperty("--radix-popper-anchor-height", `${C}px`);
          }
        }),
        A && IO({ element: A, padding: s }),
        BO({ arrowWidth: P, arrowHeight: U }),
        p && MO({ strategy: "referenceHidden", ...Q })
      ]
    }), [J, L] = Sy(j), q = rn(m);
    Ir(() => {
      fe && (q == null || q());
    }, [fe, q]);
    const ye = (G = _e.arrow) == null ? void 0 : G.x, I = (ie = _e.arrow) == null ? void 0 : ie.y, X = ((le = _e.arrow) == null ? void 0 : le.centerOffset) !== 0, [re, Y] = x.useState();
    return Ir(() => {
      w && Y(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ v.jsx(
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
        children: /* @__PURE__ */ v.jsx(
          zO,
          {
            scope: n,
            placedSide: J,
            onArrowChange: E,
            arrowX: ye,
            arrowY: I,
            shouldHideArrow: X,
            children: /* @__PURE__ */ v.jsx(
              pt.div,
              {
                "data-side": J,
                "data-align": L,
                ...g,
                ref: S,
                style: {
                  ...g.style,
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
wy.displayName = Cu;
var _y = "PopperArrow", VO = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ey = x.forwardRef(function(t, n) {
  const { __scopePopper: r, ...i } = t, o = $O(_y, r), a = VO[o.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ v.jsx(
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
        children: /* @__PURE__ */ v.jsx(
          jO,
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
Ey.displayName = _y;
function UO(e) {
  return e !== null;
}
var BO = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, w, _;
    const { placement: n, rects: r, middlewareData: i } = t, a = ((b = i.arrow) == null ? void 0 : b.centerOffset) !== 0, s = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [l, u] = Sy(n), d = { start: "0%", center: "50%", end: "100%" }[u], p = (((w = i.arrow) == null ? void 0 : w.x) ?? 0) + s / 2, h = (((_ = i.arrow) == null ? void 0 : _.y) ?? 0) + c / 2;
    let m = "", g = "";
    return l === "bottom" ? (m = a ? d : `${p}px`, g = `${-c}px`) : l === "top" ? (m = a ? d : `${p}px`, g = `${r.floating.height + c}px`) : l === "right" ? (m = `${-c}px`, g = a ? d : `${h}px`) : l === "left" && (m = `${r.floating.width + c}px`, g = a ? d : `${h}px`), { data: { x: m, y: g } };
  }
});
function Sy(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var WO = vy, HO = xy, qO = wy, YO = Ey, GO = "Portal", Au = x.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [i, o] = x.useState(!1);
  Ir(() => o(!0), []);
  const a = n || i && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return a ? xb.createPortal(/* @__PURE__ */ v.jsx(pt.div, { ...r, ref: t }), a) : null;
});
Au.displayName = GO;
function ZO(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var cr = (e) => {
  const { present: t, children: n } = e, r = KO(t), i = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n), o = wt(r.ref, XO(i));
  return typeof n == "function" || r.isPresent ? x.cloneElement(i, { ref: o }) : null;
};
cr.displayName = "Presence";
function KO(e) {
  const [t, n] = x.useState(), r = x.useRef({}), i = x.useRef(e), o = x.useRef("none"), a = e ? "mounted" : "unmounted", [s, c] = ZO(a, {
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
    const l = Qo(r.current);
    o.current = s === "mounted" ? l : "none";
  }, [s]), Ir(() => {
    const l = r.current, u = i.current;
    if (u !== e) {
      const p = o.current, h = Qo(l);
      e ? c("MOUNT") : h === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, c]), Ir(() => {
    if (t) {
      const l = (d) => {
        const h = Qo(r.current).includes(d.animationName);
        d.target === t && h && Pl.flushSync(() => c("ANIMATION_END"));
      }, u = (d) => {
        d.target === t && (o.current = Qo(r.current));
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
function Qo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function XO(e) {
  var r, i;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Tc = "rovingFocusGroup.onEntryFocus", JO = { bubbles: !1, cancelable: !0 }, Ss = "RovingFocusGroup", [Rl, Cy, QO] = Qg(Ss), [eR, Ay] = Si(
  Ss,
  [QO]
), [tR, nR] = eR(Ss), Oy = x.forwardRef(
  (e, t) => /* @__PURE__ */ v.jsx(Rl.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ v.jsx(Rl.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ v.jsx(rR, { ...e, ref: t }) }) })
);
Oy.displayName = Ss;
var rR = x.forwardRef((e, t) => {
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
  } = e, p = x.useRef(null), h = wt(t, p), m = ey(o), [g = null, b] = mu({
    prop: a,
    defaultProp: s,
    onChange: c
  }), [w, _] = x.useState(!1), S = rn(l), A = Cy(n), E = x.useRef(!1), [N, P] = x.useState(0);
  return x.useEffect(() => {
    const U = p.current;
    if (U)
      return U.addEventListener(Tc, S), () => U.removeEventListener(Tc, S);
  }, [S]), /* @__PURE__ */ v.jsx(
    tR,
    {
      scope: n,
      orientation: r,
      dir: m,
      loop: i,
      currentTabStopId: g,
      onItemFocus: x.useCallback(
        (U) => b(U),
        [b]
      ),
      onItemShiftTab: x.useCallback(() => _(!0), []),
      onFocusableItemAdd: x.useCallback(
        () => P((U) => U + 1),
        []
      ),
      onFocusableItemRemove: x.useCallback(
        () => P((U) => U - 1),
        []
      ),
      children: /* @__PURE__ */ v.jsx(
        pt.div,
        {
          tabIndex: w || N === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: Ue(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: Ue(e.onFocus, (U) => {
            const ue = !E.current;
            if (U.target === U.currentTarget && ue && !w) {
              const ge = new CustomEvent(Tc, JO);
              if (U.currentTarget.dispatchEvent(ge), !ge.defaultPrevented) {
                const pe = A().filter((j) => j.focusable), V = pe.find((j) => j.active), Q = pe.find((j) => j.id === g), se = [V, Q, ...pe].filter(
                  Boolean
                ).map((j) => j.ref.current);
                Ty(se, u);
              }
            }
            E.current = !1;
          }),
          onBlur: Ue(e.onBlur, () => _(!1))
        }
      )
    }
  );
}), Ry = "RovingFocusGroupItem", ky = x.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: i = !1,
      tabStopId: o,
      ...a
    } = e, s = ai(), c = o || s, l = nR(Ry, n), u = l.currentTabStopId === c, d = Cy(n), { onFocusableItemAdd: p, onFocusableItemRemove: h } = l;
    return x.useEffect(() => {
      if (r)
        return p(), () => h();
    }, [r, p, h]), /* @__PURE__ */ v.jsx(
      Rl.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: i,
        children: /* @__PURE__ */ v.jsx(
          pt.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": l.orientation,
            ...a,
            ref: t,
            onMouseDown: Ue(e.onMouseDown, (m) => {
              r ? l.onItemFocus(c) : m.preventDefault();
            }),
            onFocus: Ue(e.onFocus, () => l.onItemFocus(c)),
            onKeyDown: Ue(e.onKeyDown, (m) => {
              if (m.key === "Tab" && m.shiftKey) {
                l.onItemShiftTab();
                return;
              }
              if (m.target !== m.currentTarget) return;
              const g = aR(m, l.orientation, l.dir);
              if (g !== void 0) {
                if (m.metaKey || m.ctrlKey || m.altKey || m.shiftKey) return;
                m.preventDefault();
                let w = d().filter((_) => _.focusable).map((_) => _.ref.current);
                if (g === "last") w.reverse();
                else if (g === "prev" || g === "next") {
                  g === "prev" && w.reverse();
                  const _ = w.indexOf(m.currentTarget);
                  w = l.loop ? sR(w, _ + 1) : w.slice(_ + 1);
                }
                setTimeout(() => Ty(w));
              }
            })
          }
        )
      }
    );
  }
);
ky.displayName = Ry;
var iR = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function oR(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function aR(e, t, n) {
  const r = oR(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return iR[r];
}
function Ty(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function sR(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var cR = Oy, lR = ky, uR = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Wr = /* @__PURE__ */ new WeakMap(), ea = /* @__PURE__ */ new WeakMap(), ta = {}, Pc = 0, Py = function(e) {
  return e && (e.host || Py(e.parentNode));
}, fR = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Py(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, dR = function(e, t, n, r) {
  var i = fR(t, Array.isArray(e) ? e : [e]);
  ta[n] || (ta[n] = /* @__PURE__ */ new WeakMap());
  var o = ta[n], a = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(d) {
    !d || s.has(d) || (s.add(d), l(d.parentNode));
  };
  i.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (s.has(p))
        u(p);
      else
        try {
          var h = p.getAttribute(r), m = h !== null && h !== "false", g = (Wr.get(p) || 0) + 1, b = (o.get(p) || 0) + 1;
          Wr.set(p, g), o.set(p, b), a.push(p), g === 1 && m && ea.set(p, !0), b === 1 && p.setAttribute(n, "true"), m || p.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", p, w);
        }
    });
  };
  return u(t), s.clear(), Pc++, function() {
    a.forEach(function(d) {
      var p = Wr.get(d) - 1, h = o.get(d) - 1;
      Wr.set(d, p), o.set(d, h), p || (ea.has(d) || d.removeAttribute(r), ea.delete(d)), h || d.removeAttribute(n);
    }), Pc--, Pc || (Wr = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), ea = /* @__PURE__ */ new WeakMap(), ta = {});
  };
}, Ny = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), i = uR(e);
  return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live]"))), dR(r, i, n, "aria-hidden")) : function() {
    return null;
  };
}, fn = function() {
  return fn = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, fn.apply(this, arguments);
};
function My(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function pR(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, o; r < i; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var ga = "right-scroll-bar-position", ya = "width-before-scroll-bar", hR = "with-scroll-bars-hidden", mR = "--removed-body-scroll-bar-size";
function Nc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function gR(e, t) {
  var n = ti(function() {
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
var yR = typeof window < "u" ? x.useLayoutEffect : x.useEffect, vp = /* @__PURE__ */ new WeakMap();
function vR(e, t) {
  var n = gR(null, function(r) {
    return e.forEach(function(i) {
      return Nc(i, r);
    });
  });
  return yR(function() {
    var r = vp.get(n);
    if (r) {
      var i = new Set(r), o = new Set(e), a = n.current;
      i.forEach(function(s) {
        o.has(s) || Nc(s, null);
      }), o.forEach(function(s) {
        i.has(s) || Nc(s, a);
      });
    }
    vp.set(n, e);
  }, [e]), n;
}
function bR(e) {
  return e;
}
function xR(e, t) {
  t === void 0 && (t = bR);
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
function wR(e) {
  e === void 0 && (e = {});
  var t = xR(null);
  return t.options = fn({ async: !0, ssr: !1 }, e), t;
}
var Iy = function(e) {
  var t = e.sideCar, n = My(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return x.createElement(r, fn({}, n));
};
Iy.isSideCarExport = !0;
function _R(e, t) {
  return e.useMedium(t), Iy;
}
var Dy = wR(), Mc = function() {
}, Cs = x.forwardRef(function(e, t) {
  var n = x.useRef(null), r = x.useState({
    onScrollCapture: Mc,
    onWheelCapture: Mc,
    onTouchMoveCapture: Mc
  }), i = r[0], o = r[1], a = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, h = e.noIsolation, m = e.inert, g = e.allowPinchZoom, b = e.as, w = b === void 0 ? "div" : b, _ = e.gapMode, S = My(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), A = p, E = vR([n, t]), N = fn(fn({}, S), i);
  return x.createElement(
    x.Fragment,
    null,
    u && x.createElement(A, { sideCar: Dy, removeScrollBar: l, shards: d, noIsolation: h, inert: m, setCallbacks: o, allowPinchZoom: !!g, lockRef: n, gapMode: _ }),
    a ? x.cloneElement(x.Children.only(s), fn(fn({}, N), { ref: E })) : x.createElement(w, fn({}, N, { className: c, ref: E }), s)
  );
});
Cs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Cs.classNames = {
  fullWidth: ya,
  zeroRight: ga
};
var ER = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function SR() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ER();
  return t && e.setAttribute("nonce", t), e;
}
function CR(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function AR(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var OR = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = SR()) && (CR(t, n), AR(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, RR = function() {
  var e = OR();
  return function(t, n) {
    x.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, jy = function() {
  var e = RR(), t = function(n) {
    var r = n.styles, i = n.dynamic;
    return e(r, i), null;
  };
  return t;
}, kR = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ic = function(e) {
  return parseInt(e || "", 10) || 0;
}, TR = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ic(n), Ic(r), Ic(i)];
}, PR = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return kR;
  var t = TR(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, NR = jy(), ci = "data-scroll-locked", MR = function(e, t, n, r) {
  var i = e.left, o = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(hR, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(ci, `] {
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
  
  .`).concat(ga, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(ya, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(ga, " .").concat(ga, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ya, " .").concat(ya, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ci, `] {
    `).concat(mR, ": ").concat(s, `px;
  }
`);
}, bp = function() {
  var e = parseInt(document.body.getAttribute(ci) || "0", 10);
  return isFinite(e) ? e : 0;
}, IR = function() {
  x.useEffect(function() {
    return document.body.setAttribute(ci, (bp() + 1).toString()), function() {
      var e = bp() - 1;
      e <= 0 ? document.body.removeAttribute(ci) : document.body.setAttribute(ci, e.toString());
    };
  }, []);
}, DR = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
  IR();
  var o = x.useMemo(function() {
    return PR(i);
  }, [i]);
  return x.createElement(NR, { styles: MR(o, !t, i, n ? "" : "!important") });
}, kl = !1;
if (typeof window < "u")
  try {
    var na = Object.defineProperty({}, "passive", {
      get: function() {
        return kl = !0, !0;
      }
    });
    window.addEventListener("test", na, na), window.removeEventListener("test", na, na);
  } catch {
    kl = !1;
  }
var Hr = kl ? { passive: !1 } : !1, jR = function(e) {
  return e.tagName === "TEXTAREA";
}, Fy = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !jR(e) && n[t] === "visible")
  );
}, FR = function(e) {
  return Fy(e, "overflowY");
}, LR = function(e) {
  return Fy(e, "overflowX");
}, xp = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var i = Ly(e, r);
    if (i) {
      var o = zy(e, r), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, zR = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, $R = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ly = function(e, t) {
  return e === "v" ? FR(t) : LR(t);
}, zy = function(e, t) {
  return e === "v" ? zR(t) : $R(t);
}, VR = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, UR = function(e, t, n, r, i) {
  var o = VR(e, window.getComputedStyle(t).direction), a = o * r, s = n.target, c = t.contains(s), l = !1, u = a > 0, d = 0, p = 0;
  do {
    var h = zy(e, s), m = h[0], g = h[1], b = h[2], w = g - b - o * m;
    (m || w) && Ly(e, s) && (d += w, p += m), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (u && (Math.abs(d) < 1 || !i) || !u && (Math.abs(p) < 1 || !i)) && (l = !0), l;
}, ra = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, wp = function(e) {
  return [e.deltaX, e.deltaY];
}, _p = function(e) {
  return e && "current" in e ? e.current : e;
}, BR = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, WR = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, HR = 0, qr = [];
function qR(e) {
  var t = x.useRef([]), n = x.useRef([0, 0]), r = x.useRef(), i = x.useState(HR++)[0], o = x.useState(jy)[0], a = x.useRef(e);
  x.useEffect(function() {
    a.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var g = pR([e.lockRef.current], (e.shards || []).map(_p), !0).filter(Boolean);
      return g.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), g.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = x.useCallback(function(g, b) {
    if ("touches" in g && g.touches.length === 2)
      return !a.current.allowPinchZoom;
    var w = ra(g), _ = n.current, S = "deltaX" in g ? g.deltaX : _[0] - w[0], A = "deltaY" in g ? g.deltaY : _[1] - w[1], E, N = g.target, P = Math.abs(S) > Math.abs(A) ? "h" : "v";
    if ("touches" in g && P === "h" && N.type === "range")
      return !1;
    var U = xp(P, N);
    if (!U)
      return !0;
    if (U ? E = P : (E = P === "v" ? "h" : "v", U = xp(P, N)), !U)
      return !1;
    if (!r.current && "changedTouches" in g && (S || A) && (r.current = E), !E)
      return !0;
    var ue = r.current || E;
    return UR(ue, b, g, ue === "h" ? S : A, !0);
  }, []), c = x.useCallback(function(g) {
    var b = g;
    if (!(!qr.length || qr[qr.length - 1] !== o)) {
      var w = "deltaY" in b ? wp(b) : ra(b), _ = t.current.filter(function(E) {
        return E.name === b.type && (E.target === b.target || b.target === E.shadowParent) && BR(E.delta, w);
      })[0];
      if (_ && _.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!_) {
        var S = (a.current.shards || []).map(_p).filter(Boolean).filter(function(E) {
          return E.contains(b.target);
        }), A = S.length > 0 ? s(b, S[0]) : !a.current.noIsolation;
        A && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = x.useCallback(function(g, b, w, _) {
    var S = { name: g, delta: b, target: w, should: _, shadowParent: YR(w) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(A) {
        return A !== S;
      });
    }, 1);
  }, []), u = x.useCallback(function(g) {
    n.current = ra(g), r.current = void 0;
  }, []), d = x.useCallback(function(g) {
    l(g.type, wp(g), g.target, s(g, e.lockRef.current));
  }, []), p = x.useCallback(function(g) {
    l(g.type, ra(g), g.target, s(g, e.lockRef.current));
  }, []);
  x.useEffect(function() {
    return qr.push(o), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, Hr), document.addEventListener("touchmove", c, Hr), document.addEventListener("touchstart", u, Hr), function() {
      qr = qr.filter(function(g) {
        return g !== o;
      }), document.removeEventListener("wheel", c, Hr), document.removeEventListener("touchmove", c, Hr), document.removeEventListener("touchstart", u, Hr);
    };
  }, []);
  var h = e.removeScrollBar, m = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    m ? x.createElement(o, { styles: WR(i) }) : null,
    h ? x.createElement(DR, { gapMode: e.gapMode }) : null
  );
}
function YR(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const GR = _R(Dy, qR);
var Ou = x.forwardRef(function(e, t) {
  return x.createElement(Cs, fn({}, e, { ref: t, sideCar: GR }));
});
Ou.classNames = Cs.classNames;
var Tl = ["Enter", " "], ZR = ["ArrowDown", "PageUp", "Home"], $y = ["ArrowUp", "PageDown", "End"], KR = [...ZR, ...$y], XR = {
  ltr: [...Tl, "ArrowRight"],
  rtl: [...Tl, "ArrowLeft"]
}, JR = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Fo = "Menu", [So, QR, ek] = Qg(Fo), [Fr, Vy] = Si(Fo, [
  ek,
  gy,
  Ay
]), As = gy(), Uy = Ay(), [tk, Lr] = Fr(Fo), [nk, Lo] = Fr(Fo), By = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: i, onOpenChange: o, modal: a = !0 } = e, s = As(t), [c, l] = x.useState(null), u = x.useRef(!1), d = rn(o), p = ey(i);
  return x.useEffect(() => {
    const h = () => {
      u.current = !0, document.addEventListener("pointerdown", m, { capture: !0, once: !0 }), document.addEventListener("pointermove", m, { capture: !0, once: !0 });
    }, m = () => u.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", m, { capture: !0 }), document.removeEventListener("pointermove", m, { capture: !0 });
    };
  }, []), /* @__PURE__ */ v.jsx(WO, { ...s, children: /* @__PURE__ */ v.jsx(
    tk,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ v.jsx(
        nk,
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
By.displayName = Fo;
var rk = "MenuAnchor", Ru = x.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, i = As(n);
    return /* @__PURE__ */ v.jsx(HO, { ...i, ...r, ref: t });
  }
);
Ru.displayName = rk;
var ku = "MenuPortal", [ik, Wy] = Fr(ku, {
  forceMount: void 0
}), Hy = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: i } = e, o = Lr(ku, t);
  return /* @__PURE__ */ v.jsx(ik, { scope: t, forceMount: n, children: /* @__PURE__ */ v.jsx(cr, { present: n || o.open, children: /* @__PURE__ */ v.jsx(Au, { asChild: !0, container: i, children: r }) }) });
};
Hy.displayName = ku;
var Zt = "MenuContent", [ok, Tu] = Fr(Zt), qy = x.forwardRef(
  (e, t) => {
    const n = Wy(Zt, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, o = Lr(Zt, e.__scopeMenu), a = Lo(Zt, e.__scopeMenu);
    return /* @__PURE__ */ v.jsx(So.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ v.jsx(cr, { present: r || o.open, children: /* @__PURE__ */ v.jsx(So.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ v.jsx(ak, { ...i, ref: t }) : /* @__PURE__ */ v.jsx(sk, { ...i, ref: t }) }) }) });
  }
), ak = x.forwardRef(
  (e, t) => {
    const n = Lr(Zt, e.__scopeMenu), r = x.useRef(null), i = wt(t, r);
    return x.useEffect(() => {
      const o = r.current;
      if (o) return Ny(o);
    }, []), /* @__PURE__ */ v.jsx(
      Pu,
      {
        ...e,
        ref: i,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: Ue(
          e.onFocusOutside,
          (o) => o.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), sk = x.forwardRef((e, t) => {
  const n = Lr(Zt, e.__scopeMenu);
  return /* @__PURE__ */ v.jsx(
    Pu,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Pu = x.forwardRef(
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
      ...g
    } = e, b = Lr(Zt, n), w = Lo(Zt, n), _ = As(n), S = Uy(n), A = QR(n), [E, N] = x.useState(null), P = x.useRef(null), U = wt(t, P, b.onContentChange), ue = x.useRef(0), ge = x.useRef(""), pe = x.useRef(0), V = x.useRef(null), Q = x.useRef("right"), B = x.useRef(0), se = m ? Ou : x.Fragment, j = m ? { as: Rn, allowPinchZoom: !0 } : void 0, fe = (J) => {
      var G, ie;
      const L = ge.current + J, q = A().filter((le) => !le.disabled), ye = document.activeElement, I = (G = q.find((le) => le.ref.current === ye)) == null ? void 0 : G.textValue, X = q.map((le) => le.textValue), re = bk(X, L, I), Y = (ie = q.find((le) => le.textValue === re)) == null ? void 0 : ie.ref.current;
      (function le(ve) {
        ge.current = ve, window.clearTimeout(ue.current), ve !== "" && (ue.current = window.setTimeout(() => le(""), 1e3));
      })(L), Y && setTimeout(() => Y.focus());
    };
    x.useEffect(() => () => window.clearTimeout(ue.current), []), ry();
    const _e = x.useCallback((J) => {
      var q, ye;
      return Q.current === ((q = V.current) == null ? void 0 : q.side) && wk(J, (ye = V.current) == null ? void 0 : ye.area);
    }, []);
    return /* @__PURE__ */ v.jsx(
      ok,
      {
        scope: n,
        searchRef: ge,
        onItemEnter: x.useCallback(
          (J) => {
            _e(J) && J.preventDefault();
          },
          [_e]
        ),
        onItemLeave: x.useCallback(
          (J) => {
            var L;
            _e(J) || ((L = P.current) == null || L.focus(), N(null));
          },
          [_e]
        ),
        onTriggerLeave: x.useCallback(
          (J) => {
            _e(J) && J.preventDefault();
          },
          [_e]
        ),
        pointerGraceTimerRef: pe,
        onPointerGraceIntentChange: x.useCallback((J) => {
          V.current = J;
        }, []),
        children: /* @__PURE__ */ v.jsx(se, { ...j, children: /* @__PURE__ */ v.jsx(
          yu,
          {
            asChild: !0,
            trapped: i,
            onMountAutoFocus: Ue(o, (J) => {
              var L;
              J.preventDefault(), (L = P.current) == null || L.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ v.jsx(
              gu,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: l,
                onPointerDownOutside: u,
                onFocusOutside: d,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ v.jsx(
                  cR,
                  {
                    asChild: !0,
                    ...S,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: N,
                    onEntryFocus: Ue(c, (J) => {
                      w.isUsingKeyboardRef.current || J.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ v.jsx(
                      qO,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": cv(b.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ..._,
                        ...g,
                        ref: U,
                        style: { outline: "none", ...g.style },
                        onKeyDown: Ue(g.onKeyDown, (J) => {
                          const q = J.target.closest("[data-radix-menu-content]") === J.currentTarget, ye = J.ctrlKey || J.altKey || J.metaKey, I = J.key.length === 1;
                          q && (J.key === "Tab" && J.preventDefault(), !ye && I && fe(J.key));
                          const X = P.current;
                          if (J.target !== X || !KR.includes(J.key)) return;
                          J.preventDefault();
                          const Y = A().filter((G) => !G.disabled).map((G) => G.ref.current);
                          $y.includes(J.key) && Y.reverse(), yk(Y);
                        }),
                        onBlur: Ue(e.onBlur, (J) => {
                          J.currentTarget.contains(J.target) || (window.clearTimeout(ue.current), ge.current = "");
                        }),
                        onPointerMove: Ue(
                          e.onPointerMove,
                          Co((J) => {
                            const L = J.target, q = B.current !== J.clientX;
                            if (J.currentTarget.contains(L) && q) {
                              const ye = J.clientX > B.current ? "right" : "left";
                              Q.current = ye, B.current = J.clientX;
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
qy.displayName = Zt;
var ck = "MenuGroup", Nu = x.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ v.jsx(pt.div, { role: "group", ...r, ref: t });
  }
);
Nu.displayName = ck;
var lk = "MenuLabel", Yy = x.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ v.jsx(pt.div, { ...r, ref: t });
  }
);
Yy.displayName = lk;
var Ya = "MenuItem", Ep = "menu.itemSelect", Os = x.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...i } = e, o = x.useRef(null), a = Lo(Ya, e.__scopeMenu), s = Tu(Ya, e.__scopeMenu), c = wt(t, o), l = x.useRef(!1), u = () => {
      const d = o.current;
      if (!n && d) {
        const p = new CustomEvent(Ep, { bubbles: !0, cancelable: !0 });
        d.addEventListener(Ep, (h) => r == null ? void 0 : r(h), { once: !0 }), Cm(d, p), p.defaultPrevented ? l.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ v.jsx(
      Gy,
      {
        ...i,
        ref: c,
        disabled: n,
        onClick: Ue(e.onClick, u),
        onPointerDown: (d) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, d), l.current = !0;
        },
        onPointerUp: Ue(e.onPointerUp, (d) => {
          var p;
          l.current || (p = d.currentTarget) == null || p.click();
        }),
        onKeyDown: Ue(e.onKeyDown, (d) => {
          const p = s.searchRef.current !== "";
          n || p && d.key === " " || Tl.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
Os.displayName = Ya;
var Gy = x.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: i, ...o } = e, a = Tu(Ya, n), s = Uy(n), c = x.useRef(null), l = wt(t, c), [u, d] = x.useState(!1), [p, h] = x.useState("");
    return x.useEffect(() => {
      const m = c.current;
      m && h((m.textContent ?? "").trim());
    }, [o.children]), /* @__PURE__ */ v.jsx(
      So.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: i ?? p,
        children: /* @__PURE__ */ v.jsx(lR, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ v.jsx(
          pt.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...o,
            ref: l,
            onPointerMove: Ue(
              e.onPointerMove,
              Co((m) => {
                r ? a.onItemLeave(m) : (a.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: Ue(
              e.onPointerLeave,
              Co((m) => a.onItemLeave(m))
            ),
            onFocus: Ue(e.onFocus, () => d(!0)),
            onBlur: Ue(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), uk = "MenuCheckboxItem", Zy = x.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...i } = e;
    return /* @__PURE__ */ v.jsx(ev, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ v.jsx(
      Os,
      {
        role: "menuitemcheckbox",
        "aria-checked": Ga(n) ? "mixed" : n,
        ...i,
        ref: t,
        "data-state": Iu(n),
        onSelect: Ue(
          i.onSelect,
          () => r == null ? void 0 : r(Ga(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Zy.displayName = uk;
var Ky = "MenuRadioGroup", [fk, dk] = Fr(
  Ky,
  { value: void 0, onValueChange: () => {
  } }
), Xy = x.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...i } = e, o = rn(r);
    return /* @__PURE__ */ v.jsx(fk, { scope: e.__scopeMenu, value: n, onValueChange: o, children: /* @__PURE__ */ v.jsx(Nu, { ...i, ref: t }) });
  }
);
Xy.displayName = Ky;
var Jy = "MenuRadioItem", Qy = x.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, i = dk(Jy, e.__scopeMenu), o = n === i.value;
    return /* @__PURE__ */ v.jsx(ev, { scope: e.__scopeMenu, checked: o, children: /* @__PURE__ */ v.jsx(
      Os,
      {
        role: "menuitemradio",
        "aria-checked": o,
        ...r,
        ref: t,
        "data-state": Iu(o),
        onSelect: Ue(
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
Qy.displayName = Jy;
var Mu = "MenuItemIndicator", [ev, pk] = Fr(
  Mu,
  { checked: !1 }
), tv = x.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...i } = e, o = pk(Mu, n);
    return /* @__PURE__ */ v.jsx(
      cr,
      {
        present: r || Ga(o.checked) || o.checked === !0,
        children: /* @__PURE__ */ v.jsx(
          pt.span,
          {
            ...i,
            ref: t,
            "data-state": Iu(o.checked)
          }
        )
      }
    );
  }
);
tv.displayName = Mu;
var hk = "MenuSeparator", nv = x.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ v.jsx(
      pt.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
nv.displayName = hk;
var mk = "MenuArrow", rv = x.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, i = As(n);
    return /* @__PURE__ */ v.jsx(YO, { ...i, ...r, ref: t });
  }
);
rv.displayName = mk;
var gk = "MenuSub", [DT, iv] = Fr(gk), Hi = "MenuSubTrigger", ov = x.forwardRef(
  (e, t) => {
    const n = Lr(Hi, e.__scopeMenu), r = Lo(Hi, e.__scopeMenu), i = iv(Hi, e.__scopeMenu), o = Tu(Hi, e.__scopeMenu), a = x.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = o, l = { __scopeMenu: e.__scopeMenu }, u = x.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return x.useEffect(() => u, [u]), x.useEffect(() => {
      const d = s.current;
      return () => {
        window.clearTimeout(d), c(null);
      };
    }, [s, c]), /* @__PURE__ */ v.jsx(Ru, { asChild: !0, ...l, children: /* @__PURE__ */ v.jsx(
      Gy,
      {
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": i.contentId,
        "data-state": cv(n.open),
        ...e,
        ref: ps(t, i.onTriggerChange),
        onClick: (d) => {
          var p;
          (p = e.onClick) == null || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: Ue(
          e.onPointerMove,
          Co((d) => {
            o.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !a.current && (o.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: Ue(
          e.onPointerLeave,
          Co((d) => {
            var h, m;
            u();
            const p = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (p) {
              const g = (m = n.content) == null ? void 0 : m.dataset.side, b = g === "right", w = b ? -5 : 5, _ = p[b ? "left" : "right"], S = p[b ? "right" : "left"];
              o.onPointerGraceIntentChange({
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
                () => o.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (o.onTriggerLeave(d), d.defaultPrevented) return;
              o.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: Ue(e.onKeyDown, (d) => {
          var h;
          const p = o.searchRef.current !== "";
          e.disabled || p && d.key === " " || XR[r.dir].includes(d.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
ov.displayName = Hi;
var av = "MenuSubContent", sv = x.forwardRef(
  (e, t) => {
    const n = Wy(Zt, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, o = Lr(Zt, e.__scopeMenu), a = Lo(Zt, e.__scopeMenu), s = iv(av, e.__scopeMenu), c = x.useRef(null), l = wt(t, c);
    return /* @__PURE__ */ v.jsx(So.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ v.jsx(cr, { present: r || o.open, children: /* @__PURE__ */ v.jsx(So.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ v.jsx(
      Pu,
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
        onFocusOutside: Ue(e.onFocusOutside, (u) => {
          u.target !== s.trigger && o.onOpenChange(!1);
        }),
        onEscapeKeyDown: Ue(e.onEscapeKeyDown, (u) => {
          a.onClose(), u.preventDefault();
        }),
        onKeyDown: Ue(e.onKeyDown, (u) => {
          var h;
          const d = u.currentTarget.contains(u.target), p = JR[a.dir].includes(u.key);
          d && p && (o.onOpenChange(!1), (h = s.trigger) == null || h.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
sv.displayName = av;
function cv(e) {
  return e ? "open" : "closed";
}
function Ga(e) {
  return e === "indeterminate";
}
function Iu(e) {
  return Ga(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function yk(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function vk(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function bk(e, t, n) {
  const i = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, o = n ? e.indexOf(n) : -1;
  let a = vk(e, Math.max(o, 0));
  i.length === 1 && (a = a.filter((l) => l !== n));
  const c = a.find(
    (l) => l.toLowerCase().startsWith(i.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function xk(e, t) {
  const { x: n, y: r } = e;
  let i = !1;
  for (let o = 0, a = t.length - 1; o < t.length; a = o++) {
    const s = t[o].x, c = t[o].y, l = t[a].x, u = t[a].y;
    c > r != u > r && n < (l - s) * (r - c) / (u - c) + s && (i = !i);
  }
  return i;
}
function wk(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return xk(n, t);
}
function Co(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var _k = By, Ek = Ru, Sk = Hy, Ck = qy, Ak = Nu, Ok = Yy, Rk = Os, kk = Zy, Tk = Xy, Pk = Qy, Nk = tv, Mk = nv, Ik = rv, Dk = ov, jk = sv, Du = "DropdownMenu", [Fk, jT] = Si(
  Du,
  [Vy]
), Rt = Vy(), [Lk, lv] = Fk(Du), uv = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: i,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, c = Rt(t), l = x.useRef(null), [u = !1, d] = mu({
    prop: i,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ v.jsx(
    Lk,
    {
      scope: t,
      triggerId: ai(),
      triggerRef: l,
      contentId: ai(),
      open: u,
      onOpenChange: d,
      onOpenToggle: x.useCallback(() => d((p) => !p), [d]),
      modal: s,
      children: /* @__PURE__ */ v.jsx(_k, { ...c, open: u, onOpenChange: d, dir: r, modal: s, children: n })
    }
  );
};
uv.displayName = Du;
var fv = "DropdownMenuTrigger", dv = x.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, o = lv(fv, n), a = Rt(n);
    return /* @__PURE__ */ v.jsx(Ek, { asChild: !0, ...a, children: /* @__PURE__ */ v.jsx(
      pt.button,
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
        ref: ps(t, o.triggerRef),
        onPointerDown: Ue(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (o.onOpenToggle(), o.open || s.preventDefault());
        }),
        onKeyDown: Ue(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && o.onOpenToggle(), s.key === "ArrowDown" && o.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
dv.displayName = fv;
var zk = "DropdownMenuPortal", pv = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Rt(t);
  return /* @__PURE__ */ v.jsx(Sk, { ...r, ...n });
};
pv.displayName = zk;
var hv = "DropdownMenuContent", mv = x.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, i = lv(hv, n), o = Rt(n), a = x.useRef(!1);
    return /* @__PURE__ */ v.jsx(
      Ck,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...o,
        ...r,
        ref: t,
        onCloseAutoFocus: Ue(e.onCloseAutoFocus, (s) => {
          var c;
          a.current || (c = i.triggerRef.current) == null || c.focus(), a.current = !1, s.preventDefault();
        }),
        onInteractOutside: Ue(e.onInteractOutside, (s) => {
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
mv.displayName = hv;
var $k = "DropdownMenuGroup", Vk = x.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, i = Rt(n);
    return /* @__PURE__ */ v.jsx(Ak, { ...i, ...r, ref: t });
  }
);
Vk.displayName = $k;
var Uk = "DropdownMenuLabel", gv = x.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, i = Rt(n);
    return /* @__PURE__ */ v.jsx(Ok, { ...i, ...r, ref: t });
  }
);
gv.displayName = Uk;
var Bk = "DropdownMenuItem", yv = x.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, i = Rt(n);
    return /* @__PURE__ */ v.jsx(Rk, { ...i, ...r, ref: t });
  }
);
yv.displayName = Bk;
var Wk = "DropdownMenuCheckboxItem", vv = x.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, i = Rt(n);
  return /* @__PURE__ */ v.jsx(kk, { ...i, ...r, ref: t });
});
vv.displayName = Wk;
var Hk = "DropdownMenuRadioGroup", qk = x.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, i = Rt(n);
  return /* @__PURE__ */ v.jsx(Tk, { ...i, ...r, ref: t });
});
qk.displayName = Hk;
var Yk = "DropdownMenuRadioItem", bv = x.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, i = Rt(n);
  return /* @__PURE__ */ v.jsx(Pk, { ...i, ...r, ref: t });
});
bv.displayName = Yk;
var Gk = "DropdownMenuItemIndicator", xv = x.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, i = Rt(n);
  return /* @__PURE__ */ v.jsx(Nk, { ...i, ...r, ref: t });
});
xv.displayName = Gk;
var Zk = "DropdownMenuSeparator", wv = x.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, i = Rt(n);
  return /* @__PURE__ */ v.jsx(Mk, { ...i, ...r, ref: t });
});
wv.displayName = Zk;
var Kk = "DropdownMenuArrow", Xk = x.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, i = Rt(n);
    return /* @__PURE__ */ v.jsx(Ik, { ...i, ...r, ref: t });
  }
);
Xk.displayName = Kk;
var Jk = "DropdownMenuSubTrigger", _v = x.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, i = Rt(n);
  return /* @__PURE__ */ v.jsx(Dk, { ...i, ...r, ref: t });
});
_v.displayName = Jk;
var Qk = "DropdownMenuSubContent", Ev = x.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, i = Rt(n);
  return /* @__PURE__ */ v.jsx(
    jk,
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
Ev.displayName = Qk;
var eT = uv, tT = dv, nT = pv, Sv = mv, Cv = gv, Av = yv, Ov = vv, Rv = bv, kv = xv, Tv = wv, Pv = _v, Nv = Ev;
const rT = eT, iT = tT, oT = x.forwardRef(({ className: e, inset: t, children: n, ...r }, i) => /* @__PURE__ */ v.jsxs(
  Pv,
  {
    ref: i,
    className: $e(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-800 dark:data-[state=open]:bg-slate-800",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ v.jsx(tm, { className: "ml-auto h-4 w-4" })
    ]
  }
));
oT.displayName = Pv.displayName;
const aT = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  Nv,
  {
    ref: n,
    className: $e(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      e
    ),
    ...t
  }
));
aT.displayName = Nv.displayName;
const Mv = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ v.jsx(nT, { children: /* @__PURE__ */ v.jsx(
  Sv,
  {
    ref: r,
    sideOffset: t,
    className: $e(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      e
    ),
    ...n
  }
) }));
Mv.displayName = Sv.displayName;
const va = x.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ v.jsx(
  Av,
  {
    ref: r,
    className: $e(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
va.displayName = Av.displayName;
const sT = x.forwardRef(({ className: e, children: t, checked: n, ...r }, i) => /* @__PURE__ */ v.jsxs(
  Ov,
  {
    ref: i,
    className: $e(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ v.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ v.jsx(kv, { children: /* @__PURE__ */ v.jsx(T_, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
sT.displayName = Ov.displayName;
const cT = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ v.jsxs(
  Rv,
  {
    ref: r,
    className: $e(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ v.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ v.jsx(kv, { children: /* @__PURE__ */ v.jsx(P_, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
cT.displayName = Rv.displayName;
const lT = x.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ v.jsx(
  Cv,
  {
    ref: r,
    className: $e(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
lT.displayName = Cv.displayName;
const uT = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  Tv,
  {
    ref: n,
    className: $e("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", e),
    ...t
  }
));
uT.displayName = Tv.displayName;
function fT() {
  const e = yi(), [t, n] = ti(null), r = yb(null);
  Kn(() => {
    t && (async (a) => {
      for (const s of a) {
        if (await e(la({
          file: s,
          category: "default_cms"
        })), !r.current)
          return;
        r.current.value = "";
      }
      e(ni());
    })(t);
  }, [t]);
  const i = () => {
    r.current && r.current.click();
  };
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx(wr, { type: "button", onClick: i, children: /* @__PURE__ */ v.jsx(Pr, { icon: mg }) }),
    /* @__PURE__ */ v.jsx(
      Xi,
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
function dT() {
  return /* @__PURE__ */ v.jsx("div", { className: "border-y-2 h-20 flex items-center", children: /* @__PURE__ */ v.jsxs("div", { className: "px-6 w-full flex items-center justify-between", children: [
    /* @__PURE__ */ v.jsx(Zg, { children: /* @__PURE__ */ v.jsxs(Kg, { children: [
      /* @__PURE__ */ v.jsx(Wi, { children: /* @__PURE__ */ v.jsx(Sl, { href: "/", children: "Home" }) }),
      /* @__PURE__ */ v.jsx(ha, {}),
      /* @__PURE__ */ v.jsx(Wi, { children: /* @__PURE__ */ v.jsxs(rT, { children: [
        /* @__PURE__ */ v.jsxs(iT, { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ v.jsx(Jg, { className: "h-4 w-4" }),
          /* @__PURE__ */ v.jsx("span", { className: "sr-only", children: "Toggle menu" })
        ] }),
        /* @__PURE__ */ v.jsxs(Mv, { align: "start", children: [
          /* @__PURE__ */ v.jsx(va, { children: "Documentation" }),
          /* @__PURE__ */ v.jsx(va, { children: "Themes" }),
          /* @__PURE__ */ v.jsx(va, { children: "GitHub" })
        ] })
      ] }) }),
      /* @__PURE__ */ v.jsx(ha, {}),
      /* @__PURE__ */ v.jsx(Wi, { children: /* @__PURE__ */ v.jsx(Sl, { href: "/docs/components", children: "Components" }) }),
      /* @__PURE__ */ v.jsx(ha, {}),
      /* @__PURE__ */ v.jsx(Wi, { children: /* @__PURE__ */ v.jsx(Xg, { children: "Breadcrumb" }) })
    ] }) }),
    /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsx(fT, {}) })
  ] }) });
}
var ju = "Dialog", [Iv, FT] = Si(ju), [pT, cn] = Iv(ju), Dv = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: i,
    onOpenChange: o,
    modal: a = !0
  } = e, s = x.useRef(null), c = x.useRef(null), [l = !1, u] = mu({
    prop: r,
    defaultProp: i,
    onChange: o
  });
  return /* @__PURE__ */ v.jsx(
    pT,
    {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: ai(),
      titleId: ai(),
      descriptionId: ai(),
      open: l,
      onOpenChange: u,
      onOpenToggle: x.useCallback(() => u((d) => !d), [u]),
      modal: a,
      children: n
    }
  );
};
Dv.displayName = ju;
var jv = "DialogTrigger", hT = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, i = cn(jv, n), o = wt(t, i.triggerRef);
    return /* @__PURE__ */ v.jsx(
      pt.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.contentId,
        "data-state": zu(i.open),
        ...r,
        ref: o,
        onClick: Ue(e.onClick, i.onOpenToggle)
      }
    );
  }
);
hT.displayName = jv;
var Fu = "DialogPortal", [mT, Fv] = Iv(Fu, {
  forceMount: void 0
}), Lv = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: i } = e, o = cn(Fu, t);
  return /* @__PURE__ */ v.jsx(mT, { scope: t, forceMount: n, children: x.Children.map(r, (a) => /* @__PURE__ */ v.jsx(cr, { present: n || o.open, children: /* @__PURE__ */ v.jsx(Au, { asChild: !0, container: i, children: a }) })) });
};
Lv.displayName = Fu;
var Za = "DialogOverlay", zv = x.forwardRef(
  (e, t) => {
    const n = Fv(Za, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, o = cn(Za, e.__scopeDialog);
    return o.modal ? /* @__PURE__ */ v.jsx(cr, { present: r || o.open, children: /* @__PURE__ */ v.jsx(gT, { ...i, ref: t }) }) : null;
  }
);
zv.displayName = Za;
var gT = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, i = cn(Za, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ v.jsx(Ou, { as: Rn, allowPinchZoom: !0, shards: [i.contentRef], children: /* @__PURE__ */ v.jsx(
        pt.div,
        {
          "data-state": zu(i.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), jr = "DialogContent", $v = x.forwardRef(
  (e, t) => {
    const n = Fv(jr, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, o = cn(jr, e.__scopeDialog);
    return /* @__PURE__ */ v.jsx(cr, { present: r || o.open, children: o.modal ? /* @__PURE__ */ v.jsx(yT, { ...i, ref: t }) : /* @__PURE__ */ v.jsx(vT, { ...i, ref: t }) });
  }
);
$v.displayName = jr;
var yT = x.forwardRef(
  (e, t) => {
    const n = cn(jr, e.__scopeDialog), r = x.useRef(null), i = wt(t, n.contentRef, r);
    return x.useEffect(() => {
      const o = r.current;
      if (o) return Ny(o);
    }, []), /* @__PURE__ */ v.jsx(
      Vv,
      {
        ...e,
        ref: i,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ue(e.onCloseAutoFocus, (o) => {
          var a;
          o.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: Ue(e.onPointerDownOutside, (o) => {
          const a = o.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || s) && o.preventDefault();
        }),
        onFocusOutside: Ue(
          e.onFocusOutside,
          (o) => o.preventDefault()
        )
      }
    );
  }
), vT = x.forwardRef(
  (e, t) => {
    const n = cn(jr, e.__scopeDialog), r = x.useRef(!1), i = x.useRef(!1);
    return /* @__PURE__ */ v.jsx(
      Vv,
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
          var c, l;
          (c = e.onInteractOutside) == null || c.call(e, o), o.defaultPrevented || (r.current = !0, o.detail.originalEvent.type === "pointerdown" && (i.current = !0));
          const a = o.target;
          ((l = n.triggerRef.current) == null ? void 0 : l.contains(a)) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && i.current && o.preventDefault();
        }
      }
    );
  }
), Vv = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: o, ...a } = e, s = cn(jr, n), c = x.useRef(null), l = wt(t, c);
    return ry(), /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(
        yu,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: i,
          onUnmountAutoFocus: o,
          children: /* @__PURE__ */ v.jsx(
            gu,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": zu(s.open),
              ...a,
              ref: l,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsx(bT, { titleId: s.titleId }),
        /* @__PURE__ */ v.jsx(wT, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Lu = "DialogTitle", Uv = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, i = cn(Lu, n);
    return /* @__PURE__ */ v.jsx(pt.h2, { id: i.titleId, ...r, ref: t });
  }
);
Uv.displayName = Lu;
var Bv = "DialogDescription", Wv = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, i = cn(Bv, n);
    return /* @__PURE__ */ v.jsx(pt.p, { id: i.descriptionId, ...r, ref: t });
  }
);
Wv.displayName = Bv;
var Hv = "DialogClose", qv = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, i = cn(Hv, n);
    return /* @__PURE__ */ v.jsx(
      pt.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Ue(e.onClick, () => i.onOpenChange(!1))
      }
    );
  }
);
qv.displayName = Hv;
function zu(e) {
  return e ? "open" : "closed";
}
var Yv = "DialogTitleWarning", [LT, Gv] = yA(Yv, {
  contentName: jr,
  titleName: Lu,
  docsSlug: "dialog"
}), bT = ({ titleId: e }) => {
  const t = Gv(Yv), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return x.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, xT = "DialogDescriptionWarning", wT = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Gv(xT).contentName}}.`;
  return x.useEffect(() => {
    var o;
    const i = (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby");
    t && i && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, _T = Dv, ET = Lv, Zv = zv, Kv = $v, Xv = Uv, Jv = Wv, ST = qv;
const CT = _T, AT = ET, Qv = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  Zv,
  {
    ref: n,
    className: $e(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Qv.displayName = Zv.displayName;
const eb = x.forwardRef(({ className: e, children: t, container: n, ...r }, i) => /* @__PURE__ */ v.jsxs(AT, { container: n, children: [
  /* @__PURE__ */ v.jsx(Qv, {}),
  /* @__PURE__ */ v.jsxs(
    Kv,
    {
      ref: i,
      className: $e(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ v.jsxs(ST, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400", children: [
          /* @__PURE__ */ v.jsx(I_, { className: "h-4 w-4" }),
          /* @__PURE__ */ v.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
eb.displayName = Kv.displayName;
const tb = ({
  className: e,
  ...t
}) => /* @__PURE__ */ v.jsx(
  "div",
  {
    className: $e(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
tb.displayName = "DialogHeader";
const nb = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  Xv,
  {
    ref: n,
    className: $e(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
nb.displayName = Xv.displayName;
const rb = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  Jv,
  {
    ref: n,
    className: $e("text-sm text-slate-500 dark:text-slate-400", e),
    ...t
  }
));
rb.displayName = Jv.displayName;
function OT({ className: e }) {
  const { setIsDialogOpen: t, selectedMedia: n } = $u();
  return e = $e("group bg-background w-96 m-6 aspect-[4/3]", e), /* @__PURE__ */ v.jsx(Kl, { onClick: () => t(!0), className: e, children: /* @__PURE__ */ v.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ v.jsx(Om, { ratio: 4 / 3, className: "rounded-lg overflow-hidden bg-checkerboard", children: /* @__PURE__ */ v.jsx(Tm, { media: n, placeholder: !0 }) }),
    /* @__PURE__ */ v.jsx("div", { className: "hidden absolute inset-6 flex items-center justify-center group-hover:flex rounded-lg bg-primary/25 text-white border-dashed border-2", children: /* @__PURE__ */ v.jsx(Pr, { icon: mg, className: "text-4xl" }) })
  ] }) });
}
function RT({ className: e }) {
  yi()(qw(!0));
  const { isDialogOpen: n, dialogContainer: r } = $u();
  return Kn(() => {
    console.log(n);
  }, [n]), /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx(OT, { className: e }),
    /* @__PURE__ */ v.jsx(CT, { open: n, children: /* @__PURE__ */ v.jsxs(eb, { container: r, className: "p-0 z-[900] h-[75vh] w-[75vw] max-h-none max-w-none", children: [
      /* @__PURE__ */ v.jsxs(tb, { className: "pt-6 px-6", children: [
        /* @__PURE__ */ v.jsx(nb, { children: "Médiathèque" }),
        /* @__PURE__ */ v.jsx(rb, { children: "Sélectionnez ou ajoutez un nouveau média." })
      ] }),
      /* @__PURE__ */ v.jsx(ob, { className: "h-[calc(75vh-1.5rem-70px)]" })
    ] }) })
  ] });
}
const ib = vb(void 0), $u = () => {
  const e = bb(ib);
  if (!e)
    throw new Error("usePickerContext must be used within a MediaPickerAppProvider");
  return e;
};
function zT({ serverUrl: e, className: t, onPickedMedia: n, dialogContainer: r, value: i }) {
  const [o, a] = ti(!1), [s, c] = ti(!1), [l, u] = ti(null);
  return t = $e("group bg-background w-96 m-6 aspect-[4/3]", t), Kn(() => {
    (async () => {
      try {
        await Yh(e), a(!0);
      } catch (p) {
        console.error("Failed to initialize the app:", p);
      }
    })();
  }, [e]), Kn(() => {
    o && i !== void 0 && (async (p) => {
      const h = await Bh(p);
      u(h);
    })(i);
  }, [o, i]), o ? /* @__PURE__ */ v.jsx(ib.Provider, { value: { onPickedMedia: n, isDialogOpen: s, setIsDialogOpen: c, selectedMedia: l, setSelectedMedia: u, dialogContainer: r }, children: /* @__PURE__ */ v.jsx(Rp, { store: qh, children: /* @__PURE__ */ v.jsx(RT, {}) }) }) : /* @__PURE__ */ v.jsx("div", { className: t, children: "Initialisation ..." });
}
function kT() {
  const e = yi(), t = yr((l) => l.media.view), n = yr((l) => l.main.picker), r = yr((l) => l.main.currentMedia);
  let i = () => {
  };
  try {
    const { setIsDialogOpen: l, setSelectedMedia: u, onPickedMedia: d } = $u();
    i = () => {
      u(r), d && r != null && d(r.id !== void 0 ? r.id : null), l(!1);
    };
  } catch {
  }
  if (!t) return null;
  const o = (l) => {
    const u = l.match(/page=(\d+)/i);
    return u ? u[1] ?? null : null;
  }, a = () => {
    c(t["hydra:previous"]);
  }, s = () => {
    c(t["hydra:next"]);
  }, c = (l) => {
    if (l == null)
      return;
    const u = Number(o(l));
    u !== null && e(ni(u));
  };
  return /* @__PURE__ */ v.jsx("div", { className: "px-6 h-20 flex items-center justify-end border-t-2", children: /* @__PURE__ */ v.jsxs("div", { className: "flex gap-2", children: [
    n && /* @__PURE__ */ v.jsx(wr, { type: "button", onClick: i, disabled: r === null, children: "Valider" }),
    /* @__PURE__ */ v.jsxs(wr, { type: "button", variant: "secondary", onClick: a, disabled: t["hydra:previous"] === void 0, children: [
      /* @__PURE__ */ v.jsx(Pr, { icon: zC, className: "pr-2" }),
      "Précédent"
    ] }),
    /* @__PURE__ */ v.jsxs(wr, { type: "button", variant: "secondary", onClick: s, disabled: t["hydra:next"] === void 0, children: [
      "Suivant",
      /* @__PURE__ */ v.jsx(Pr, { icon: $C, className: "pl-2" })
    ] })
  ] }) });
}
function TT() {
  const e = yr((t) => t.main.currentMedia);
  return /* @__PURE__ */ v.jsxs(fE, { className: "overflow-y-auto", direction: "horizontal", children: [
    /* @__PURE__ */ v.jsxs(ad, { children: [
      /* @__PURE__ */ v.jsx(dT, {}),
      /* @__PURE__ */ v.jsx(AE, {}),
      /* @__PURE__ */ v.jsx(kT, {})
    ] }),
    e && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(dE, { withHandle: !0 }),
      /* @__PURE__ */ v.jsx(ad, { minSize: 20, maxSize: 40, defaultSize: 20, children: /* @__PURE__ */ v.jsx(gA, {}) })
    ] })
  ] });
}
function ob({ className: e, ...t }) {
  return e = $e("bg-background h-full", e), /* @__PURE__ */ v.jsx("div", { className: e, ...t, children: /* @__PURE__ */ v.jsx(TT, {}) });
}
function $T({ serverUrl: e, className: t }) {
  const [n, r] = ti(!1);
  return t = $e("bg-background h-full", t), Kn(() => {
    (async () => {
      try {
        await Yh(e), r(!0);
      } catch (o) {
        console.error("Failed to initialize the app:", o);
      }
    })();
  }, [e]), n ? /* @__PURE__ */ v.jsx(Rp, { store: qh, children: /* @__PURE__ */ v.jsx(ob, {}) }) : /* @__PURE__ */ v.jsx("div", { className: t, children: "Initialisation ..." });
}
export {
  $T as MediaLibraryApp,
  zT as MediaPickerApp
};

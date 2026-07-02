/* @ds-bundle: {"format":3,"namespace":"OctopusDesignSystem_1dcbea","components":[{"name":"Alert","sourcePath":"components/core/Alert.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Rating","sourcePath":"components/core/Rating.jsx"},{"name":"ServiceCard","sourcePath":"components/core/ServiceCard.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Alert.jsx":"0a42dfa56002","components/core/Badge.jsx":"a0dc982cd394","components/core/Button.jsx":"8da8940dd5b6","components/core/Card.jsx":"81e1e4f1055d","components/core/Input.jsx":"da0b8c42bf07","components/core/Rating.jsx":"6c5c90b87889","components/core/ServiceCard.jsx":"dbc2a71c1386","components/core/StatCard.jsx":"9b6d4f999e26","components/core/Tag.jsx":"2a5005b2cc5b","ui_kits/website/App.jsx":"d3e8ee81d03b","ui_kits/website/parts.jsx":"c7771342b92a","ui_kits/website/sections-bottom.jsx":"ac44dfc082e2","ui_kits/website/sections-top.jsx":"ade2b7896659"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OctopusDesignSystem_1dcbea = window.OctopusDesignSystem_1dcbea || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline message banner for notices / callouts. */
function Alert({
  children,
  title = null,
  tone = "info",
  icon = null,
  ...rest
}) {
  const tones = {
    info: ["var(--info)", "var(--info-bg)"],
    success: ["var(--success)", "var(--success-bg)"],
    warning: ["var(--warning)", "var(--warning-bg)"],
    danger: ["var(--danger)", "var(--danger-bg)"],
    brand: ["var(--brand)", "var(--brand-tint)"]
  };
  const [accent, bg] = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "note",
    style: {
      display: "flex",
      gap: 12,
      padding: "14px 16px",
      background: bg,
      borderRadius: "var(--radius-md)",
      borderLeft: `3px solid ${accent}`,
      fontFamily: "var(--font-body)",
      color: "var(--text-body)"
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent,
      flexShrink: 0,
      lineHeight: 1.4
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.5
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: "var(--text-strong)",
      marginBottom: 2
    }
  }, title), children));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Alert.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status/label pill. Tones map to the semantic colour system.
 */
function Badge({
  children,
  tone = "brand",
  subtle = true,
  ...rest
}) {
  const tones = {
    brand: ["var(--brand)", "var(--brand-soft)", "var(--brand-strong)"],
    success: ["var(--success)", "var(--success-bg)", "var(--success)"],
    warning: ["var(--warning)", "var(--warning-bg)", "#9a6f00"],
    danger: ["var(--danger)", "var(--danger-bg)", "var(--danger)"],
    info: ["var(--info)", "var(--info-bg)", "var(--info)"],
    neutral: ["var(--grey-600)", "var(--grey-100)", "var(--grey-700)"]
  };
  const [solid, bg, deep] = tones[tone] || tones.brand;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 12px",
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1.4,
      letterSpacing: "0.02em",
      borderRadius: "var(--radius-pill)",
      color: subtle ? deep : "var(--oct-white)",
      background: subtle ? bg : solid,
      whiteSpace: "nowrap"
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Octopus primary button. Baloo label, rounded, brand-purple fill by default.
 * Variants: primary (purple), secondary (navy outline), ghost, dark (navy fill), white (on-dark).
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = "button",
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: 14,
      radius: "var(--radius-pill)",
      gap: 6
    },
    md: {
      padding: "12px 24px",
      fontSize: 16,
      radius: "var(--radius-pill)",
      gap: 8
    },
    lg: {
      padding: "16px 32px",
      fontSize: 18,
      radius: "var(--radius-pill)",
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--on-brand)",
      border: "2px solid transparent"
    },
    secondary: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "2px solid var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--brand)",
      border: "2px solid transparent"
    },
    dark: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)",
      border: "2px solid transparent"
    },
    white: {
      background: "var(--oct-white)",
      color: "var(--brand)",
      border: "2px solid transparent"
    }
  };
  const v = variants[variant] || variants.primary;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: as === "button" ? disabled : undefined,
    style: {
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      padding: s.padding,
      fontFamily: "var(--font-display)",
      fontSize: s.fontSize,
      lineHeight: 1,
      fontWeight: 400,
      letterSpacing: "0.01em",
      color: v.color,
      background: v.background,
      border: v.border,
      borderRadius: s.radius,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      textDecoration: "none",
      transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      whiteSpace: "nowrap"
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Generic content surface — white, soft shadow, rounded. */
function Card({
  children,
  padding = "var(--space-6)",
  elevation = "sm",
  accent = false,
  dark = false,
  style = {},
  ...rest
}) {
  const shadows = {
    none: "none",
    xs: "var(--shadow-xs)",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      background: dark ? "var(--surface-dark)" : "var(--surface-card)",
      color: dark ? "var(--text-on-dark)" : "var(--text-body)",
      border: dark ? "none" : "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      boxShadow: shadows[elevation] ?? shadows.sm,
      padding,
      overflow: "hidden",
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      insetInline: 0,
      top: 0,
      height: 4,
      background: "var(--brand)"
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labelled text input with brand focus ring. */
function Input({
  label = null,
  hint = null,
  error = null,
  id,
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      font: "inherit",
      fontSize: 15,
      padding: "12px 14px",
      color: "var(--text-body)",
      background: "var(--surface-card)",
      border: `1px solid ${error ? "var(--danger)" : "var(--border-strong)"}`,
      borderRadius: "var(--radius-md)",
      outline: "none",
      transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
    },
    onFocus: e => {
      e.target.style.borderColor = "var(--brand)";
      e.target.style.boxShadow = "0 0 0 3px var(--focus-ring)";
    },
    onBlur: e => {
      e.target.style.borderColor = error ? "var(--danger)" : "var(--border-strong)";
      e.target.style.boxShadow = "none";
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Rating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Star rating row using the sanctioned amber ★ glyph. */
function Rating({
  value = 5,
  max = 5,
  size = 16,
  showValue = false,
  count = null,
  ...rest
}) {
  const stars = [];
  for (let i = 0; i < max; i++) {
    const filled = i < Math.round(value);
    stars.push(/*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        color: filled ? "var(--rating)" : "var(--grey-300)",
        fontSize: size,
        lineHeight: 1
      }
    }, "\u2605"));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 2
    }
  }, stars), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: size - 2,
      color: "var(--text-strong)"
    }
  }, value.toFixed(1)), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: size - 3,
      color: "var(--text-muted)"
    }
  }, "(", count, ")"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rating.jsx", error: String((e && e.message) || e) }); }

// components/core/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Service category tile — spot illustration + title + blurb + optional link. */
function ServiceCard({
  title,
  description,
  image = null,
  href = "#",
  cta = "Know More",
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    elevation: "sm",
    padding: "0"
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)",
      minHeight: 150
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      height: 120,
      maxWidth: "100%",
      objectFit: "contain"
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h3)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--text-body)",
      margin: 0,
      flex: 1
    }
  }, description), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 15,
      color: "var(--brand)",
      textDecoration: "none",
      marginTop: 4
    }
  }, cta, " \u2192"))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Big-number metric block for stats / KPIs ("4.9", "1,400+", "60 min"). */
function StatCard({
  value,
  label,
  sublabel = null,
  align = "left",
  dark = false,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      fontFamily: "var(--font-body)"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-display-m)",
      lineHeight: 1,
      color: dark ? "var(--text-on-dark)" : "var(--brand)"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: dark ? "var(--text-on-dark)" : "var(--text-strong)"
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: dark ? "var(--text-on-dark-dim)" : "var(--text-muted)"
    }
  }, sublabel));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Outlined chip — for filters, categories, keyword tags. */
function Tag({
  children,
  active = false,
  onClick = null,
  ...rest
}) {
  const clickable = typeof onClick === "function";
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    role: clickable ? "button" : undefined,
    tabIndex: clickable ? 0 : undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 14px",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 700,
      borderRadius: "var(--radius-pill)",
      cursor: clickable ? "pointer" : "default",
      color: active ? "var(--on-brand)" : "var(--text-body)",
      background: active ? "var(--brand)" : "transparent",
      border: `1px solid ${active ? "var(--brand)" : "var(--border-strong)"}`,
      transition: "all var(--dur-base) var(--ease-out)",
      whiteSpace: "nowrap"
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
/* Octopus website kit — top-level app: assembles sections, handles mobile menu,
   quote form state, FAQ accordion, and re-hydrates Lucide icons each render. */

const {
  useState,
  useLayoutEffect
} = React;
function MobileMenu({
  open,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "rgba(19,20,59,0.5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      width: 300,
      background: "var(--surface-page)",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/primary-dark.svg",
    alt: "Octopus",
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 24
  }))), ["AC Services", "Renovations", "Plumbing", "Water Tank Cleaning", "Electrical", "Handyman", "AMC"].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#services",
    onClick: onClose,
    style: {
      padding: "12px 8px",
      fontFamily: "var(--font-display)",
      fontSize: 18,
      color: "var(--text-strong)",
      borderBottom: "1px solid var(--divider)"
    }
  }, n)), /*#__PURE__*/React.createElement("a", {
    href: WHATSAPP,
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(OCT.Button, {
    variant: "primary",
    block: true
  }, "Speak to an Expert"))));
}
function App() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState(0);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    msg: ""
  });
  const [sent, setSent] = useState(false);

  // Re-render Lucide icons after every paint.
  useLayoutEffect(() => {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons({
        attrs: {
          "stroke-width": 2
        }
      });
    }
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    onMenu: () => setMenu(true)
  }), /*#__PURE__*/React.createElement(MobileMenu, {
    open: menu,
    onClose: () => setMenu(false)
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(TrustStrip, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(WhyChoose, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(AmcBand, null), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(QuoteForm, {
    form: form,
    setForm: setForm,
    sent: sent,
    onSubmit: () => setSent(true)
  }), /*#__PURE__*/React.createElement(Faq, {
    open: faq,
    setOpen: setFaq
  }), /*#__PURE__*/React.createElement(Areas, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts.jsx
try { (() => {
/* Shared bits for the Octopus website kit: Lucide icon helper, top bar, header, footer.
   Exports to window so the other babel scripts can use them. */

const OCT = window.OctopusDesignSystem_1dcbea;

/* Lucide icon via the UMD build. Renders an <i data-lucide> that App re-hydrates. */
function Icon({
  name,
  size = 20,
  color = "currentColor",
  stroke = 2,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color,
      display: "inline-flex",
      "--li-stroke": stroke,
      ...style
    }
  });
}
const WHATSAPP = "https://api.whatsapp.com/send/?phone=9718003993";
const NAV = ["AC Services", "Renovations", "Plumbing", "Water Tank Cleaning", "Electrical", "Handyman", "AMC"];
function TopBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark-dim)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "8px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14,
    color: "var(--brand)"
  }), /*#__PURE__*/React.createElement("span", null, "Serving all major Dubai communities \xB7 Since 2013")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:8003993",
    style: {
      color: "var(--text-on-dark)",
      display: "inline-flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 14,
    color: "var(--brand)"
  }), " 800 3993"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 14,
    color: "var(--rating)"
  }), " 4.9 \xB7 1,400+ reviews"))));
}
function Header({
  onMenu
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "14px 24px",
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/primary-dark.svg",
    alt: "Octopus",
    style: {
      height: 30
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: "oct-desktop-nav",
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 12,
      flexWrap: "wrap"
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#services",
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--text-body)",
      padding: "8px 12px",
      borderRadius: "var(--radius-sm)",
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, n, (n === "AC Services" || n === "Renovations") && /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14,
    color: "var(--text-muted)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: WHATSAPP,
    className: "oct-desktop-cta"
  }, /*#__PURE__*/React.createElement(OCT.Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 16
    })
  }, "Speak to an Expert")), /*#__PURE__*/React.createElement("button", {
    onClick: onMenu,
    className: "oct-menu-btn",
    "aria-label": "Menu",
    style: {
      display: "none",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "menu",
    size: 26
  })))));
}
function Footer() {
  const cols = [["AC Maintenance", ["AC Installation", "AC Cleaning", "AC Coil Cleaning", "AC Duct Cleaning"]], ["Packages & Contracts", ["Annual Maintenance Contract", "Pure Air", "Pure Water"]], ["More services", ["Water Tank Cleaning", "Electrical", "Handyman", "Plumbing", "Home Renovation"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark-dim)",
      paddingTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "0 24px",
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/primary-light.svg",
    alt: "Octopus",
    style: {
      height: 32,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.7,
      maxWidth: 320
    }
  }, "Since 2013, Octopus has proudly provided specialized home renovation and maintenance services tailored for Dubai's residential communities."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginTop: 18,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:8003993",
    style: {
      color: "var(--text-on-dark)",
      display: "inline-flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16,
    color: "var(--brand)"
  }), " 800 3993"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@octopus.ae",
    style: {
      color: "var(--text-on-dark)",
      display: "inline-flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16,
    color: "var(--brand)"
  }), " hello@octopus.ae"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--brand)"
  }), " Warehouse 20, Arenco Warehouse, DIP-1, Dubai")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 20
    }
  }, ["facebook", "instagram", "linkedin", "youtube"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#top",
    style: {
      width: 38,
      height: 38,
      borderRadius: "var(--radius-pill)",
      background: "rgba(255,255,255,0.08)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-on-dark)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s,
    size: 18
  }))))), cols.map(([head, items]) => /*#__PURE__*/React.createElement("div", {
    key: head
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 16,
      color: "var(--text-on-dark)",
      marginBottom: 16
    }
  }, head), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#services",
    style: {
      color: "var(--text-on-dark-dim)",
      fontSize: 14
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-on-dark)",
      marginTop: 56,
      padding: "20px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", null, "Octopus MEP Technical Services LLC \xA9 2026. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      color: "var(--text-on-dark-dim)"
    }
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      color: "var(--text-on-dark-dim)"
    }
  }, "Privacy Policy")))));
}
Object.assign(window, {
  Icon,
  Header,
  Footer,
  OCT,
  WHATSAPP
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections-bottom.jsx
try { (() => {
/* Octopus website — process steps, AMC priority band, quote form, FAQ, areas covered. */

function Process() {
  const steps = [["calendar-check", "Book Your Service", "Website, call or WhatsApp. Choose a time that fits your schedule."], ["clipboard-check", "Quick Confirmation", "Our team confirms your booking and assigns the right technician."], ["clock", "On-Time Arrival", "Technician arrives on time — clean uniform, tools ready."], ["search", "Inspection & Diagnosis", "We inspect, explain the fix, and give a clear fixed quote."], ["wrench", "Repair & Maintenance", "Work starts only after your approval, to Dubai's best practices."], ["sparkles", "Clean-Up & Final Check", "We leave your space clean. Every job ends with a quality check."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "88px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oct-overline",
    style: {
      marginBottom: 12
    }
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 38,
      color: "var(--text-strong)",
      margin: "0 0 14px"
    }
  }, "Hassle-Free Home Maintenance in Dubai"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--text-body)",
      maxWidth: 600,
      margin: "0 auto"
    }
  }, "Whether it's an AC repair or full house maintenance, our process keeps things fast, clean and reliable every time.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20
    }
  }, steps.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      padding: 24,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 20,
      right: 22,
      fontFamily: "var(--font-display)",
      fontSize: 38,
      color: "var(--brand-soft)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 50,
      borderRadius: "var(--radius-md)",
      background: "var(--brand)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 19,
      color: "var(--text-strong)",
      marginBottom: 8
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--text-body)"
    }
  }, d))))));
}
function AmcBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-dark)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/secondary-light.svg",
    alt: "",
    style: {
      position: "absolute",
      right: -80,
      top: -60,
      width: 360,
      opacity: 0.08
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "80px 24px",
      display: "grid",
      gridTemplateColumns: "1.2fr 0.8fr",
      gap: 48,
      alignItems: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "oct-overline",
    style: {
      marginBottom: 14
    }
  }, "Annual Maintenance Contract"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 42,
      lineHeight: 1.1,
      color: "var(--text-on-dark)",
      margin: "0 0 18px"
    }
  }, "60-Minute Priority Response for AMC Clients"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5,
      lineHeight: 1.7,
      color: "var(--text-on-dark-dim)",
      maxWidth: 560,
      margin: "0 0 28px"
    }
  }, "You don't wait. You don't follow up. You don't chase technicians. We reach your location within 60 minutes of your call \u2014 leaking tap, AC failure or faulty switch, help arrives fast."), /*#__PURE__*/React.createElement("a", {
    href: "#quote"
  }, /*#__PURE__*/React.createElement(OCT.Button, {
    variant: "white",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Know More"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, [["timer", "Within 60 minutes", "Guaranteed priority dispatch"], ["shield-check", "Proactive servicing", "We catch issues before they start"], ["wallet", "Lower rates", "Member pricing on every visit"]].map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center",
      background: "rgba(255,255,255,0.06)",
      border: "1px solid var(--border-on-dark)",
      borderRadius: "var(--radius-lg)",
      padding: "18px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: "var(--radius-md)",
      background: "var(--brand)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 17,
      color: "var(--text-on-dark)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--text-on-dark-dim)"
    }
  }, d)))))));
}
function QuoteForm({
  form,
  setForm,
  sent,
  onSubmit
}) {
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "quote",
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "88px 24px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "oct-overline",
    style: {
      marginBottom: 12
    }
  }, "Get started"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 40,
      lineHeight: 1.12,
      color: "var(--text-strong)",
      margin: "0 0 18px"
    }
  }, "Book Your Maintenance Service in Dubai Today"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "0 0 28px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, ["Expert technicians for renovation & maintenance", "Reliable, personalised service", "Trusted by Dubai residents with top reviews"].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      fontSize: 15.5,
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20,
    color: "var(--success)"
  }), " ", t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(OCT.Rating, {
    value: 4.9,
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, "Rated 4.9 by 1,400+ residents"))), /*#__PURE__*/React.createElement(OCT.Card, {
    elevation: "lg",
    padding: "32px"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "32px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "var(--radius-pill)",
      background: "var(--success-bg)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 32,
    color: "var(--success)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 24,
      color: "var(--text-strong)",
      margin: "0 0 8px"
    }
  }, "Thanks, ", form.name || "there", "!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--text-body)",
      margin: 0
    }
  }, "Our team will WhatsApp your free quote shortly.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      color: "var(--text-strong)",
      margin: "0 0 4px"
    }
  }, "Get a Free Quote"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)",
      margin: "0 0 20px"
    }
  }, "No hidden costs. Fixed pricing."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(OCT.Input, {
    label: "First name",
    placeholder: "e.g. Sara",
    value: form.name,
    onChange: set("name")
  }), /*#__PURE__*/React.createElement(OCT.Input, {
    label: "Phone / Mobile",
    placeholder: "05X XXX XXXX",
    value: form.phone,
    onChange: set("phone")
  }), /*#__PURE__*/React.createElement(OCT.Input, {
    label: "Email",
    placeholder: "you@email.com",
    value: form.email,
    onChange: set("email")
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, "How can we help?"), /*#__PURE__*/React.createElement("textarea", {
    value: form.msg,
    onChange: set("msg"),
    rows: 3,
    placeholder: "Tell us about the service you need\u2026",
    style: {
      font: "inherit",
      fontSize: 15,
      padding: "12px 14px",
      color: "var(--text-body)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-strong)",
      borderRadius: "var(--radius-md)",
      outline: "none",
      resize: "vertical"
    }
  })), /*#__PURE__*/React.createElement(OCT.Button, {
    variant: "primary",
    size: "lg",
    block: true,
    onClick: onSubmit,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Book free Consultation")))));
}
function Faq({
  open,
  setOpen
}) {
  const qs = [["What types of maintenance services do you offer in Dubai?", "Complete home maintenance — AC repair, plumbing, electrical, painting and handyman work. We handle both small repairs and large property jobs."], ["Do you provide emergency maintenance services?", "Yes. For water leaks, AC failure or electrical issues we can dispatch a technician the same day across Dubai."], ["How quickly can you respond?", "Fast response for all customers — and AMC clients get priority service within 60 minutes, anywhere in Dubai."], ["Are your technicians trained and certified?", "Yes. Our team includes British-trained, background-checked technicians who follow Dubai's safety standards."], ["Do you offer Annual Maintenance Contracts?", "Yes. Flexible AMC plans with lower rates, priority support and proactive servicing for homes and villas."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860,
      margin: "0 auto",
      padding: "88px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oct-overline",
    style: {
      marginBottom: 12
    }
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 38,
      color: "var(--text-strong)",
      margin: 0
    }
  }, "Frequently Asked Questions")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, qs.map(([q, a], i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: q,
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: "100%",
        textAlign: "left",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "18px 22px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        fontFamily: "var(--font-display)",
        fontSize: 17,
        color: "var(--text-strong)"
      }
    }, q, /*#__PURE__*/React.createElement(Icon, {
      name: isOpen ? "minus" : "plus",
      size: 20,
      color: "var(--brand)"
    })), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 22px 20px",
        fontSize: 15,
        lineHeight: 1.65,
        color: "var(--text-body)"
      }
    }, a));
  }))));
}
function Areas() {
  const areas = ["Dubai Marina", "Palm Jumeirah", "Business Bay", "Arabian Ranches", "JVC", "Downtown", "Emirates Hills", "Dubai Hills", "JBR", "The Springs", "Damac Hills", "Jumeirah Park", "The Meadows", "Mudon", "Town Square", "Dubai Sports City"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "80px 24px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oct-overline",
    style: {
      marginBottom: 12
    }
  }, "Coverage"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 34,
      color: "var(--text-strong)",
      margin: "0 0 28px"
    }
  }, "Areas We Cover Across Dubai"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      justifyContent: "center",
      maxWidth: 900,
      margin: "0 auto"
    }
  }, areas.map(a => /*#__PURE__*/React.createElement("span", {
    key: a,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "9px 16px",
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-subtle)",
      border: "1px solid var(--border)",
      fontSize: 14,
      fontWeight: 700,
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14,
    color: "var(--brand)"
  }), " ", a))));
}
Object.assign(window, {
  Process,
  AmcBand,
  QuoteForm,
  Faq,
  Areas
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections-bottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections-top.jsx
try { (() => {
/* Octopus website — hero, trust strip, service grid, why-choose, reviews. */

const P = "https://octopus.ae/wp-content/uploads/2025/08/";
const SVCICON = "https://octopus.ae/wp-content/uploads/2026/04/";
function Hero() {
  const chips = ["AC Maintenance", "AC Cleaning", "Renovation", "Pure Home"];
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      background: "linear-gradient(180deg, var(--brand-tint) 0%, var(--surface-page) 100%)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "72px 24px 64px",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "oct-overline",
    style: {
      marginBottom: 16
    }
  }, "Home maintenance \xB7 Dubai"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 60,
      lineHeight: 1.05,
      letterSpacing: "-0.01em",
      color: "var(--text-strong)",
      margin: "0 0 20px"
    }
  }, "Best ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--brand)"
    }
  }, "Maintenance Company"), " in Dubai"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: "var(--text-body)",
      maxWidth: 520,
      margin: "0 0 28px"
    }
  }, "Octopus has kept Dubai homes running since 2013. Our BICSc-trained technicians cover AC, plumbing, electrical and full renovation across every major community. Rated 4.9 by 1,400+ residents."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginBottom: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: WHATSAPP
  }, /*#__PURE__*/React.createElement(OCT.Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Get a Free Quote")), /*#__PURE__*/React.createElement("a", {
    href: "tel:8003993"
  }, /*#__PURE__*/React.createElement(OCT.Button, {
    variant: "secondary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17
    })
  }, "Call 800 3993"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, chips.map(c => /*#__PURE__*/React.createElement(OCT.Tag, {
    key: c
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "8% 10%",
      background: "var(--brand-soft)",
      borderRadius: "var(--radius-2xl)",
      transform: "rotate(-4deg)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://octopus.ae/wp-content/uploads/2025/09/Octopus-_AC_Repair_Dubai.svg",
    alt: "Octopus technician",
    style: {
      position: "relative",
      width: "100%",
      maxWidth: 440
    }
  }))));
}
function TrustStrip() {
  const items = [["4.9", "Average rating"], ["1,400+", "Happy residents"], ["60 min", "AMC response"], ["2013", "Serving Dubai since"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "28px 24px",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 24
    }
  }, items.map(([v, l]) => /*#__PURE__*/React.createElement(OCT.StatCard, {
    key: l,
    value: v,
    label: l,
    align: "center",
    dark: true
  }))));
}
const SERVICES = [["AC Maintenance & Repair", "Cleaning, gas top-up and servicing to keep you cool all summer.", SVCICON + "AC-Maintenance-1.svg"], ["AC Replacement / Installation", "Supply and fit of new units, sized right for your space.", SVCICON + "AC-Replacement-or-Installation-1.svg"], ["AC Duct Cleaning", "Deep duct cleaning for cleaner air and better airflow.", SVCICON + "AC-Duct-Cleaning-1.svg"], ["Annual Maintenance Contracts", "Priority care, lower rates and 60-minute response.", SVCICON + "Annual-Home-Maintenance-Contract-1.svg"], ["Water Tank Cleaning", "Certified tank cleaning to Dubai Municipality standards.", SVCICON + "Water-Tank-Cleaning-1.svg"], ["Plumbing", "Leaks, blockages, heaters and pumps — fixed fast.", SVCICON + "Plumbing-1.svg"], ["Electrical", "Safe, certified electrical repairs and installation.", SVCICON + "Electrical-Services-1.svg"], ["Home Renovation", "Kitchens, bathrooms and full villa transformations.", SVCICON + "Home-Renovation-1.svg"]];
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "88px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oct-overline",
    style: {
      marginBottom: 12
    }
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 40,
      color: "var(--text-strong)",
      margin: "0 0 14px"
    }
  }, "Our Home Maintenance Services"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--text-body)",
      maxWidth: 620,
      margin: "0 auto"
    }
  }, "From urgent AC repairs in the middle of a Dubai summer to full villa renovations, Octopus handles every aspect of home maintenance under one roof.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20
    }
  }, SERVICES.map(([t, d, img]) => /*#__PURE__*/React.createElement(OCT.ServiceCard, {
    key: t,
    title: t,
    description: d,
    image: img,
    cta: "Know More"
  }))));
}
function WhyChoose() {
  const feats = [["star", "4.9 Rated by 1,400+ Residents", "Customers love our punctuality, professionalism and consistent quality."], ["badge-check", "British-Trained Technicians", "Professionally trained, background-checked and service-oriented — right the first time."], ["house", "All-in-One Services", "AC, plumbing, electrical, painting and complete home maintenance."], ["timer", "60-Minute Rapid Response", "AMC customers get priority support — we reach you within 60 minutes, guaranteed."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "88px 24px",
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "oct-overline",
    style: {
      marginBottom: 12
    }
  }, "Why Octopus"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 38,
      lineHeight: 1.12,
      color: "var(--text-strong)",
      margin: "0 0 18px"
    }
  }, "Why Choose Octopus for ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--brand)"
    }
  }, "Maintenance"), " in Dubai?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: "var(--text-body)",
      margin: "0 0 24px"
    }
  }, "Octopus is the trusted name for quality, speed and professionalism. We provide expert solutions for villas, apartments and homes across the city \u2014 with fixed pricing and no hidden costs."), /*#__PURE__*/React.createElement("a", {
    href: "#quote"
  }, /*#__PURE__*/React.createElement(OCT.Button, {
    variant: "dark",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Speak to an Expert")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 28
    }
  }, [P + "Plumbing.webp", P + "AC-Repair-1.webp", P + "Painting.webp"].map(src => /*#__PURE__*/React.createElement("img", {
    key: src,
    src: src,
    alt: "",
    style: {
      width: 92,
      height: 92,
      objectFit: "cover",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-sm)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18
    }
  }, feats.map(([ic, t, d], i) => /*#__PURE__*/React.createElement(OCT.Card, {
    key: t,
    elevation: "sm",
    accent: i === 3
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      background: "var(--brand-tint)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24,
    color: "var(--brand)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 18,
      color: "var(--text-strong)",
      marginBottom: 8
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--text-body)"
    }
  }, d))))));
}
function Reviews() {
  const data = [["Sara A.", "Palm Jumeirah", "AC stopped at 11pm in July. A technician was at our door within the hour and fixed it on the spot. Genuinely lifesaving."], ["Mohammed R.", "Arabian Ranches", "Booked the AMC for our villa. Everything is handled proactively now — no more chasing anyone. Worth every dirham."], ["Elena K.", "Business Bay", "Full bathroom renovation, finished on time and spotless. Clear fixed quote from day one, no surprises."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "88px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oct-overline",
    style: {
      marginBottom: 12
    }
  }, "Reviews"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 40,
      color: "var(--text-strong)",
      margin: "0 0 10px"
    }
  }, "People ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--brand)"
    }
  }, "Love"), " using Octopus"), /*#__PURE__*/React.createElement(OCT.Rating, {
    value: 4.9,
    showValue: true,
    count: 1400,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 22
    }
  }, data.map(([n, loc, q]) => /*#__PURE__*/React.createElement(OCT.Card, {
    key: n,
    elevation: "md"
  }, /*#__PURE__*/React.createElement(OCT.Rating, {
    value: 5,
    size: 16
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: "14px 0 18px"
    }
  }, "\u201C", q, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: "var(--radius-pill)",
      background: "var(--brand)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontSize: 18
    }
  }, n[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: "var(--text-strong)",
      fontSize: 14
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, loc)))))));
}
Object.assign(window, {
  Hero,
  TrustStrip,
  Services,
  WhyChoose,
  Reviews
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections-top.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Tag = __ds_scope.Tag;

})();

module.exports = {
    extends: "stylelint-config-standard",
    rules: {
        "indentation": 4,
        "color-hex-length": "long",
        "color-hex-case": "lower",
        "length-zero-no-unit": true,
        "selector-pseudo-element-colon-notation": "single",
        "no-descending-specificity": null,
        "declaration-colon-newline-after": null,
        "color-no-invalid-hex": true,
        "unit-whitelist": ["em", "rem", "%", "s", "px"],
    },
  };
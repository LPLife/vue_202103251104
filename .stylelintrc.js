module.exports = {
    extends: ["stylelint-config-standard"],
    /**
     * 本规则文件，主要对样式进行一些规则限制
     * 详细规则可以查看
     * https://stylelint.docschina.org/user-guide/rules/color-hex-length/#color-hex-length
     */
    rules: {
        // 缩进
        indentation: 4,
        // 不允许颜色缩写
        "color-hex-length": "long",
        // 指定 16 进制颜色的大小写。
        "color-hex-case": "lower",
        // 指定伪元素适用单冒号还是双冒号表示法。
        "selector-pseudo-element-colon-notation": "double",
        // 禁止零长度的单位。
        "length-zero-no-unit": true,
        // 禁止无效的 16 进制颜色。
        "color-no-invalid-hex": true,
        // 允许一行空行
        "max-empty-lines": 1,
        // 要求在块的开大括号之前必须有一个空格或不能有空白符。
        "block-opening-brace-space-before": "always",
        // 选择器列表的逗号后需要换行符或不允许使用空格。
        "selector-list-comma-newline-after": "always",
        // 忽略字体类型格式
        "font-family-no-missing-generic-family-keyword": null,
        // 尾符号
        "declaration-block-trailing-semicolon": null,
        "declaration-colon-space-after": "always"
    }
};

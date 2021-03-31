module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
    /**
     * 本规则文件，主要对样式进行一些规则限制
     * 详细规则可以查看
     * https://stylelint.docschina.org/user-guide/rules/color-hex-length/#color-hex-length
     */
    rules: {
        // 缩进
        indentation: 4,
        // 指定 16 进制颜色的简写或扩写。
        'color-hex-length': 'long',
        // 指定 16 进制颜色的大小写。
        'color-hex-case': 'lower',
        // 要求或禁止声明块的一个尾随分号。
        'declaration-block-trailing-semicolon': 'never',
        // 指定伪元素适用单冒号还是双冒号表示法。
        'selector-pseudo-element-colon-notation': 'double',
        // 禁止零长度的单位。
        'length-zero-no-unit': true,
        // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器。
        'no-descending-specificity': null,
        // 要求在声明块的冒号之后必须有换行符或不能有空白符。
        'declaration-colon-newline-after': null,
        // 禁止无效的 16 进制颜色。
        'color-no-invalid-hex': true,
        //指定声明内允许的属性和单位对的白名单。
        'unit-whitelist': ['ms', 'deg', 'em', 'rem', '%', 's', 'px', 'vh', 'vmax']
    }
};

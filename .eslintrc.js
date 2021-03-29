module.exports = {
    root: true,
    env: {
        node: true,
        es6: true
    },
    extends: ["eslint:recommended", "plugin:vue/essential", "@vue/prettier"],
    rules: {
        "generator-star-spacing": "off",
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        /**
         * 使用双引号
         * @category Improving Readability
         * @fixable
         */
        "quotes": ["error", "single"],
        /**
         * 模版中开始标签的反尖括号前禁止有空格，自闭和标签前必须有空格
         * @category Improving Readability
         * @fixable
         */
        "vue/html-closing-bracket-spacing": [
            "error",
            {
                startTag: "never",
                endTag: "never",
                selfClosingTag: "always"
            }
        ],
        /**
         * 没有内容时，组件必须自闭和
         * @category Improving Readability
         * @fixable
         */
        "vue/html-self-closing": "error",
        /**
         * html 的结束标签必须符合规定
         * @category Improving Readability
         * @reason 有的标签不必严格符合规定，如 <br> 或 <br/> 都应该是合法的
         * @fixable
         */
        "vue/html-end-tags": "error",
        /**
         * 限制每行允许的最多属性数量
         * @category Improving Readability
         */
        "vue/max-attributes-per-line": [
            "error",
            {
                singleline: 11,
                multiline: {
                    max: 1,
                    allowFirstLine: false
                }
            }
        ],
        /**
         * 多行内容或多行标签时，内容前必须换行
         * @category Improving Readability
         * @fixable
         */
        "vue/multiline-html-element-content-newline": "error",
        /**
         * 组件的属性必须为一定的顺序
         * @category Minimizing Arbitrary Choices and Cognitive Overhead
         */
        "vue/order-in-components": "error",
        /**
         * html标签的右括号永不换行，注意此配置会与 Prettier 冲突，本项目选择移除 prettier
         * https://github.com/vuejs/vue-cli/issues/3078
         * @category Improving Readability
         * @fixable
         */
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
        }],

        /**
         * template 模版中使用 4 个空格缩进
         * @category Improving Readability
         * @fixable
         */
        "vue/html-indent": ["error", 4],
        /**
         * 禁止在 else 前有 return
         */
        "no-else-return": "warn", 
        /**
         * 在数组开括号后和闭括号前强制换行
         */
        "array-bracket-newline": ["warn", {"multiline": true}],
        /**
         * 禁止未使用过的变量
         */
        "no-unused-vars": [
            "warn",
            {
                "args": "none",
                "ignoreRestSiblings": true
            }
        ],
        /**
         * 大括号风格要求
         */
        "brace-style": [
            "warn",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        /**
         * 禁止定义前使用
         */
        "no-use-before-define": [
            "warn",
            {
                "functions": false,
                "classes": false,
                "variables": false
            }
        ],
        /**
         * 
         */
        "vue/no-parsing-error": [
            2,
            {
              "unexpected-solidus-in-tag": false,
            },
          ],
          "prettier/prettier": "off",
          /**
           * 禁止空块语句 但允许catch
           */
          "no-empty": ["error", { "allowEmptyCatch": true }],
    },
    parserOptions: {
        parser: "babel-eslint"
    },
};

module.exports = {
    root: true,
    env: {
        node: true,
        es6: true
    },
    extends: ["eslint:recommended", "plugin:vue/essential", "@vue/prettier"],
    rules: {
        /**
         * 使用双引号 single
         */
        quotes: ["error", "double"],
        "prettier/prettier": "off",
        // 如果有冲突的话，优先eslint
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        /**
         * vue中"props", "data", "computed", "methods", "setup"中未定义的变量、给予警告
         */
        "vue/no-unused-properties": [
            "warn",
            {
                groups: ["props", "data", "computed", "methods", "setup"],
                ignorePublicMembers: false,
                deepData: false
            }
        ],
        /**
         * 禁止未使用过的变量
         */
        "no-unused-vars": [
            "warn",
            {
                args: "none",
                ignoreRestSiblings: true
            }
        ],
        /**
         * 禁止定义前使用
         */
        "no-use-before-define": [
            "warn",
            {
                functions: false,
                classes: false,
                variables: false
            }
        ],
        "array-bracket-spacing": ["warn", "never"],
        /**
         * 禁止空块语句 但允许catch
         */
        "no-empty": ["error", {allowEmptyCatch: true}],
        "vue/custom-event-name-casing": "off",
        "brace-style": [
            "warn",
            "1tbs",
            {
                allowSingleLine: true
            }
        ]
    },
    parserOptions: {
        parser: "babel-eslint"
    }
};

module.exports = {
    extends: ['@webank/eslint-config-webank/vue.js'],
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
        },
    ],
    env: {
        jest: true,
    },
    rules: {
        'prettier/prettier': 'off',
        'vue/space-unary-ops': 'off',
        'vue/comma-dangle': 'off',
        'no-debugger': 'off',
        // "semi": "off",
        // "init-declarations": "off",
        // "space-unary-ops": "off",
        'import/no-unresolved': [
            2,
            {
                ignore: ['^@/', 'PLS'], // 设置的路径别名
            },
        ],
    },
};

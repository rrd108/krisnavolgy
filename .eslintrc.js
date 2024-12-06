/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:vue/vue3-recommended',
    ],
    rules: {
        'vue/html-self-closing': [2, {
            html: {
                void: 'always',
                normal: 'never',
                component: 'always',
            },
            svg: 'always',
            math: 'always',
        }],
    },
} 

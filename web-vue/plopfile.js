module.exports = plop => {
    plop.setHelper('hump', function (text) {
        return text.replace(text[0], text[0].toUpperCase())
    })
    plop.setGenerator('component', {
        description: '生成组件',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: '请输入组件名？'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'packages/{{name}}/__tests__/{{name}}.spec.ts',
                templateFile: 'templates/__tests__/index.spec.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/index.ts',
                templateFile: 'templates/index.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/src/index.vue',
                templateFile: 'templates/src/index.vue'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/package.json',
                templateFile: 'templates/package.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/README.md',
                templateFile: 'templates/README.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/typings/upfos.d.ts',
                templateFile: 'templates/typings/upfos.d.ts'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/style/{{name}}.scss',
                templateFile: 'templates/style/index.scss'
            },
            {
                type: 'append',
                path: 'docs/.vuepress/clientAppEnhance.ts',
                pattern: /(\/\/ -- APPSTART ITEMS HERE --)/gi,
                template: "import U{{hump name}} from '@upfos/{{name}}'"
            },
            {
                type: 'append',
                path: 'docs/.vuepress/clientAppEnhance.ts',
                pattern: /(\/\/ -- APPEND ITEMS HERE --)/gi,
                template: "app.component('U{{hump name}}', U{{hump name}})"
            }
        ]
    })
}

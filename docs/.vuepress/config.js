module.exports = {
    title: 'YiMinWang\'s blog',
    description: '博客',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav:[ // 导航栏配置
            {text: '随想', link: '/accumulate/' },
            {text: '编程', link: '/algorithm/'},
            {text: '读书', link: 'https://baidu.com'}
        ],
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
};
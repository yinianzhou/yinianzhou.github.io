/**
 * Created by ZhouYinian on 2017/6/15.
 */
export const allMenu = [
    {
        name: '首页',
        url: 'index',
        icon: 'home',
    }, {
        name: '图片',
        url: 'music',
        icon: 'bars',
        children: [
            { name: '轮播', url: 'carousel' },
        ]
    }, {
        name: '工具',
        url: 'tool',
        icon: 'tool',
        children: [
            { name: '小应用', url: 'tools' },
            { name: '富文本编辑器', url: 'editor' },
            { name: '待办事项', url: 'todoList' },
        ],
    }, {
        name: '开发模块',
        url: 'dev',
        icon: 'apple-o',
        children: [
            { name: '更多模块开发中', url: 'todo' },
        ],
    }, {
        name: '项目地址',
        url: 'follow',
        icon: 'heart-o',
    }]
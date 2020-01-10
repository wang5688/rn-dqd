

export default [
  {
    name: 'pop-stack',
    label: '闪屏',
    type: 'stack',
    path: '/pop'
  },
  {
    name: 'modal-stack',
    label: '模态框',
    type: 'stack',
    path: '/modal'
  },
  {
    name: 'auth-stack',
    path: '/auth',
    label: '用户中心',
    type: 'stack',
    children: [
      {
        name: 'login-stack',
        label: '登录',
        type: 'stack',
        path: '/login'
      },
      {
        name: 'setup-stack',
        label: '注册',
        type: 'stack',
        path: '/setup'
      },
      {
        name: 'reset-stack',
        label: '重置密码',
        type: 'stack',
        path: '/reset'
      }
    ]
  },
  {
    name: 'main-stack',
    label: '主页面',
    type: 'stack',
    path: '/main',
    children: [
      {
        name: 'tab-navigator',
        label: '导航',
        type: 'tab',
        children: [
          {
            name: 'home-stack',
            label: '首页',
            type: 'stack',
            path: '/home'
          },
          {
            name: 'game-stack',
            label: '游戏',
            type: 'stack',
            path: '/game'
          },
          {
            name: 'ticket-stack',
            label: '彩经',
            type: 'stack',
            path: '/ticket'
          },
          {
            name: 'data-stack',
            label: '数据',
            type: 'stack',
            path: '/data'
          },
        ]
      },
      {
        name: 'drawer-navigator',
        label: '抽屉',
        type: 'drawer',
      },
      {
        name: 'detail-stack',
        label: '详情页',
        type: 'stack',
      },
      {
        name: 'comment-stack',
        label: '评论',
        type: 'stack',
      }
    ]
  }
];

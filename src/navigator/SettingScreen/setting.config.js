import appConfig from '../../../app.json';

export default [
  [
    {
      name: 'notification',
      label: '推送通知',
      subTitle: '',
      key: '0',
      uri: ''
    },
    {
      name: 'accept_notification',
      label: '接收哪些消息通知',
      subTitle: '',
      key: '1',
      uri: ''
    },
  ],
  [
    {
      name: 'read_setting',
      label: '阅读设置',
      subTitle: '',
      key: '2',
      uri: ''
    },
  ],
  [
    {
      name: 'dark_mode',
      label: '夜间模式',
      subTitle: '',
      key: '3',
      uri: ''
    },
    {
      name: 'clean_cache',
      label: '清理缓存',
      subTitle: '',
      key: '4',
      uri: ''
    },
    {
      name: 'network_diagnosis',
      label: '网络诊断',
      subTitle: '',
      key: '5',
      uri: ''
    },
  ],
  [
    {
      name: 'recommend',
      label: '推荐给好友',
      subTitle: '',
      key: '6',
      uri: ''
    },
    {
      name: 'score',
      label: '给我们评分',
      subTitle: '',
      key: '7',
      uri: ''
    },
    {
      name: 'privacy_policy',
      label: '隐私策略',
      subTitle: '',
      key: '8',
      uri: ''
    },
    {
      name: 'agreement',
      label: '用户协议',
      subTitle: '',
      key: '9',
      uri: ''
    },
    {
      name: 'advertisment',
      label: '广告投放',
      subTitle: '',
      key: '10',
      uri: ''
    },
    {
      name: 'about',
      label: '关于',
      subTitle: '',
      key: '11',
      uri: ''
    },
    {
      name: 'version',
      label: `版本：${appConfig.version}`,
      subTitle: '',
      key: '12',
      uri: ''
    }
  ]
];
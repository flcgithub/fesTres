import {
  defineBuildConfig
} from '@fesjs/fes';
import { templateCompilerOptions } from '@tresjs/core'

export default defineBuildConfig({
  access: {
    roles: {
        admin: ['*'],
        manager: ['/'],
    },
  },
  title: 'SSS-System', // 页面标题
  layout: {
    title: 'Fes.js-Title-FLC', // 顶部标题
    footer: 'footer by FLC',
    navigation: 'mixin', // side mixin top left-right
    theme: 'dark', // dark light
    multiTabs: false, // 是否开启多页
    menus: [{
        name: 'index',
    }, ],
  },
  enums: {
    status: [
      ['0', '无效的'],
      ['1', '有效的'],
    ],
  },
  viteVuePlugin: {
    ...templateCompilerOptions,
  },
});

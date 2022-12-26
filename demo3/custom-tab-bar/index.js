// custom-tab-bar/index.js
// 数据绑定
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../store/store'

Component({
  // 样式覆盖
  options:{
    styleIsolation: 'shared'
  },
    // 绑定数据
  behaviors:[storeBindingsBehavior],
  storeBindings: {
    store,
    fields:{
      sum:'sum',
      active: 'active'
    },
    actions:{
      updateIndex : 'updateIndex'
    }
  },
  // 监听数据变化
  observers: {
    'sum': function(val){
      this.setData({
        "list[1].info": val
      })
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

    "list": [
      {
        "pagePath": "/pages/home/home",
        "text": "主页",
        "iconPath": "/images/icon/home.png",
        "selectedIconPath": "/images/icon/home-active.png"
      },
      {
        "pagePath": "/pages/message/message",
        "text": "消息",
        "iconPath": "/images/icon/message.png",
        "selectedIconPath": "/images/icon/message-active.png",
        "info": 0
      },
      {
        "pagePath": "/pages/contact/contact",
        "text": "联系我们",
        "iconPath": "/images/icon/contact.png",
        "selectedIconPath": "/images/icon/contact-active.png"
      }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.updateIndex(event.detail)
      // 点击按钮获取到页面地址，根据页面地址跳转页面
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    },
  }
})

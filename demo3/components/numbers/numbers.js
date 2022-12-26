// components/numbers/numbers.js
// 第一步 导入包
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'

Component({
  // 第二步 绑定属性
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    // 数据源
    store,
    // 属性
    fields:{
      numA:'numA',
      numB:'numB',
      sum:'sum'
    },
    actions: {
      updateNum2: 'updateNum2'
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 第四步 调用方法
    updateNumB (e) {
      this.updateNum2(e.target.dataset.step)
    }
  }
})

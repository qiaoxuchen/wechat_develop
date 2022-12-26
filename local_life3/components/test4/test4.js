// components/test4/test4.js
// 接收behavior
const myBehavior = require('../../behaviors/my-behavior')

Component({

  // 导入behavior
  behaviors: [myBehavior],

  /**
   * 组件的属性列表
   */
  properties: {
    count:Number
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
    addCount(){
      this.setData({
        count:this.properties.count + 1
      })
      // 通过事件方法将参数传递到父组件
      this.triggerEvent('sync',{value:this.properties.count})
    }
  }
})

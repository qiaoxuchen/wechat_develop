// components/test/test.js
Component({

  // 在组件中 .js文件中新增如下配置
  options: {
    styleIsolation: 'shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 属性定义
    // max:Number
    // 完整定义
    max:{
      type:Number, // 属性的数据类型
      value:10  // 属性默认值
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount() {
      console.info("this.data.count:"+this.data.count)
      console.info("this.properties.max:"+this.properties.max)
      if (this.data.count >= this.properties.max) return
      //  事件方法
      this.setData({
        count: this.data.count + 1
      }),
      this._showCount()
    },
    // 自定义方法
    _showCount () {
      wx.showToast({
        title: 'count值：'+this.data.count,
        icon:'none'
      })
    }
  }
})
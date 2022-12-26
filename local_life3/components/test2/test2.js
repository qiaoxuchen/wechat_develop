// components/test2/test2.js
Component({

  pageLifetimes:{
    show:function(){},  // 页面被展示
    hide:function(){},  // 页面被隐藏
    resize:function(size){},  // // 页面尺寸变化时
  },

  lifetimes: {
    attached(){},  // 在组件实例进入页面节点树时执行
    detached(){}  // 在组件实例被页面节点树移除时执行
  },

  options:{
    // 指定所有_开头的数据字段为纯数据字段
    pureDataPattern: /^_/
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
    num1:0,
    num2:0,
    totalNum:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateNum1() {
      this.setData({
        num1:this.data.num1+1
      })
    },
    updateNum2() {
      this.setData({
        num2:this.data.num2+1
      })
    }
  },
  observers:{
    'num1,num2':function(newNum1,newNum2){
      console.info('--')
      this.setData({
        // totalNum:newNum1+newNum2
        totalNum: newNum1 + newNum2
      })
    }
  }
})

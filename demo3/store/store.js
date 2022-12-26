// 在这个 JS文件中，专门创建Store实例对象

import {observable,action} from 'mobx-miniprogram'

// 导出
export const store = observable ({
  // 挂载共享数据
    numA:1,
    numB:2,
    active: 0,
    // 计算属性 get代表只读
    get sum() {
      return this.numA + this.numB
    },

    // 定义action函数，特意修改store中数据的值
    updateNum1: action(function(step) {
        this.numA += step
    }),
    // 定义action函数，特意修改store中数据的值
    updateNum2: action(function(step) {
      this.numB += step
    }),
    // 定义action函数，特意修改store中索引的值
    updateIndex: action(function(index) {
      this.active = index
    })

})

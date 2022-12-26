// pages/message/message.js
import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'ZhangSan',
    country:'CHINA'
  },

  updateNumA(e) {
    this.updateNum1(e.target.dataset.step)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //  createStoreBindings(当前页面实例，page对象)
    // page对象：{数据源，需要绑定的属性，需要绑定的方法}
    this.storeBindings = createStoreBindings(this,{
      store,
      fields:['numA','numB','sum'],
      actions:['updateNum1']
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    this.storeBindings.destroyStoreBindings
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
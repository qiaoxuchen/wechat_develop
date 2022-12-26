// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    msg: 'hello',
    arrList: [
      {"id":1,"name":"zhangsan"},
      {"id":2,"name":"lisi"},
      {"id":3,"name":"wangwu"}
    ]
  },

    // 数据同步
    bdcHandler (e) {
      console.log(e)
      this.setData({
        msg: e.detail.value
      })
    },

  // 定义按钮事件
  btpHandler(e){
    wx.request({
      url: 'https://api.aaa/cn/test',
      method: "GET",
      data: {
        name: 'zhangsan',
        age:23
      },
      success:(res) =>{
        console.log(res)
      }
    })
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 调用需要提前加载的数据
    this.getInfo();
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
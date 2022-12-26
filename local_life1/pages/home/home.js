// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperArr: [{
        id: 1,
        name: "/images/turns/1.jpg"
      },
      {
        id: 2,
        name: "/images/turns/2.jpg"
      },
      {
        id: 3,
        name: "/images/turns/3.jpg"
      }
    ],
    gridArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      wx.request({
        url: 'https://www.escook.cn/categories',
        method: "GET",
        success:(res) => {
          this.setData ({
            gridArr: res.data
          })
        }
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
// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: {},
    shopArr: [],
    pageIndex: 1,
    pageSize: 10,
    total: 0,
    isloading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query: options
    })
    this.getList()
  },
  getList(cd) {
    this.setData({
      isloading:true
    })

    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
      method: 'GET',
      data: {
        _page: this.data.pageIndex,
        _limit: this.data.pageSize
      },
      success: (res) => {
        console.info(res)
        this.setData({
          total: res.header['X-Total-Count'] - 0,
          shopArr: [...this.data.shopArr, ...res.data]
        })
      },
      // 隐藏loading
      complete:()=>{
        wx.hideLoading({
          complete: (res) => {},
        })
        this.setData({
          isloading:false
        })
        // 自动关闭下拉刷新窗口  如果传了回调函数，自动帮我们调用回调
        // wx.stopPullDownRefresh()
        cd && cd()
      },
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.query.title
    })
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
      this.setData({
        shopArr:[],
        pageIndex: 1,
        total: 0
      })
      // 通过传送回调函数，合理化的关闭下拉窗口
      this.getList(()=>{
        wx.stopPullDownRefresh()
      })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if (this.data.isloading) return
    // pageIndex * pageSize >= total 
    if (this.data.pageIndex * this.data.pageSize >= this.data.total) {
      // 没有数据了 提示用户
      return wx.showToast({
        title: '到底了！！！',
        icon:'none'
      })
    }

    // 分页
    this.setData({
      pageIndex: this.data.pageIndex + 1
    })
    this.getList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
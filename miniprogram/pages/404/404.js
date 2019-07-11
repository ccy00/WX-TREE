// miniprogram/pages/404/404.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: 0,
    img1: '/img/sd2.png',
    img2: '/img/star.png',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  num() {

    let n = app.globalData.currentData;
    if (n == 0) {
      this.setData({
        img1: '/img/sd2.png',
        img2: '/img/star.png',
      })
    }
    else {
      this.setData({
        img2: '/img/star2.png',
        img1: '/img/sd.png',
      })
    }
    this.setData({
      currentData: n
    })


  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
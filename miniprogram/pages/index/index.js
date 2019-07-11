
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
 
    currentData:0,
    img1:'/img/sd2.png',
    img2:'/img/star.png',
    str:"我希望这个世界能多一些善良，我希望我能时不时看见你们的喜讯，我希望你们热爱自己的生命。"

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取当前滑块的index
 
  },

  
  

  num()
  {
  
    let n = app.globalData.currentData;
    if(n==0)
    {
      this.setData({
        img1: '/img/sd2.png',
        img2: '/img/star.png',
      })
    }
    else{
      this.setData({
        img2: '/img/star2.png',
        img1: '/img/sd.png',
      })
    }
    this.setData({
      currentData: n
    })


  }

 



})
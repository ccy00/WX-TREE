const app = getApp();

const db = wx.cloud.database();
const ban = db.collection("user");
Page({
  data: {
    
  },
  onLoad: function () {

    if (app.globalData.id) {
      //全局应用已有openId
  console.log(9999)
    } else {
      // 由于 login云函数 是网络请求，可能会在 Page.onLoad 之后才返回 
      // 所以此处加入 callback 以防止这种情况 
      app.openIdReadyCallback = res => {
       
          app.globalData.id= res.result.openid
      
      }
    }


    // 查看是否授权
    wx.getSetting({

      success: function (res) {
 
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              console.log(app.globalData.id + "app111");
              //从数据库获取用户信息
              ban.where({
                _openid: app.globalData.id
              }).get({
                success: function (res) {
                  console.log("success从数据库获取用户信息" + res.data);
                  app.globalData.name = res.nickName;
                  app.globalData.img = res.avatarUrl;
                  console.log(222222);
                  wx.switchTab({
                    url: '/pages/index/index'
                  })
                },
                failfunction(err){ 
                  console.log(err + "从数据库获取用户信息失败") 
                  }

                  })
 


              console.log(res);
              //用户已经授权过

            }
          });
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    console.log(1111)
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      //插入登录的用户的相关信息到数据库

      ban.add({
        data: {
          openid: getApp().globalData.openid,
          nickName: e.detail.userInfo.nickName,
          avatarUrl: e.detail.userInfo.avatarUrl,
        }
      }).then(res=>{
        console.log("插入登录的用户的相关信息到数据库成功")
      }).catch(err=>{
        console.log("插入登录的用户的相关信息到数据库失败"+err)
      })

      //授权成功后，跳转进入小程序首页
      wx.switchTab({
        url: '/pages/index/index'
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '哎呀',
        content: '您点击了拒绝授权，将无法进入小程序，还是授权吧!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  }

})

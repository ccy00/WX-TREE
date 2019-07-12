
+//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    wx.cloud.callFunction({
      name: 'login',
      complete: res => {
        this.globalData.id = res.result.openid;
        if (this.openIdReadyCallback) {
          this.openIdReadyCallback(res)
        }

        console.log("app.js" + this.globalData.id);
      }

    })
 

  },
   
  globalData:{

    currentData:0,
    id:"",
    name:"",
    img:""

    },

  
})

// com/topbar/topbar.js
var app = getApp();
Component({
  /**
   * 组件的属性列表
   */

  properties: {
    text1: { // 属性名
      type: String,
      value: ''
    },
    text2: { // 属性名
      type: String,
      value: ''
    },
   img1: { // 属性名
      type: String,
      value: ''
    },
    img2: { // 属性名
      type: String,
      value: ''
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentData:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
  
    //点击切换，滑块index赋值
    checkCurrent: function (e) {
      const that = this;

      if (that.data.currentData === e.target.dataset.current) {
        return false;
      } else {

        that.setData({
          currentData: e.target.dataset.current
        })

        app.globalData.currentData = e.target.dataset.current
      }
    }

  
    }
})

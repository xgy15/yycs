//index.js
//获取应用实例
const app = getApp()

//Page Object
Page({
  data: {
    swiperList: []
  },
  //0在页面的onLoad事件中来发送异步请求 
  onLoad: function(options) {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (res) => {
        // console.log(res)
        this.setData({
          swiperList: res.data.message
        })
        console.log(this.data.swiperList)
      },
      fail: () => {},
      complete: () => {}
    });
      
  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  
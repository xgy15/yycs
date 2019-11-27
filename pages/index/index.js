//index.js
//获取应用实例
const app = getApp()

//Page Object
Page({
  data: {
    swiperList: [],    // 轮播图列表
    catitems: [],      // 导航数据列表
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
        // console.log(this.data.swiperList)
      },
    });
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
      success: (res) => {
        console.log(res)
        this.setData({
          catitems: res.data.message
        })
      },
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
  
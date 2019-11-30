//index.js
//获取应用实例
const app = getApp()
// 导入之前封装的请求
import request from "../../utils/request";
//Page Object
Page({
  data: {
    swiperList: [],    // 轮播图列表
    catitems: [],      // 导航数据列表
    floorList: [],     // 楼层数组
  },
  //0在页面的onLoad事件中来发送异步请求 
  onLoad: function(options) {
    // 获取首页轮播图
    request({
      url: 'home/swiperdata',
    }).then(res => {
      this.setData({
        swiperList: res.data.message
      })
    })
    // 获取导航栏数据
    request({
      url: 'home/catitems',
    }).then(res => {
      this.setData({
        catitems: res.data.message
      })
    })
    // 获取楼层数据
    request({
      url: 'home/floordata',
    }).then(res => {
      this.setData({
        floorList: res.data.message
      })
    })
    // 获取首页轮播图数据
    // wx.request({
    //   url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
    //   success: (res) => {
    //     // console.log(res)
    //     this.setData({
    //       swiperList: res.data.message
    //     })
    //     // console.log(this.data.swiperList)
    //   },
    // });
    // 获取导航栏数据
    // wx.request({
    //   url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
    //   success: (res) => {
    //     // console.log(res)
    //     this.setData({
    //       catitems: res.data.message
    //     })
    //   },
    // });
    // wx.request({
    //   url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
    //   success: (res) => {
    //     // console.log(res)
    //     this.setData({
    //       floorList: res.data.message
    //     })
    //   }
    // });
          
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
  
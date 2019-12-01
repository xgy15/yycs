// pages/category/index.js
import request from "../../utils/request";
Page({

  /**
   * 页面的初始数据
   */
  // wxml中 只能找到 data中的变量的数据 
  // data 中应该只存放 视图渲染 要用到的数据  
  // data中的数据越多 页面越卡！！！
  // 视图要使用的全局数据
  data: {
    // 分类数据--页面渲染的数据
    // 左侧的标题数组
    leftMenus: [],
    // 右侧的内容 列表
    rightGoods: [],
    // 点击后的索引
    currentIndex: 0,
    // 右侧滚动条位置
    scrollTop: 0
  },

  // 全局的内部的数据  wxml中找不到   Cates
  // js内部要使用的全局数据 --返回的数据放这里
  Cates: [],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 这里需要做一个判断
    /* 看本地存储有没有旧的数
          1 假设没有，就发送 ajax，将数据存储到本地
          2 假设有
              1 假设时间过期了---重新发送 ajax，将数据存储到本地
              2 假设时间没有过期---用本地存储的数据
    */
    const cates = wx.getStorageSync("cates");
    if(!cates) {
      // 这是本地中没有数据
      this.getCates()
    }else {
      if(Date.now() - cates.time > 5*60*1000) {
        // 这是本地中有数据，但是时间过了5分钟，重新发请求
        this.getCates()
      }else {
        console.log("有数据")
        this.Cates = cates.list;
        this.setData({
          leftMenus: this.Cates.map(v => v.cat_name),
          rightGoods: this.Cates[this.data.currentIndex].children
        })
      }
    } 
  },
  // 这是获取分类数据
  getCates() {
    request({
      url: 'categories',
    }).then(res => {
      // console.log(res.data.message)
      // 全局变量的访问通过 this.Cates 就行
      this.Cates = res.data.message;
      this.setData({
        leftMenus: this.Cates.map(v => v.cat_name),
        rightGoods: this.Cates[this.data.currentIndex].children
      })
      wx.setStorageSync("cates", {list: this.Cates,time: Date.now()});
        
    })
  },
  // 这是点击菜单栏触发的
  handleMenusTap(e) {
    // console.log(e)
    const currentIndex = e.currentTarget.dataset.index;
    this.setData({
      currentIndex,
      rightGoods: this.Cates[currentIndex].children,
      // 重新将右侧滚动条位置设为最顶端
      scrollTop: 0
    })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
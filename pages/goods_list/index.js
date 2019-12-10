// pages/goods_list/index.js
import request from "../../utils/request";
Page({
  // 全局的接口参数--为了方便修改，直接用 this.Params就能修改了
  Params: {
    // 查询关键字，如""冰箱"
    query: '',
    // 分类id
    cid: 1,
    // 页码，第几页
    pagenum: 1,
    // 页容量
    pagesize: 10
  },
  // 页面总页码
  TotalPages: 1,
  /**
   * 页面的初始数据
   */
  data: {
    // 要显示的数据,商品列表
    goods: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // options就是url传递的数值，是一个对象
    // console.log(options)
    this.Params.cid = options.cid;
    this.getList();
  },

  // 发送ajax 获取数据
  getList() {
    request({
      url: "goods/search",
      data: this.Params
    }).then(res => {
      console.log(res)
      this.setData({
        goods: res.data.message.goods
      })
      // 计算总页码
      this.TotalPages = Math.ceil(res.data.message.total / this.Params.pagesize);
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
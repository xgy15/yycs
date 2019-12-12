// pages/goods_detail/index.js
import request from "../../utils/request";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetail(options.goods_id)
  },
  getDetail(goods_id) {
    request({
      url: 'goods/detail',
      data: {
        goods_id
      }
    }).then(res => {
      console.log(res)
      this.setData({
        goodsInfo: res.data.message
      })
    })
  },
  // 这是点击轮播图能预览
  handlePreviewImg(e) {
    // console.log(e)
    const current = e.currentTarget.dataset.src;
    const urls = this.data.goodsInfo.pics.map(v => v.pics_big)
    // 开启图片预览效果
    wx.previewImage({
      current, // 当前显示图片的http链接
      urls // 需要预览的图片http链接列表
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
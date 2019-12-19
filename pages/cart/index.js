// pages/cart/index.js
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
      
  },
  // chooseAddress() {
  //   wx.getSetting({
  //     success: (result) => {
  //       // console.log(result)
  //       const auth = result.authSetting['scope.address'];
  //       if(auth || auth === undefined){
  //         wx.chooseAddress({
  //           success: (e) => {
  //             console.log(e)
  //           },
  //           fail: () => {},
  //           complete: () => {}
  //         });

  //       }else {
  //         wx.openSetting({
  //           success: (result) => {
  //             console.log(result)
  //             wx.chooseAddress({
  //               success: (e) => {
  //                 console.log(e)
  //               },
  //               fail: () => {},
  //               complete: () => {}
  //             });
  //           },
  //           fail: () => {},
  //           complete: () => {}
  //         });

  //       }
  //     },
  //     fail: () => {},
  //     complete: () => {}
  //   });


  // },
  async chooseAddress() {
    // wx.openSetting({
    //   success: (result) => {
    //     console.log(result)
    //   },
    //   fail: () => {},
    //   complete: () => {}
    // });
    // const auth = await new Promise((resolve) => {
    //   wx.openSetting({
    //     success: (result) => {
    //       resolve(result);
    //     },
    //     fail: () => {},
    //     complete: () => {},
    //   });
    // });
    // console.log(auth);
    wx.scanCode({
      onlyFromCamera: false,
      scanType: ['qrCode', 'barCode'],
      success: (result) => {
        console.log(result)
      },
      fail: () => {},
      complete: () => {}
    });

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
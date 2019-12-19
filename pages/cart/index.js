// pages/cart/index.js
<<<<<<< HEAD
import regeneratorRuntime from '../../lib/runtime/runtime';
=======
var touchStartX = 0;//触摸时的原点  
var touchStartY = 0;//触摸时的原点  
var time = 0;// 时间记录，用于滑动时且时间小于1s则执行左右滑动  
var interval = "";// 记录/清理时间记录  
var touchMoveX = 0; // x轴方向移动的距离
var touchMoveY = 0; // y轴方向移动的距离
var num = 0;
>>>>>>> a3dc11d35bb8282cb1dae5d6c0cb87795f3c18ea
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
=======
    urls: [
      {url: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2537096713,1784784728&fm=26&gp=0.jpg',id: "active1"},
      {url: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4237991474,3664107086&fm=26&gp=0.jpg',id: "active2"},
      {url: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3819907577,3645217685&fm=26&gp=0.jpg',id: 'active3'},
      {url: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3236962205,2739556846&fm=26&gp=0.jpg',id: ""},
      {url: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4207048239,791527238&fm=26&gp=0.jpg',id: ""},
      {url: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2983172482,2281172392&fm=26&gp=0.jpg',id: ""},
    ],
    classList: [
      "active2",
      "active1",
      'active3',
      "",
      "",
      "",
    ]
>>>>>>> a3dc11d35bb8282cb1dae5d6c0cb87795f3c18ea
  },
  // 触摸开始事件  
  touchStart: function (e) {
    touchStartX = e.touches[0].pageX; // 获取触摸时的原点  
    touchStartY = e.touches[0].pageY; // 获取触摸时的原点  
    // 使用js计时器记录时间    
    interval = setInterval(function () {
      time++;
    }, 100);
  },
  // 触摸移动事件  
  touchMove: function (e) {
    touchMoveX = e.touches[0].pageX;
    touchMoveY = e.touches[0].pageY;
  },
  // 触摸结束事件  
  touchEnd: function (e) {
    var moveX = touchMoveX - touchStartX
    var moveY = touchMoveY - touchStartY
    if (Math.sign(moveX) == -1) {
      moveX = moveX * -1
    }
    if (Math.sign(moveY) == -1) {
      moveY = moveY * -1
    }
    if (moveX <= moveY) {// 上下
      // 向上滑动
      if (touchMoveY - touchStartY <= -30 && time < 10) {   
        console.log("向上滑动");
        let newUrls = [...this.data.urls]
        // newUrls.push(newUrls.shift())
        if(num >=5) num = 0
        num ++
        let id = newUrls[num-1].id;
        // var num2 = num
        newUrls[num-1].id = newUrls[num].id;
        newUrls[num].id = id
        console.log(newUrls)
        this.setData({
          urls: newUrls
        })
      }
      // 向下滑动  
      if (touchMoveY - touchStartY >= 30 && time < 10) {
        console.log("向下滑动");
      }
    }
    clearInterval(interval); // 清除setInterval  
    time = 0;
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD
    
      
=======
    let arr1 = [1,2]
    console.log(arr1.push(2))
>>>>>>> a3dc11d35bb8282cb1dae5d6c0cb87795f3c18ea
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
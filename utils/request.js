/* 
1 假设同时发送了3个请求出去
  都显示 加载中 
2 第一个请求 很快就回来了
  把加载中 给关闭了！！
3 后两个请求 还在外面 还在加载数据
  这时候 界面上已经没有了加载中的效果了………………

  
3 等到三个请求都 回来了 
  只要最后一个请求回来了 执行关闭就可以了！！ 
  才把 加载中的效果 给关闭！！！ 

4 promiseAll  

 */

// 定义一个变量，记录同时发送请求的个数
let ajaxCount = 0;

// 在这里封装一个请求
// parmas 等于 传来的对象 除了url属性 
function axios({url, ...params}) {
    ajaxCount++;
    // 微信封装的加载中效果
    wx.showLoading({
        title: '加载中',
        mask: true
    })
    let baseURL = "https://api.zbztb.cn/api/public/v1/"
    return new Promise((resolve,reject) => {
        wx.request({
            url: baseURL + url,
            ...params,
            // 注意这里的用法，params是除了url 属性的对象
            // 如果只传来一个{url: 'home'},params是空对象，扩展出来也是空的
            // 如果传来有其他的，会扩展出来写在后面
            success: (res) => {
                resolve(res);
            },
            complete() {
                // 这个方法是微信封装好的在wx.request 中的，不管调用成功还是失败都会执行
                ajaxCount--;
                if(ajaxCount == 0) {
                    // 都回来了，执行去掉加载效果
                    wx.hideLoading();
                }
            },
            fail: (err) => {
                reject(err)
            }
        });
          
    })
}
export default axios;
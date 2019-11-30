// 在这里封装一个请求

// parmas 等于 传来的对象 除了url属性 
function axios({url, ...params}) {
    let baseURL = "https://api.zbztb.cn/api/public/v1/"
    return new Promise((resolve,reject) => {
        wx.request({
            url: baseURL + url,
            ...params,
            // 注意这里的用法，params是除了url 属性的对象
            // 如果只传来一个{url: 'home'},params是空对象，扩展出来也是空的
            // 如果传来有其他的，会扩展出来写在后面
            success: (res) => {
                resolve(res)
            },
            fail: (err) => {
                reject(err)
            }
        });
          
    })
}
export default axios;
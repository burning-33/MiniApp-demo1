//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // 获取用户信息
    let that = this;
    wx.getSetting({
      success: res => {
        wx.login({
          success: function (res) {
            var code = res.code;
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                that.globalData.userInfo = res.userInfo;
                // console.log(that.globalData.userInfo)
                that.globalData.userInfo.userId = res.userInfo.nickName;
                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (that.userInfoReadyCallback) {
                  that.userInfoReadyCallback(res)
                }
              },
              fail: function () {
                // 调用微信弹窗接口
                wx.showModal({
                  title: '警告',
                  content: '您点击了拒绝授权，将无法正常使用小程序的功能体验。请稍后再次点击授权，或者删除小程序重新进入。',
                  success: function (res) {
                    if (res.confirm) {
                      console.log('用户点击确定')
                      wx.authorize({
                        scope: 'scope.userInfo',
                        success() {
                          console.log("s")
                          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框

                        }
                      })
                    }
                  }
                })
              }
            })
          }
        }) 
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           console.log(this.globalData.userInfo)
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         },
    //         fail: function () {
    //           // 调用微信弹窗接口
    //           wx.showModal({
    //             title: '警告',
    //             content: '您点击了拒绝授权，将无法正常使用小程序的功能体验。请稍后再次点击授权，或者删除小程序重新进入。',
    //             success: function (res) {
    //               if (res.confirm) {
    //                 console.log('用户点击确定')
    //                 wx.authorize({
    //                   scope: 'scope.userInfo',
    //                   success() {
    //                     console.log("s")
    //                     // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //                   }
    //                 })
    //               }
    //             }
    //           })
    //         }
    //       })
    //     }else{
    //       wx.authorize({
    //         scope: 'scope.userInfo',
    //         success() {
    //           console.log("授权成功")
    //         }
    //       })
    //     }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
// pages/card/card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  addCard(){
    wx.getWeRunData({
      success:(res)=>{
          // console.log(res.encryptedData);
        // encryptedData需要解密，后台服务器。
          const encryptedData = res.encryptedData
      }
    })
  },
  openMiniPrograme(){
    wx.navigateToMiniProgram({
      appId: '',
      path: 'pages/index/index?id=123',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'develop',
      success(res) {
        // 打开成功
      }
    })
  },
  returnMiniPrograme(){
    wx.navigateBackMiniProgram({
      extraData: {
        foo: 'bar'
      },
      success(res) {
        // 返回成功
      }
    })
  },
  getinvoiceTitle(){
    wx.chooseInvoiceTitle({
      success(res) {
        // console.log(res);
      }
    })
  },
  fingerPrint(){
    wx.startSoterAuthentication({
      requestAuthModes: ['fingerPrint'],
      challenge: '123456',
      authContent: '请用指纹解锁',
      success(res) {
        // console.log(res);
      }
    })
    // 获取设备内是否录入如指纹等生物信息的接口
    // wx.checkIsSoterEnrolledInDevice({
    //   checkAuthMode: 'fingerPrint',
    //   success(res) {
    //     // console.log(res.isEnrolled)//1
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: (res) => {
        // console.log(res)
          res.authSetting = {
            "scope.userInfo": true,
            // "scope.userLocation": true,
            // "scope.werun":true,
          }
         
      }
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
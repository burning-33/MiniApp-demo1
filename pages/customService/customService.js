// pages/customService/customService.js
var types = ['default', 'primary', 'warn']
var pageObject={

  /**
   * 页面的初始数据
   */
  data: {
    access_token:'',
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  //通过点击按钮获取用户信息
  getUserInfo(e){
    // console.log(e.detail.userInfo)
  },
  //获取微信用户绑定的手机号，需先调用login接口,目前该接口针对非个人开发者，且完成了认证的小程序开放
  getphonenumber(e){
    // console.log(e.detail.errMsg)
    // console.log(e.detail.iv)             //加密算法的初始向量
    // console.log(e.detail.encryptedData) //包括敏感数据在内的完整用户信息的加密数据
  },
  launchAppError: function (e) {
     //invalid scene 调用场景不正确，即此时的小程序不具备打开 APP 的能力。
    console.log(e.detail.errMsg)
  } ,
  setDisabled: function (e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function (e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function (e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  showShare(){
    console.log("show")
    wx.showShareMenu({
      withShareTicket:true
    })
  },
  hideShare() {
    console.log("hide")
    wx.hideShareMenu();
  },
  updateShare(){
    wx.updateShareMenu({
      withShareTicket: true,
      success(res) {
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token',
      data:{
        grant_type:'client_credential',
        appid:'wx480c49248e4c9aa7',
        secret:'cdda9bf108371974b28a3e1412a7092c'
      },
      method:'get',
      success:function(res){
        // console.log(res.data.access_token);
        _this.setData({
          access_token: res.data.access_token
        })
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
  onShareAppMessage: function (options) {
    if (options.from === 'button') {
      // 来自页面内转发按钮
      console.log(options.target)
    }
    return {
      title: '自定义转发标题',
      success: function (res) { 
        // 转发成功
        // console.log(res);
      },
      fail: function (res) {
        // 转发失败
      }
    } 
  }
}
for (var i = 0; i < types.length; ++i) {
  (function (type) {
    pageObject[type] = function (e) {
      var key = type + 'Size'
      var changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i])
}
Page(pageObject);
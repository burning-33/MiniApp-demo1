// pages/getwxCode/getwxCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    access_token: '',
    addressInfo:{
      name:'',
      email:'',
      province:'',
      city:'',
      county:'',
      detail:'',
      nationalCode:'',
      tel:''
    }
  },
  getwxCode(){
    var _this = this;
    wx.request({
      url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token='+ _this.data.access_token,
      data:{
        path:'pages/previewImg/previewImg'
      },
      method:'post',
      header:{
        'content-type':'application/json'
      },
      success:function(res){
        console.log(res);
      }
    })
   
  },
  getAddress(){
    var _this = this;
    if (wx.chooseAddress) {
      wx.chooseAddress({
        success: function (res) {
          console.log(JSON.stringify(res))
          console.log(res);
          _this.setData({
            addressInfo: {
              name: res.userName,
              email: res.postalCode,
              province: res.provinceName,
              city: res.cityName,
              county: res.countyName,
              detail: res.detailInfo,
              nationalCode: res.nationalCode,
              tel: res.telNumber
            }
          })
        },
        fail: function (err) {
          console.log(JSON.stringify(err))
        }
      })
    } else {
      console.log('当前微信版本不支持chooseAddress');
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var scene = decodeURIComponent(options.scene)
    var _this = this;
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token',
      data: {
        grant_type: 'client_credential',
        appid: 'wx480c49248e4c9aa7',
        secret: 'cdda9bf108371974b28a3e1412a7092c'
      },
      method: 'get',
      success: function (res) {
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
  onShareAppMessage: function () {
  
  }
})
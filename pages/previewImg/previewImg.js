// pages/previewImg/previewImg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgArr: [
      'http://static.sellerjoin.com/0ad1a21464b07a9bb22768a2c52152d8.jpg',
      'http://static.sellerjoin.com/0b7576e2bae7cee3f334f74692dd1ccc.jpg',
      'http://static.sellerjoin.com/0d4750be43369e3906392b33da48fd94.jpg'
    ],
    imgInfo:{
      width:0,
      height:0,
      imgtype: "",
      path: '',
      orientation: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  getImgInfo(){
    var _this = this;
    wx.getImageInfo({
      src: 'http://static.sellerjoin.com/0ad1a21464b07a9bb22768a2c52152d8.jpg',
      success: function (res) {
        _this.setData({
          imgInfo: {
            width: res.width,
            height: res.height,
            imgtype: res.type,
            path:res.path,
            orientation:res.path
          }
        })
      }
    })
  },
  previewImg(e){
    var _this = this;
    var url= e.currentTarget.dataset.src;
    var urls = this.data.imgArr;
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表，只能是网络图片，本地图片不行
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
// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    y: 0,
    hidden: true
  },
  start: function (e) {
    this.setData({
      hidden: false,
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  move: function (e) {
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  end: function (e) {
    this.setData({
      hidden: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //createCanvasContext  创建 canvas 绘图上下文(指定 canvasId)
    const ctx = wx.createCanvasContext('myCanvas');
    //-----------------------矩形圆形---------------------------------------
    // //圆形渐变
    // const grd = ctx.createCircularGradient(75, 50, 50)
    // //矩形渐变
    // // const grd = ctx.createLinearGradient(0,0,200,0);
    // grd.addColorStop(0,'red')
    // grd.addColorStop(1, 'white')
    // //设置填充色
    // // ctx.setFillStyle(grd)
    // // ctx.fillRect(10, 10, 150, 75)
    // //设置边框色
    // ctx.setStrokeStyle('red');
    // ctx.setShadow(10,10,10,'yellow');
    // ctx.strokeRect(10, 10, 150, 75);
    // ctx.draw()
    //-------------------------------------清空内容-----------------------
    // ctx.setFillStyle('red')
    // ctx.fillRect(0, 0, 150, 200)
    // ctx.setFillStyle('blue')
    // ctx.fillRect(150, 0, 150, 200)
    // ctx.clearRect(10, 10, 150, 75)
    // ctx.draw()

    //----------------------------描边--------------------------------------
    // ctx.moveTo(10, 10)
    // ctx.lineTo(100, 10)
    // ctx.lineTo(100, 100)
    // ctx.lineTo(10, 100)
    // ctx.closePath();
    // ctx.stroke()
    // ctx.draw()

    //------------------画圆-------------------------------------
    // Draw arc
    ctx.beginPath()
    ctx.arc(100, 75, 50, 0, 1.5 * Math.PI)
    ctx.setStrokeStyle('#333333')
    ctx.stroke()

    ctx.draw()
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
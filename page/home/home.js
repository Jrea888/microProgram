// page/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      msg:"Holle World"
  },
  showToast(){
    wx.showToast({
      title: '弹窗',
      icon: 'success',
      duration: 10000,
      // mask:true
    })
  },
  showModal(){
    wx.showModal({
      title:'是否确定？',
      cancelColor: '#dfe',
      success:function(res){
        if(res.confirm){
          console.log("点击确定")
        }else if(res.cancel){
          console.log("点击取消")
        }
      }
    })
  },
  showLoading(){
    wx.showLoading({
      title: '正在加载...',
      mask:true,
      success:function(res){
        console.log(res,"下载成功...")
      },
      fail:function(res){
        console.log("失败回调",res)
      },
      complete:function(){
        console.log("无论成功或者失败都会执行...")
      }
    })

    setTimeout(() => {
      wx.hideLoading({
        success: (res) => {
          console.log("加载完毕...")
        },
      })
    }, 3000);
  },
  doClick(){
    wx.navigateTo({
      url: '/page/about/about',
    })
  }, 
  doClickInfo(){
    wx.navigateTo({
      url: '/page/about/about?name=123&info=msg',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://152.136.185.210:8000/api/w6/category',
      success:function(res){
        const {data:data} = res
        console.log(data.data)
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
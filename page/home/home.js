// page/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    message:"数据传递",
    num:0,
    list:["时尚","流行","经典"],
    showString:"时尚",
    isShowHide:true
  },
  incrementHandle(params){
    console.log(params.detail)
    this.setData({
      num : params.detail.a++
    })
  },
  tarTitleHandle(params){
    console.log(params.detail)
    this.setData({
      showString:params.detail.name
    })
  },
  onClick(){
    const subItem =  this.selectComponent('#sub-item')
    subItem.doClick()
  },
  pageLifetimes:{
    show(){
      console.log("监听组件在页面显示出来时")
    },
    hide(){
      console.log("监听组件在页面隐藏起来时")
    },
    resize(){
      console.log("监听页面的尺寸的改变")
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
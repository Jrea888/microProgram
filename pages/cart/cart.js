// page/cart/cart.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList:[],
    totalPrice:0,
    totalCounter:0,
    length:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.cartList)
    // 1.初始化数据
    this.setData({
      cartList:app.globalData.cartList,
      length:app.globalData.cartList.length
    })


    // 2.设置回调
    app.addCartCallBack = () => {
      this.setData({
        cartList:app.globalData.cartList
      })
      this.changeData()
    }

  },
  changeData(){
     // 获取选中的数据
     let totalPrice = 0;
     let counter = 0;

     for(let item of this.data.cartList){
       if(item.checked){
         counter++;
         totalPrice += item.price *  item.counter;
       }
     }

     console.log(totalPrice,counter)

     // 修改数据
     this.setData({
       totalPrice:totalPrice,
       totalCounter:counter
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
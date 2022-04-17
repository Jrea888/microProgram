App({
  // 全局变量
  globalData:{
    cartList:[]
  },
  // 全局触发函数
  addToCart(obj){
    const oldGoods = this.globalData.cartList.find(item => item.iid === obj.iid)
    
    if(oldGoods){
      oldGoods.counter += 1;
    } else {
      obj.counter = 1;
      obj.checked = true;
      this.globalData.cartList.push(obj)
    }

    // 执行回调
    if(this.addCartCallBack){
      this.addCartCallBack()
    }
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})

// 注册一个小程序示例
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   * 获取用户信息
   */
  onLaunch: function(options) {
    console.log("options--->", options)
    wx.getUserInfo({
      success: function(res) {
        console.log("请求网络，初始化数据...", res)
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {
    console.log(options)
    switch (options.scene) {
      case 1001:
        console.log("1001")
        break;
      case 1005:
        console.log("1005")
        break;
    }

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {

  },
  globalData: {
    name: "张伟刚",
    age: 24
  }
})
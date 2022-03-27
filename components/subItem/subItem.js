// components/subItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  observers:{
    num:function(newValue){
      console.log(newValue)
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
      num:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    doClick(){
      console.log("内部方法")
      this.setData({
        num:++this.data.num
      })
    }
  }
})

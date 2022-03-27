// components/content/ContentItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemInfo:{
      type:String,
      value:"默认值的信息",
      observer:function(newValue,oldValue){
        console.log(newValue,oldValue)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    info:{
      a:1,
      name:"b"
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    incrementHandle(){
      this.triggerEvent('increment',this.data.info)
    }
  }
})

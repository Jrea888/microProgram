// components/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listTab:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickHandle:function(event){ 
      const index = event.currentTarget.dataset.index

      this.setData({
        currentIndex:index
      })

      this.triggerEvent('tarTitle',{index,name:this.properties.listTab[index]})
    }
  }
})

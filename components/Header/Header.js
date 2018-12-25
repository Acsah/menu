// components/Header/Header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'Title'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg:'子组件事件触发了'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    run(){
      console.log(this.data.msg)
    }
  }
})

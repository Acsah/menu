// pages/food/food.js
let config=require('../../utils/config.js');
let app = getApp(); //获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    host: config.host
  },
  goDetail(e) {
    // console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../foodDetail/foodDetail?id=' + id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getFoodList();

    // 调用 app.js 全局方法
    app.getMsg();  // 打印出 123
  },
  /**
   * 获取菜单
   */
  getFoodList() {
    let that=this;
    wx.request({
      url: config.host+'api/productlist', //仅为示例，并非真实的接口地址
      data: {     
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        let arr = res.data.result;        
        arr.map(item=>{
          item.list.map(food=>{
            food.img_url = food.img_url.replace(/\\/g,'/')
          })
        })
        that.setData({
          list: arr
        })
        console.log(arr)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
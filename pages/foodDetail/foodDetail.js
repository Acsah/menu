// pages/foodDetail/foodDetail.js

let config=require('../../utils/config.js');

var WxParse = require('../../wxParse/wxParse.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodId:'',
    detail:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let id=options.id;
    console.log(id)
    this.setData({
      foodId:id
    })
    // console.log(this.foodId);  //这里读不到
    this.getFoodDetail(id);
  },
  getFoodDetail(id) {
    let that=this;
    // console.log(that.foodId)  //这里读不到
    let api =config.host+'api/productcontent?id=';
    wx.request({
      url: api + id, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        let data=res.data.result[0];

        var article = data.content;
        WxParse.wxParse('article', 'html', article, that, 5);

        that.setData({
          detail:data
        })     
      },
      error(err){
       console.log(err)
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
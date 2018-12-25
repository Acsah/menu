// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    page: 1,
    clientHeight: 200,
    flag: true, // 解决重复出发问题
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.requestData();
    let that = this;

    // 获取屏幕高度
    wx.getSystemInfo({
      success(res) {
        console.log(res.windowHeight)
        that.setData({
          clientHeight: res.windowHeight
        })
      }
    })



  },
  // 请求数据
  requestData() {
    this.setData({
      flag: false
    })
    let that = this;
    let url = 'http://www.phonegap100.com/appapi.php';
    wx.request({
      url: url,
      data: {
        a: "getPortalList",
        catid: "20",
        page: this.data.page
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data.result);
        // 每页数据<20,不再继续加载
        let f = res.data.result.length < 20 ? false : true;

        let data = that.data.list.concat(res.data.result);
        let page = ++that.data.page;
        that.setData({
          list: data,
          page: page,
          flag: f
        })
        console.log(that.data.page);
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  loadmore() {
    if (this.data.flag == true) {
      console.log('loadmore')
      this.requestData();
    }
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
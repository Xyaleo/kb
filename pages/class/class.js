Page({

    /**
     * 页面的初始数据
     */
  data: {
    colorArrays: ["#FF69B4", "#FA8072", "#1E90FF", "#BA55D3", "#FFA500", "#778899", "#12AEF3", "#E29AAD", "#85B8CF"],
    wlist: [
      //上课长度全部默认为两节课
      { "xqj": 2, "sksj": 3, "skcd": 2, "kcxx": "羽毛球 @羽毛球场（体育馆） " },
      { "xqj": 2, "sksj": 8, "skcd": 3, "kcxx": "大数据分析与应用 @E301" },
      { "xqj": 3, "sksj": 11, "skcd": 3, "kcxx": "智能系统 @E309" },
      { "xqj": 3, "sksj": 6, "skcd": 2, "kcxx": "英语 （ELC3） @D座403" },
      { "xqj": 3, "sksj": 8, "skcd": 2, "kcxx": "数据结构与算法 @D座407" },
      { "xqj": 4, "sksj": 3, "skcd": 2, "kcxx": "高等微积分 @讲堂四" },
      { "xqj": 5, "sksj": 6, "skcd": 2, "kcxx": "计算方法 @E309" },
      { "xqj": 5, "sksj": 8, "skcd": 2, "kcxx": "数据结构与算法 @D座407" },
      { "xqj": 5, "sksj": 11, "skcd": 2, "kcxx": "英语 （ELC3） @D座403" },
      { "xqj": 6, "sksj": 1, "skcd": 2, "kcxx": "高等微积分 @讲堂四" },
      { "xqj": 6, "sksj": 3, "skcd": 2, "kcxx": "信息与网络安全 @D座301" },
    ]
  },
  showCardView: function (e) {
    wx.navigateTo({
      url: '../set/set?id=' + e.currentTarget.id
    });
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    var ukcxx = wx.getStorageSync('kcxx');
    var skcd = wx.getStorageSync('skcd');
    this.setData({ kcxx: kcxx });
    this.setData({ skcd: skcd });
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
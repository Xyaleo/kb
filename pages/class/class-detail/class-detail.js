Page({

  data: {
    userData: ''
  },

  onLoad: function(options) {
    wx.showToast({
      title: '加载中...',
      mask: true,
      icon: 'loading',
      duration: 10000,
      success: function () {}
    })
    var that = this;
    var classId = options.id;
    const wxreq = wx.request({
      url: 'https://www.easy-mock.com/mock/5d497af54b59305fca63eed6/test/aa',
      data: {},
      success: function(res) {
        console.log(res.data);
        that.userData = res.data;
        that.setData({
          userData: res.data[classId]
        });
        wx.hideToast();
      },
      fail: function (res) {
        console.log(res.data);
        this.userData = "数据获取失败";
      }
    })


  }


})
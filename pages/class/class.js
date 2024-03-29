const app = getApp()
Page({
  detail: function(event) {
    var classId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'class-detail/class-detail?id=' + classId,
    })
  },
  data: {
    colorArrays: ["#FF69B4", "#FA8072", "#1E90FF", "#BA55D3", "#FFA500", "#778899", "#12AEF3", "#E29AAD", "#85B8CF"],
    userData: ''

  },

  onLoad: function(options) {
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d497af54b59305fca63eed6/test/aa',
      data: {},
      success: function(res) {
        console.log(res.data);
        that.userData = res.data;
        that.setData({
          userData: res.data
        });

      },
      fail: function (res) {
        console.log(res.data);
        this.userData = "数据获取失败";
      }
    })

  }
})
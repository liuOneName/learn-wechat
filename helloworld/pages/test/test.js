Page({
  data: {
    msg: 'welcome to test page',
    position: { latitude: '', longitude: '' },
    test: {
      index: 0,
      msg: '你好',
      time: '2018-01-11'
    }
  },
  onReady: function(){
    var that = this;
    wx.getLocation({
      success: function(res) {
        var position = {};
        position.latitude = res.latitude; // 纬度
        position.longitude = res.longitude // 经度
        that.setData({
          position: position,
        })
      },
    });
    var pages = getCurrentPages();
    console.log(pages);
    // wx.scanCode({
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
  }
})
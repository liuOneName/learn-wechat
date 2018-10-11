//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onPullDownRefresh: function(e){
    console.log(e);
  },
  onPageScroll: function(e){
    console.log(e);
    wx.stopPullDownRefresh({
      success: res => {
        console.log(res);
      },
      fail: err => {
        console.log(err);
      },
      complete: () => {
        console.log('runned')
      }
    });
  }
})

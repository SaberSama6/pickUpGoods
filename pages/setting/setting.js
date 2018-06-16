// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [
      // { url: '/image/banner.jpg' },
      // { url: '/image/bottom.jpg' },
      // { url: '/image/bottoms.jpg' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (null != wx.getStorageSync('TOKEN')) {
      wx.request({
        url: 'http://192.168.31.2/user/queryUserIndex', //仅为示例，并非真实的接口地址
        data: {
          'TOKEN': wx.getStorageSync('TOKEN')
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          if (res.data.result != '0001') {
            wx.navigateTo({
              url: '/pages/register/verification'
            })
          }
        }
      })
    } else {
      wx.navigateTo({
        url: '/pages/register/verification'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }, //
  passwordmanager: function () {
    wx.navigateTo({
      url: '/pages/PasswordManager/PasswordManager'
    })
  },
})

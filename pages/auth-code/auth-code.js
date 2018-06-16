Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: 654,
    maxtime: "",
    isHiddenLoading: true,
    isHiddenToast: true,
    dataList: {},
    countDownSecond: '获取验证码',
    mobile: '',
    code: ''
  },
  //事件处理函数  
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.setData({
      windowHeight: wx.getStorageSync('windowHeight')
    });
  },

  // 页面渲染完成后 调用  
  onReady: function () {

  },

  //cell事件处理函数  
  bindCellViewTap: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../babyDetail/babyDetail?id=' + id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  forget: function () {
    wx.request({
      url: 'http://192.168.31.2/user/loginByCode',
      method: 'POST',
      data: {
        'phone': this.data.mobile,
        'code': this.data.code
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data.result == '0001') {
          wx.setStorageSync('TOKEN', res.data.data);
          wx.navigateTo({
            url: '/pages/make-indexte/make-indexte'
          })
        }
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindKeyInput: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  bindKeyInputs: function (e) {
    this.setData({
      code: e.detail.value
    })
  },
  carousel: function () {
    // 手机输入方法
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (this.data.mobile.length == 0) {
      wx.showToast({
        title: '输入的手机号为空',
        icon: 'none',
        duration: 1500
      })
      return false;
    } else if (this.data.mobile.length < 11) {
      wx.showToast({
        title: '手机号长度有误！',
        icon: 'none',
        duration: 1500
      })
      return false;
    } else if (!myreg.test(this.data.mobile)) {
      wx.showToast({
        title: '手机号有误！',
        icon: 'none',
        duration: 1500
      })
      return false;
    }

    var m = 1;
    if (m != wx.getStorageSync('m')) {
      wx.setStorageSync('m', m);
      wx.request({
        url: 'http://192.168.31.2/user/getCodeForLoginByCode',
        data: {
          'phone': this.data.mobile
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          if (res.data.result == '0001') {
            wx.showToast({
              title: '发送成功',
              icon: 'success',
              duration: 1500
            })
          }
        }
      })

      var totalSecond = 60;
      var interval = setInterval(function () {
        var secStr = totalSecond.toString();
        if (secStr.length == 1) secStr = '0' + secStr;
        this.setData({
          countDownSecond: secStr + '秒'
        });
        totalSecond--;
        if (totalSecond < 0) {
          clearInterval(interval);
          wx.setStorageSync('m', 2);
          this.setData({
            countDownSecond: '重新获取验证码',
            disabled: false
          });
        }
      }
        .bind(this), 1000);
    }
  }
})
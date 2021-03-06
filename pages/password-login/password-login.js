// pages/password-login/password-login.js
function IsTel(s) {
  if (s != null) {
    var length = s.length;
    if (length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1})|)+\d{8})$/.test(s)) {
      return true;
    } else {
      return false;
    }
  }
}

Page({
  data: {
    disabled: true, 
    //是否可用  
    opacity: 0.4,
     //设置透明度
  },
  //跳转注册页面
  gotoRegist: function () {
    wx.redirectTo({ url: '/pages/login/regist/regist' })
  },
  //手机的输入框  
  phone: function (e) {
    var that = this
    //console.log(e.detail.value)  
    var isTel = IsTel(e.detail.value)
    //console.log(isTel)  
    if (isTel) {
      that.setData({
        disabled: false,
        opacity: 1
      })
    } else {
      that.setData({
        disabled: true,
        opacity: 0.4
      })
    }
  },
  //提交按钮确认  
  sumit: function (e) {
    console.log(e.detail.value)
    if (e.detail.value.passworld.length == 0) {
      wx.showModal({
        title: '密码不得为空',
        showCancel: false
      })
    } else {
      //提交  
      wx.request({
        url: 'https://URL',
        data: e.detail.value,
        method: 'GET',
        // OPTIONS, 
        //GET, HEAD,
        // POST, PUT,
        // DELETE, TRACE, 
        //CONNECT  
        // header: {},
        // 设置请求的 header  
        success: function (res) {
          // success  
          if (res.data == 1) {
            //请求成功返回码  
            wx.showToast({
              title: '登陆成功',
              icon: 'success',
              duration: 2000
            })
          }
        },
        fail: function () {
          // fail  
        },
        complete: function () {
          // complete  
        }
      })
    }
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  forget: function () {
    wx.navigateTo({
      url: '/pages/forget-password/forget-password'
    })
  }
})

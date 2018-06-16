// pages/usinghelp/usinghelp.js

Page({
  data: {
    isShowFrom1: false,
    isShowFrom2: false,
    isShowFrom3: false,
    isShowFrom4: false,
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 800
  },
  onLoad: function (options) {

  },
  showFrom(e) {
    var param = e.target.dataset.param;
    this.setData({
      isShowFrom1: param == 1 ? (this.data.isShowFrom1 ? false : true) : false,
      isShowFrom2: param == 2 ? (this.data.isShowFrom2 ? false : true) : false,
      isShowFrom3: param == 3 ? (this.data.isShowFrom3 ? false : true) : false,
      isShowFrom4: param == 4 ? (this.data.isShowFrom4 ? false : true) : false
    });
  }
})
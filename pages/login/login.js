Page({

  /**
   * 页面的初始数据
   */
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              console.log(res);
              //从数据库获取用户信息                            
              // that.queryUsreInfo();
              //用户已经授权过 
              console.log("222");                           
              wx.switchTab({
                url: '/pages/index/index',
              })
            }
          });
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    console.log(e);
    if (e.detail.userInfo) {
      //用户登录暗恋允许授权按钮
      var that = this;
      //插入登录的用户的相关信息到数据库
      // wx.request({
      //   url: '',
      //   data: {
      //     openid: getApp().globalData.openid,
      //     nickName: e.detail.userInfo.nickName,
      //     avatarUrl: e.detail.userInfo.avatarUrl,
      //     province: e.detail.userInfo.province,
      //     city: e.detail.userInfo.city
      //   },
      //   header: {
      //     'content-type': 'application/json'
      //   },
      //   success: function (res) {
      //     //从数据库获取用户信息
      //     that.queryUsreInfo();
      //     console.log("插入小程序登录用户信息成功");
      //   }
      // });
      console.log("111");
      wx.switchTab({
        url: '/pages/index/index',
      })
    } else {
      //用户按了拒接按钮，
      wx.showModal({
        title: '警告',
        content: '您点击了拒接授权，将无法进入小程序，请授权之后扎起进入',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log("用户点击了授权");
          }
        }
      })
    }
  },
  queryUsreInfo: function () {
    // wx.request({
    //   url: '',
    //   data:{
    //     openid:getApp().globalData.openid
    //   },
    //   header:{
    //     'content-type':'application/json'
    //   },
    //   success:function(res){
    //     console.log(res.data);
    //     getApp().globalData.userInfo=res.data;
    //   }
    // })
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

  }
})
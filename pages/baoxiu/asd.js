// // pages/baoxiu/baoxiu.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     leixing: ['选择故障类型', '中国', '巴西', '日本'],
//     danwei: ['选择报修单位', '中国', '巴西', '日本'],
//     index: 0,
//     focus: false,
//     height: 20,
//     inputValue: '',
//     files: []
//   },
//   chooseImage: function (e) {
//     var that = this;
//     wx.chooseImage({
//       sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
//       sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
//       success: function (res) {
//         // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
//         that.setData({
//           files: that.data.files.concat(res.tempFilePaths)
//         });
//       }
//     })
//   },
//   previewImage: function (e) {
//     wx.previewImage({
//       current: e.currentTarget.id, // 当前显示图片的http链接
//       urls: this.data.files // 需要预览的图片http链接列表
//     })
//   },
//   openConfirm: function () {
//     wx.showModal({
//       title: '报修成功',
//       content: '您已提交故障报修，请耐心等待',
//       confirmText: "确定",
//       cancelText: "取消",
//       success: function (res) {
//         console.log(res);
//         if (res.confirm) {
//           console.log('用户点击主操作')
//         } else {
//           console.log('用户点击辅助操作')
//         }
//       }
//     });
//   },

//   bindKeyInput: function (e) {
//     this.setData({
//       inputValue: e.detail.value
//     })
//     console.log('inputValue', inputValue)
//   },

//   bindPickerChange: function (e) {
//     console.log('picker发送选择改变，携带值为', e.detail.value)
//     this.setData({
//       index: e.detail.value
//     })
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */

//   onLoad: function (options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })
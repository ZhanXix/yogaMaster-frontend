// pages/record/record.js
//引入代码
var call = require("../../util/request.js")
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
   data:["https://ae01.alicdn.com/kf/H70ae4b5c43b341d7b8fd36b4227a12a8P.jpg"],
   state:'',
   message:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const url='/usr/getStudyRecord'
    var that=this;
    const postData={"usrid":app.globalData.usrid};
    call.request(url, postData,this.shuffleSuc, this.fail);

    //////前端调试看效果用，连接后端时注释掉
    const res={
      "state": "200",
      "message": "获取学习记录成功",
      "data": ["http://127.0.0.1:8000/yogaMaster/images/result/a.jpg","http://127.0.0.1:8000/yogaMaster/images/result/b.jpg"]
      }
    //this.shuffleSuc(res);
  },
  shuffleSuc: function (res) {
    var that = this;
    if (res.state=='200'){
    console.log(res.data);
    that.setData({
      data: res.data,
      state:res.state,
      message:res.message
    })
    console.log("成功");
    }
  },
  fail: function () {
    console.log("失败");
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
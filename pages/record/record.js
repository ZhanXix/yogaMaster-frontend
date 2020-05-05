// pages/record/record.js
//引入代码
var call = require("../../util/request.js")
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
   usrid: app.globalData.usrid,
   data:'',
   state:'',
   message:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const url='/usr/getStudyRecord'
    var that=this;
    const postData={"usrid":this.usrid};
    const res={
    "state": "200",
    "message": "获取学习记录成功",
    "data": ["http://127.0.0.1:8000/yogaMaster/images/result/a.jpg","http://127.0.0.1:8000/yogaMaster/images/result/b.jpg"]
    }
    call.request(url, postData,this.shuffleSuc, this.fail);
    this.shuffleSuc(res);
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
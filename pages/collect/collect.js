// pages/collect/collect.js
var call = require("../../util/request.js")
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    usrid: app.globalData.usrid,
    state:'',
    message:'',
    data:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const url='/home/getYogaByLevel'
    var that=this;
    const postData={"userid":this.usrid};
    const res={
      "state": "200",
      "message": "获取收藏列表成功",
      "data": ["http://127.0.0.1:8000/yogaMaster/images/yoga/1.jpg","http://127.0.0.1:8000/yogaMaster/images/yoga/2.jpg","http://127.0.0.1:8000/yogaMaster/images/yoga/3.jpg","http://127.0.0.1:8000/yogaMaster/images/yoga/4.jpg"]
      }
    call.request(url, postData,this.shuffleSuc, this.fail);

    //////前端调试看效果用，连接后端时注释掉
    this.shuffleSuc(res);
  },
  shuffleSuc: function (res) {
    var that = this;
    if (res.state=='200'){
    console.log(res.data);
    that.setData({
      state:res.state,
      message:res.message,
      data: res.data,
    })
    console.log("成功");
    }
  },
  fail: function () {
    console.log("失败");
  },

  delAllCollect: function() {
    const url='/home/delAllFavorites'
    var that=this;
    const postData={"userid":this.usrid};
    const res = { 
      'state': '200', 
      'message': '取消所有收藏成功' 
    }
    call.request(url, postData,this.delAllCollectSuc, this.fail);
  },
  delAllCollectSuc: function (res) {
    var that = this;
    if (res.state=='200'){
      console.log(res.message);
    }
  },
})
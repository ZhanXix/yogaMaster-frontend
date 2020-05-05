// pages/level3/level3.js
//引入代码
var call = require("../../util/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    const postData={"level":"3"};
    const res={
      "state": "200",
      "message": "获取瑜伽列表成功",
      //"data": [{"model": "yogaMaster.yoga", "pk": "ayoga", "fields": {"level": 1, "video": "avideourl"}},{"model": "yogaMaster.yoga", "pk": "byoga", "fields": {"level": 1, "video": "bvideourl"}}]
      "data": [
        {"model": "yogaMaster.yogaimage", 
        "pk": 3, 
        //"fields": {"yogaName": "半月式", "level": 1, "imgDescription": "nice", "image": "https://ae01.alicdn.com/kf/H7661f7349f6c405bbe1ff87034b400aea.jpg"}
        "fields": {"yogaName": "半月式", "level": 1, "imgDescription": "nice", "image": "https://ae01.alicdn.com/kf/H3abcea11ef234dada59061c9676bb80fb.jpg"}
        }, 
        {"model": "yogaMaster.yogaimage", 
        "pk": 4, 
        "fields": {"yogaName": "半月式", "level": 1, "imgDescription": "nice", "image": "https://ae01.alicdn.com/kf/H3abcea11ef234dada59061c9676bb80fb.jpg"}
        }
      ]
    }
    call.request(url, postData,this.shuffleSuc, this.fail);
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
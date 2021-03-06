// pages/level2/level2.js
//引入代码
var call = require("../../util/request.js")
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    state:'',
    message:'',
    data:[
      {"imgid": 0,
      "yogaName": "加载失败", 
      "level": 0,
      "imgDescription": "",
      "image": "https://ae01.alicdn.com/kf/Hbcf67844b4844c7a9d6e355f393936f15.jpg"
      },
      {"imgid": 0,
      "yogaName": "加载失败", 
      "level": 0,
      "imgDescription": "",
      "image": "https://ae01.alicdn.com/kf/Hbcf67844b4844c7a9d6e355f393936f15.jpg"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const url='/home/getYogaByLevel'
    var that=this;
    const postData={"level":"2"};
    call.request(url, postData,this.shuffleSuc, this.fail);
    
    ///////调试看效果用//////// 
    const res={
      "state": "200",
      "message": "获取瑜伽列表成功",
      "data": [
        {"imgid": 1,
        "yogaName": "半月式", 
        "level": 1,
        "imgDescription": "buttocks",
        "image": "https://ae01.alicdn.com/kf/H3abcea11ef234dada59061c9676bb80fb.jpg"
        },
        {"imgid": 2,
        "yogaName": "半月式", 
        "level": 1,
        "imgDescription": "buttocks",
        "image": "https://ae01.alicdn.com/kf/H3abcea11ef234dada59061c9676bb80fb.jpg"
        }
      ]
    }
    //this.shuffleSuc(res);

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

  setImgid: function(e) {
    const operation=e.currentTarget.dataset.operation;
    app.globalData.imgid = operation;
    console.log("imgid =",app.globalData.imgid)
  }
  
})
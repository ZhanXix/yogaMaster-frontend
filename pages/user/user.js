// pages/user/user.js
// Post http://127.0.0.1:8000/usr/register
// 注册
// var form = new FormData();
// form.append("usrProfile", fileInput.files[0], "/C:/Users/yang/Desktop/2.jpg");
// form.append("usrname", "yy");
// Jsonresponse：
// { "state": "200", "message": "登录成功", "usrid": 1 }

//引入代码
var call = require("../../util/request.js")
const app = getApp()

Page({
  data: {
    userLogin:"",
    loginOK: "getUserInfo:ok",
    userinfo:{}
  },

  handleGetUserInfo(e){
    console.log(e);
    const {userInfo}=e.detail;
    wx.setStorageSync('userinfo', userInfo);
    //console.log(this.data.userLogin);
    this.onShow();
    //console.log(this.data.userLogin);
  },

  onShow(){
    const userinfo=wx.getStorageSync("userinfo");
    this.setData({userinfo});
    if (this.judgeObj(userinfo)){
      this.setData({userLogin:"getUserInfo:ok"})
      this.Register()
      console.log("userid=",app.globalData.usrid)
    }else{
      this.setData({userLogin:""})
    }
  },

  judgeObj(obj){
    for(var attr in obj){
      return true;//非空
    }
    return false;//空
  },

  Register(){
    const url='/usr/register'
    var that=this;
    const postData={"usrname":"{{userinfo.nickName}}"}
    const res = {
      "state": "200", 
      "message": "登录成功", 
      "usrid": 2
    }
    call.request(url, postData, this.shuffleSuc, this.fail);
    this.shuffleSuc(res);
  },
  shuffleSuc: function (res) {
    var that = this;
    if (res.state=='200'){
    console.log(res.data);
    app.globalData.usrid = res.usrid;
    console.log("成功");
    }
    },
    fail: function () {
    console.log("失败");
  },
})

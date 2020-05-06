// pages/detail/detail.js
// Get http://127.0.0.1:8000/home/getYogaImg
// 根据每个瑜伽动作文件名返回对应的图片
// request: {"yogaName":"ayoga"}
// HttpResponse(image_data, content_type="image/png")
// Jsonresponse:{
// "state": "200",
// "message": "获取瑜伽图片成功",
// "data": "http://127.0.0.1:8000/images/yoga/1.jpg"
// }

// Post http://127.0.0.1:8000/home/getResult
// 用户根据选中的姿势上传图片得到比较结果图片
//  requset :
// { "imgid": "1",
//   "usrid":"1",
//   "uploadimg": "/C:/Users/yang/Desktop/3.png"
// }
// Jsonresponse：
// { "state": "200", "message": "获取结果图片成功", "data": "http://127.0.0.1:8000/images/result/a.jpg", "content": "some difference" }

var call = require("../../util/request.js")
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    yogaName: '',
    state:'',
    message:'',
    data:'',
    tempFilePaths:[],
    haveButton: 1,
    resultImage: '',
    resultText: '',
    isCollect: 0
  },

  //选择要上传的图片
  chooseImage(e) {
    var that = this
    // const res = {
    //   "state": "200", 
    //   "message": "获取结果图片成功", 
    //   "data": "https://ae01.alicdn.com/kf/H3abcea11ef234dada59061c9676bb80fb.jpg", 
    //   "content": "some difference" 
    // }
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        var tempFilePaths = res.tempFilePaths
        var that = this
        // that.setData({
        //   tempFilePaths: res.tempFilePaths
        // })
        console.log("tempFilePaths =", res.tempFilePaths[0])
        // wx.setStorageSync('card', tempFilePaths[0]);
        console.log("host =", app.globalData.host)
        wx.uploadFile({    //上传图片并获取传回来的图片路径
          url: app.globalData.host +'/home/getResult', 
          filePath: tempFilePaths[0],
          name: this.yogaName + 'uploadImage',
          headers: {
            'Content-Type': 'multipart/form-data' //********
          },
          formData: {
            "imgid": app.globalData.imgid,
            "usrid": app.globalData.usrid,
            "uploadimg": tempFilePaths[0]
          },
          success (res){
            console.log(res.data);
            if (res.data.state=='200'){
              that.setData({
                resultImage: res.data.data,
                resultText: res.data.content,
                haveButton: 0 
              })              
            }
          },
          fail () {
            that.setData({
              resultImage: "",
              resultText: "upload error",
              haveButton:0 
            })     
          },
        })
      }
    })
  },

  goBack: function () {
    this.setData({haveButton:1})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {yogaName}=options;
    this.setData({
      yogaName
    });
    console.log(yogaName);

    const url='/home/getYogaImg'
    var that=this;
    const postData={"yogaName": yogaName};
    const res={
      "state": "200",
      "message": "获取瑜伽图片成功",
      "data": "https://ae01.alicdn.com/kf/H3abcea11ef234dada59061c9676bb80fb.jpg"
    }
    call.request(url, postData,this.shuffleSuc, this.fail);

    //////前端调试看效果用，连接后端时注释掉
    this.shuffleSuc(res);

    const url2='/usr/ifFavorite'
    const postData2={
      "imgid": app.globalData.imgid,
      "usrid": app.globalData.usrid
    };
    const res2={
      "state": "200",
      "message": "查询收藏成功",
      "data": "0"
    }
    call.request(url2, postData2,this.shuffleSuc2, this.fail);

    //////前端调试看效果用，连接后端时注释掉
    this.shuffleSuc(res2);
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
  shuffleSuc2: function (res) {
    var that = this;
    if (res.state=='200'){
      console.log(res.data);
      if (res.data=='1'){
        that.setData({
          isCollect: 1
        })
      }else{
        that.setData({
          isCollect: 0
        })
      }
      console.log(res.message);
    }
  },
  fail: function () {
    console.log("失败");
  },

  //取消收藏
  reduceFavorites () {
    const url='/usr/delFavorites'
    var that=this;
    const postData={
      "imgid": app.globalData.imgid,
      "usrid": app.globalData.usrid,
    };
    const res={
      'state': '200', 'message': '取消收藏成功' 
    }
    call.request(url, postData,this.reduceFavoritesSuc, this.fail);

    //////前端调试看效果用，连接后端时注释掉
    this.reduceFavoritesSuc(res);

  },
  reduceFavoritesSuc(res){
    var that = this;
    if (res.state=='200'){
      console.log(res.data);
      that.setData({
        isCollect: 0,
      })
    }
  },

  //添加收藏
  addFavorites () {
    const url='/usr/addFavorites'
    var that=this;
    const postData={
      "imgid": app.globalData.imgid,
      "usrid": app.globalData.usrid,
    };
    const res={
      'state': '200', 'message': '收藏成功' 
    }
    call.request(url, postData,this.addFavoritesSuc, this.fail);

    //////前端调试看效果用，连接后端时注释掉
    this.addFavoritesSuc(res);

  },
  addFavoritesSuc(res){
    var that = this;
    if (res.state=='200'){
      console.log(res.data);
      that.setData({
        isCollect: 1,
      })
    }
  },
})
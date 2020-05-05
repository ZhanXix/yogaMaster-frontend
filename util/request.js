var app = getApp();
//项目URL相同部分，减轻代码量，同时方便项目迁移
var host = 'http:/127.0.0.1:8000';
 
/**
* POST请求，
* URL：接口
* postData：参数，json类型
* doSuccess：成功的回调函数
* doFail：失败的回调函数
*/
function request(url, postData, doSuccess, doFail) {
  // 显示加载中效果
  wx.showLoading({
    title: '加载中',
    mask: true
  })

  wx.request({
    //项目的真正接口，通过字符串拼接方式实现
    url: host + url,
    header: {
      "content-type": "application/json;charset=UTF-8"
    },
    data: postData,
    method: 'POST',
    success: function (res) {
      //参数值为res.data,直接将返回的数据传入
      doSuccess(res.data);
    },
    fail: function () {
      doFail();
    },
    complete: function (){
      wx.hideLoading()
    }
  })
}

//GET请求，不需传参，直接URL调用，
function getData(url, doSuccess, doFail) {
    wx.request({
    url: host + url,
    header: {
     "content-type": "application/json;charset=UTF-8"
    },
   method: 'GET',
   success: function (res) {
      doSuccess(res.data);
    },
    fail: function () {
     doFail();
   },
   })
 }
 
/**
* module.exports用来导出代码
* js文件中通过var call = require("../util/request.js")  加载
* 在引入引入文件的时候"  "里面的内容通过../../../这种类型，小程序的编译器会自动提示，因为你可能
* 项目目录不止一级，不同的js文件对应的工具类的位置不一样
*/
const _request = request;
export { _request as request };
const _getData = getData;
export { _getData as getData };

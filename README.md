# yogaMaster frontend

瑜伽大师的微信小程序前端~

后端见：https://github.com/yy-pku/yogaMaster    

> **v1.0.0** 完成所有小程序架构

> **v1.1.0（当前版本）** 完成前后端联调


@Zhanxix 2020/5 

## 界面展示

![首页](https://ae01.alicdn.com/kf/Hf6b180c580bf4367ac22a50d503f6232l.jpg)
![分类](https://ae01.alicdn.com/kf/H5f8f331e685742a788d028ac2ec47955i.jpg)
![个人中心](https://ae01.alicdn.com/kf/Haf5787469ba54a4a930e99843e64ee4e7.jpg)

## 文件夹

/components 存放了组件：搜索框

/icons 存放了所有小图标

/pages 存放了所有页面

/util 存放了封装好的请求方法request.js

## 配置

在app.js文件下的全局变量处（app.globalData.host）修改服务器url即可

## 页面

"pages/index/index" 首页

"pages/category/category" 分类

"pages/user/user" 个人中心

"pages/level1/level1" 初级瑜伽列表

"pages/level2/level2" 中级瑜伽列表

"pages/level3/level3" 高级瑜伽列表

"pages/detail/detail" 瑜伽详情、上传瑜伽图片、获得分析

"pages/search/search" 搜索

"pages/record/record" 学习历史

"pages/collect/collect" 我的收藏

"pages/about/about" 关于我们

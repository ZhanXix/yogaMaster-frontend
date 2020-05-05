//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
    swiperList:[
      {"id":0,
      "image_src":"https://ae01.alicdn.com/kf/Hd71bf4b0d9c249638b40a4388bc77c4ai.jpg",
      "open_type":"navigate",
      "navigator_url":"/pages/level1/level1"
      },
      {"id":1,
      "image_src":"https://ae01.alicdn.com/kf/H1f30c963bdf5409d808243ae86d351ebu.jpg",
      "open_type":"navigate",
      "navigator_url":"/pages/level2/level2"
      },
      {"id":2,
      "image_src":"https://ae01.alicdn.com/kf/H8c84ac5be7704a9aaf6d466917f44f88o.jpg",
      "open_type":"navigate",
      "navigator_url":"/pages/level3/level3"
      }
    ],

    // 导航栏
    // 分别跳转到分类、我的收藏、历史、客服
    cateList:[
      {"id":0,
      "name":"瑜伽分类",
      "image_src":"https://ae01.alicdn.com/kf/H9da4be9854db42679e2639dbe71ac33cf.jpg",
      "open_type":"switchTab",
      "navigator_url":"/pages/category/category"
      },
      {"id":1,
      "name":"我的收藏",
      "image_src":"https://ae01.alicdn.com/kf/Hd90b2c04da144399b55373eaf179514am.jpg",
      "open_type":"navigate",
      "navigator_url":"/pages/collect/collect"
      },
      {"id":2,
      "name":"学习记录",
      "image_src":"https://ae01.alicdn.com/kf/H443336707ff04396b8e78ac03820c8d3h.jpg",
      "open_type":"navigate",
      "navigator_url":"/pages/record/record"
      },
      {"id":3,
      "name":"个人中心",
      "image_src":"https://ae01.alicdn.com/kf/Hc0cdaa493fd245d9a0b62c13c9a984fb9.jpg",
      "open_type":"switchTab",
      "navigator_url":"/pages/user/user"
      }
    ],

    //下方图片栏
    imageList:[
      {"id":0,
      "image_src":"https://ae01.alicdn.com/kf/H32db26fd0f6840d9811b7ab657077e28t.jpg",
      "open_type":"navigate",
      "navigator_url":"/pages/level2/level2"
      },
      {"id":1,
      "image_src":"https://ae01.alicdn.com/kf/H86ac223a187e488e9eb341cd665552443.jpg",
      "open_type":"navigate",
      "navigator_url":"/pages/level1/level1"
      },
      {"id":2,
      "image_src":"https://ae01.alicdn.com/kf/H98881d8c5f344d0f9b69a486e3a0e1f1W.jpg",
      "open_type":"navigate",
      "navigator_url":"/pages/level3/level3"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
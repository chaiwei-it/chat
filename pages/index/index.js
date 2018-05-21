
var app = getApp()

Page({
  data: {
    lists: [
      // { message: "北京", position:"left"},
      // { message: "深圳", position: "right" },
      // { message: "上海", position: "left" },
      // { message: "广州", position: "right" },
      // { message: "珠海", position: "left" }  
    ],
    message: '',
    //记录item个数  
    itemCount: 1,
    scrollTop: 100,//设置滚动条到顶部的距离  

  },
  sendLeft: function (message){
    this.setData({
      left: 'true',
    });
    var { lists, itemCount } = this.data;
    var newData = { message: message, position: "right" };
    lists.push(newData);
    this.setData({
      lists: lists,
      itemCount: itemCount,
      
    });
  },

  sendRight: function(message){
    this.setData({
      left: 'false',
    })
    var { lists, itemCount } = this.data;
    var leftData = { message: message, position: "left" };
    lists.push(leftData);
    this.setData({
      lists: lists,
      itemCount: itemCount,
    }) 
  },

  messageInput: function(e){
    this.setData({
      message: e.detail.value
    })
  },
  //事件处理函数  
  send: function () {
    this.sendLeft(this.data.message);
    //回复
    this.sendRight("回复")
  }
}) 
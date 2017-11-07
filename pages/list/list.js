Page({
	data:{
		list:[],
		title:'loading...'
	},
	onLoad (params) {
     
     const apiUrl = 'https://api.douban.com/v2/movie/' +params.type
     const _this = this
     wx.request({
     url: apiUrl, 
     data: {},
     header: {
      'content-type': 'application/json' 
      },
     success: function(res) {
       this.setData({title:res.data.subjects,title: res.data.title})
     }
     })
    
	}
})
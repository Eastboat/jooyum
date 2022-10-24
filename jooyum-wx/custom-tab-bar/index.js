Component({
	data: {
		selected: 0,
		color: "#7A7E83",
		selectedColor: "#3cc51f",
		list: [{
				pagePath: "/pages/index/index",
				iconPath: "/static/logo/logo1.png",
				selectedIconPath: "/static/logo/logo1.png",
				text: "组件"
			}, {
				pagePath: "/pages/list/list",
				iconPath: "/static/logo/logo2.png",
				selectedIconPath: "/static/logo/logo2.png",
				text: "消息"
			},
			{
				pagePath: "/pages/release/release",
				iconPath: "/static/logo/logo3.png",
				selectedIconPath: "/static/logo/logo3.png",
				text: "发布"
			},
			{
				pagePath: "/pages/analyse/analyse",
				iconPath: "/static/logo/logo5.png",
				selectedIconPath: "/static/logo/logo5.png",
				text: "分析"
			},
			{
				pagePath: "/pages/user/user",
				iconPath: "/static/logo/logo4.png",
				selectedIconPath: "/static/logo/logo4.png",
				text: "我"
			},
		]
	},
	attached() {},
	methods: {
		switchTab(e) {
			const data = e.currentTarget.dataset
			console.log(data, '----');
			const url = data.path
			wx.switchTab({
				url
			})
			this.setData({
				selected: data.index
			})
		}
	}
})

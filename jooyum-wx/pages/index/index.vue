<template>
	<view class="content">
		<JyNoticeBar title="早上好,张三先生"><JyBadge :msg-nums="10"></JyBadge></JyNoticeBar>
		<!-- <SwiperBanner></SwiperBanner> -->
		<view class="swiper"><text>轮播图</text></view>
		<!-- 功能列表tab -->
		<van-tabs :active="active" @change="onChange" class="tabs__wrap" color="#272A3B">
			<van-tab :title="item.title" v-for="item in functionList" :key="item.id">
				<van-grid column-num="4" class="grid__wrap">
					<van-grid-item icon="photo-o" :text="c_item.name" v-for="c_item in item.children" :key="c_item.id" @click="handleClickGrid(c_item)"></van-grid-item>
				</van-grid>
			</van-tab>
		</van-tabs>
		<!-- 功能弹框 -->
		<jy-dialog width="460px" :isShow="isShow" :title="syncTitle" :showFooter="false" @handleCloseClick="handleClose">
			<van-grid :gutter="6" direction="horizontal" column-num="3" class="grid__wrap">
				<van-grid-item icon="photo-o" :text="item.name" v-for="item in currentFunction" @click="handleClickGrid(c_item)" :key="item.id"></van-grid-item>
			</van-grid>
		</jy-dialog>
		<!-- 全局导航栏 -->
		<JyTabBar :current-page="0"></JyTabBar>
	</view>
</template>

<script>
import SwiperBanner from './components/SwiperBanner.vue';
import functionList from './mock/list.js';
export default {
	components: {
		SwiperBanner
	},
	data() {
		return {
			title: 'Hello',
			active: 0,
			functionList, // Mock数据
			isShow:false, // dialog 控制
			currentFunction:[] ,// 选中的功能
			syncTitle:''
		};
	},
	onLoad() {},
	methods: {
		onChange(event) {
			wx.showToast({
				title: `切换到功能 ${event.detail.name+1}`,
				icon: 'none'
			});
		},
		handleClickGrid(args) {
			console.log(args)
			this.isShow=true
			this.syncTitle=args.name
			this.currentFunction=args.children
		},
		handleClose() {
			this.isShow=false
			this.currentFunction=[]
		}
	},
	onShow() {}
};
</script>

<style lang="scss">
page {
	background-color: #f1f1f1;
}
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.grid__wrap,
	.tabs__wrap {
		width: 100vw;
	}
	.tabs__wrap {
		padding-bottom: 20rpx;
	}
}
.swiper {
	width: 100vw;
	height: 200rpx;
	background-color: burlywood;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}

// tab reset
.van-tabs__scroll {
	background-color: #272a3b85 !important;
	height: 100rpx;
}

.van-tab__pane--active {
	padding-top: 10px;
}
</style>

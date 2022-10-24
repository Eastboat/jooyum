<template>
	<view class="notice-bar">
		<text class="notice-bar__title">{{ title }}</text>
		<slot></slot>
	</view>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '标题'
		}
	},
	name: 'NoticeBar',
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.notice-bar {
	width: 100vw;
	height: 70rpx;
	background-color: #272a3b;
	text-align: center;
	line-height: 70rpx;
	&__title {
		color: #77aa22;
	}
	&__badege {
		position: absolute;
		right: 10px;
		line-height: 60rpx;
	}
}
</style>

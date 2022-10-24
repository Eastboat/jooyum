<template>
	<view>
		<uni-badge :text="msgNums" class="uni-badge__item" absolute="rightTop" :offset="[2, 2]" size="small">
			<view class="box"><text class="box-text">右上</text></view>
		</uni-badge>
	</view>
</template>

<script>
export default {
	msgNums: {
		type: Number,
		default: 0
	},
	name: 'Badge',
	data() {
		return {};
	}
};
</script>

<style lang="scss">
// badge右对齐
.wx__icon {
	.uniui-weixin {
		color: #fff !important;
	}
}
.uni-badge__item {
	width: 100%;
	height: 100%;
	.box {
		width: 40rpx;
		height: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: #dcdfe6;
		color: #fff;
		font-size: 12rpx;
	}
}
</style>

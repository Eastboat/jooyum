<template>
	<view class="jy__dialog" v-show="isShow" @click="closeBtn" >
		<view class="jy__dialog__title">{{title}}</view>
		<view class="jy__dialog__body"><slot></slot></view>
		<template v-if="showNormalFooter">
			<view slot="footer" name="footer">
				<van-button @click="closeBtn">{{ cancelBtnText }}</van-button>
				<van-button type="primary" @click="confirmBtn">{{ confirmBtnText }}</van-button>
			</view>
		</template>
		<template v-if="showFooter">
			<slot slot="footer" name="footer"></slot>
		</template>
	</view>
</template>

<script>
export default {
	name: 'JyDialog',
	props: {
		// 标题
		title: {
			type: String,
			default: '提示'
		},
		// 弹窗宽度
		width: {
			type: String,
			default: ''
		},
		// 弹窗是否展示
		isShow: {
			type: Boolean,
			default: false
		},
		// 取消按钮名称
		cancelBtnText: {
			type: String,
			default: '取 消'
		},
		// 确定按钮名称
		confirmBtnText: {
			type: String,
			default: '确 定'
		},
		// 是否展示自定义底部
		showFooter: {
			type: Boolean,
			default: false
		},
		// 是否展示默认的底部形式，包含取消和确定按钮
		showNormalFooter: {
			type: Boolean,
			default: false
		}
		// // 是否将自身插入至 body 元素，有嵌套的弹窗时一定要设置
		// appendToBody: {
		//   type: Boolean,
		//   default: false,
		// },
	},
	data() {
		return {};
	},
	methods: {
		// 确定
		confirmBtn() {
			this.$emit('handleConfirmClick', false);
		},
		// 关闭
		closeBtn() {
			this.$emit('handleCloseClick', false);
		}
	},
	computed: {
		visible: {
			get() {
				return this.isShow;
			},
			set(val) {
				this.$emit('update:isShow', false);
			}
		}
	},
	mounted() {}
};
</script>

<style scoped lang="scss">
.jy__dialog {
	position: fixed;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90vw;
	height: 700rpx;
	z-index: 999;
	border: 1px solid #dedede;
	box-shadow: #dedede;
	&__title{
		height: 100rpx;
		background-color: #272A3B;
		color: #fff;
		text-align: center;
		line-height: 100rpx;
	}
	&__body{
		background-color: #fff;
		height: 600rpx;
		padding: 20rpx;
	}
}
</style>

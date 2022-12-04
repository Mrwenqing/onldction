<template>
	<view class="iTabList">
		<view class="tab">
			<view class="w" @click="pageTo(item)" v-for="(item,index) in list" :key="index">
				<text class="icon" :class="item.icon"></text>
				<text class="txt">{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'iTabList',
		props: {
			list: {
				type: Array,
				default: () => ([])
			}
		},
		data() {
			return {

			}
		},
		methods: {
			pageTo(item) {
				if (this.$store.getters.hasLogin) {
					if(item.isLogin){
						this.navTo(item.page)
					}else{
						uni.reLaunch({
							url:item.page
						})
					}
				} else {
					if (!item.isLogin) {
						uni.reLaunch({
							url:item.page
						})
					} else {
						console.log('请先登录');
						this.navTo("/pages/login/login")
						return
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	.iTabList {
		.tab {
			width: 700rpx;
			height: 150rpx;
			background-color: #fff;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			border-radius: 15rpx;
			box-shadow: 0 2rpx 24rpx rgba(0, 0, 0, 0.10);
			bottom: -30rpx;
			display: flex;

			.w {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;

				.icon {
					color: #fdc210;
					margin-bottom: 10rpx;
					font-size: 36rpx;
				}

				.txt {
					font-size: 26rpx;
				}
			}
		}
	}
</style>

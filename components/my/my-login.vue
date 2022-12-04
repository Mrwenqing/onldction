<template>
	<view class="loginNow">
		<view class="user" @click="hasLogin?navTo('/pages/editUser/editUser'):navTo('/pages/login/login')">
			<view class="left">
				<image :src="hasLogin?'../../static/123.jpeg':'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ssfiction.com%2Fwp-content%2Fuploads%2F2020%2F08%2F20200805_5f2a934673db4.jpg&refer=http%3A%2F%2Fwww.ssfiction.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672688668&t=ffca887f262af1044ad1cb8f5d4bb3ba'" mode=""></image>
			</view>
			<view v-if="hasLogin" class="right">
				<text class="h3 Login">ztl</text>
				<text>8888</text>
				<text class="iconfont icon-leimupinleifenleileibie  icon"></text>
			</view>
			<view v-else class="right">
				<text class="h3 Login">立即登录</text>
				<text>登录解锁更多功能</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from "vuex"
	export default {
		props: {

		},
		computed: {
			...mapGetters(['hasLogin'])
		},
		data() {
			return {

			}
		},
		methods: {}

	}
</script>

<style lang="scss">
	.loginNow {
		.user {
			width: 700rpx;
			height: 150rpx;
			margin: auto;
			display: flex;
			position: relative;
			.left {
				image {
					width: 130rpx;
					height: 130rpx;
					border-radius: 50%;
					margin-right: 30rpx;
				}
			}

			.right {
				text {
					font-size: 30rpx;
					display: block;
					color: #fff;
				}
				.icon{
					position: absolute;
					right: 0;
					bottom: 70rpx;
				}

				.Login {
					font-size: 40rpx;
				}
			}
		}
	}
</style>

<template>
	<view class="login-box">
		
		<view class="login-bg"></view>
		
		<view v-show="flag===1" class="login-content">
				<view class="login-title">
					<text>登 录</text>
				</view>
				<view class="loginForm">
					<i-input :loginInput="loginInput"></i-input>
				</view>
				<view class="tologinOrFgtpsw">
					<text class="goLogin" @click="flag=0">去注册</text>
					<text class="fgtPsw" @click="fgtPsw">忘记密码？</text>
				</view>
				<view class="elselogin">
					<view class="elseIcon">
						<text class="icon iconfont icon-weixin"></text>
					</view>
				</view>
				<view class="agreen">
					<!-- <checkbox-group @change="selectCk">
						<label>
							<checkbox :value="yes" /><text>已阅读并同意用户协议&隐私声明</text>
						</label>
					</checkbox-group> -->
					<checkbox :checked="isChecked" @click="isChecked=!isChecked" /><text>已阅读并同意用户协议&隐私声明</text>
				</view>
		</view>
		
		
		
		<view v-show="flag===0" class="login-content">
				<view class="login-title">
					<text>注 册</text>
				</view>
				<view class="loginForm">
					<i-input :zhuceList="zhuceList"></i-input>
				</view>
				<view class="tologinOrFgtpsw">
					<text class="goLogin" @click="flag=1">去登录</text>
					<text class="fgtPsw" @click="fgtPsw">忘记密码？</text>
				</view>
				<view class="elselogin">
					<view class="elseIcon">
						<text class="icon iconfont icon-weixin"></text>
					</view>
				</view>
		</view>

	</view>
</template>

<script>
	import iInput from "@/components/i-input.vue"
	import loginInput from "@/config/login/loginInput.js"
	import zhuceList from "@/config/login/zhuce.js"
	export default {
		components:{
			iInput
		},
		onLoad() {
			// console.log(this.zhuceList,'zhuceList');
		},
		data() {
			return {
				// flag为0是注册reg  flag为1是登录login
				flag:1,
				yes:'',
				isChecked:false,
				loginInput:loginInput(),
				zhuceList:zhuceList()
			}
		},
		methods: {
			selectCk(e){
				console.log(e,'e');
			},
			fgtPsw(){
				this.navTo("/pages/forgetPassword/forgetPassword")
			}
		}
	}
</script>

<style lang="scss">
	page,.login-box{
		height: 100%;
		display: flex;
		flex-direction: column;
		.login-top{
			height: 150rpx;
			background:linear-gradient(to right,#84f5ba,#8dd9ea);
		}
		.login-content{
			border-radius: 30rpx;
			border-bottom-right-radius: 0;
			border-bottom-left-radius: 0;
			transform: translateY(-25rpx);
			background-color: white;
			flex: 1;
			padding: 70rpx 70rpx 0 70rpx;
			.login-title{
				font-size: 44rpx;
				display: flex;
				height: 108rpx;
			}
			.loginForm{
				width: 610rpx;
			}
			.tologinOrFgtpsw{
				height: 100rpx;
				align-items: center;
				display: flex;
				justify-content: space-between;
				margin:30rpx 0;
				.goLogin,.fgtPsw{
					font-size: 30rpx;
				}
				.goLogin{
					color: #5ccc84;
				}
				.fgtPsw{
					color: #a9a5a0;
				}
			}
			
			.elselogin{
				width: 610rpx;
				height: 100rpx;
				// background-color: red;
				display: flex;
				align-items: center;
				justify-content: center;
				.elseIcon{
					width: 100rpx;
					// justify-content: center;
					width: 100rpx;
					height: 100rpx;
					// background-color: black;
				}
					.icon{
						font-size: 105rpx;
						color: #5ccc84;
					}
			}
			
			
			.agreen{
				margin-top: 40rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #a19d96;
				font-size: 30rpx;
			}
		}
	}
</style>

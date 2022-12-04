<template>
	<view class="loginnig">
		<!-- 登录 -->
		<view v-if="item.flag===1" class="login-input" v-for="(item,index) in loginInput" :key="index">
			<view class="inputIcon">
				<text :class="item.icon" class="iconfont">
					</text>
			</view>
			<view class="userInput">
				<input v-if="item.model==='username'" type="text" class="ipt" placeholder="请输入用户名"
					v-model="form.username">
				<input v-if="item.model==='password'" type="password" class="ipt" placeholder="请输入密码"
					v-model="form.password">
			</view>
		</view>
		<view v-if="item.flag===2" class="login-input" v-for="(item,index) in loginInput" :key="index">
			<button class="btn-login" @click="signIn">{{item.title}}</button>
		</view>

		<!-- 注册 -->
		<view v-if="item.flag===1" class="login-input" v-for="(item,index) in zhuceList" :key="index">
			<view class="inputIcon">
				<text :class="item.icon" class="iconfont"></text>
			</view>
			<view class="userInput">
				<input v-if="item.model==='username'" type="text" class="ipt" placeholder="请输入用户名"
					v-model="regForm.username">
				<input v-if="item.model==='password'" type="password" class="ipt" placeholder="请输入密码"
					v-model="regForm.password">
				<input v-if="item.model==='repassword'" type="password" class="ipt" placeholder="请输入确认密码"
					v-model="regForm.repassword">
			</view>
		</view>
		<view v-if="item.flag===2" class="login-input" v-for="(item,index) in zhuceList" :key="index">
			<button class="btn-login" @click="register">{{item.title}}</button>
		</view>

	</view>
</template>

<script>
	import registerApi from "@/api/login/index.js"
	export default {
		name: "i-input",
		props: {
			loginInput: {
				type: Array,
				default: () => ([])
			},
			zhuceList: {
				type: Array,
				default: () => ([])
			}
		},
		onLoad() {},
		data() {
			return {
				form: {
					username: '',
					password: '',
				},
				regForm: {
					username: '',
					password: '',
					repassword: ''
				}
			};
		},
		methods: {
			signIn() {
				console.log('登录');
				console.log("form", this.form);
			},
			register() {
				console.log('注册');
				console.log("regForm", this.regForm);
				if (this.regForm.username == '') {
					uni.showToast({
						title: "用户名不能为空",
						duration: 500,
						icon: 'none',
					});
					return
				} else if (this.regForm.username.length <= 5) {
					uni.showToast({
						title: "用户名应在5-20之间",
						duration: 500,
						icon: 'none',
					});
					return
				}
				if (this.regForm.password == '') {
					uni.showToast({
						title: "密码不能为空",
						duration: 500,
						icon: 'none',
					});
					return
				}
				if (this.regForm.repassword == '') {
					uni.showToast({
						title: "确定密码不能为空",
						duration: 500,
						icon: 'none',
					});
					return
				}

				if (this.regForm.password !== this.regForm.repassword) {
					uni.showToast({
						title: "密码和确认密码需要相同",
						duration: 500,
						icon: 'none',
					});
					return
				}
				console.log('注册接口');

				uni.showToast({
					title: "提交中",
					duration: 4000,
					icon: "loading",
					success: () => {
						this.handleregister(this.regForm)
					},
					fail: () => {
						console.log('error');
						uni.hideToast()
					}
				})

			},
			async handleregister(form) {
				try {

					const res = await registerApi.register(form)
					console.log(res, 'res');
					uni.showToast({
						title: "注册成功",
						duration: 2000,
						icon: 'none',
						success:()=>{
							this.navTo("/pages/login/login")
						}
					});
					

				} catch (e) {
					//TODO handle the exception
					console.log(e, 'e');
				}
			}
		}
	}
</script>

<style lang="scss">
	.login-input {
		height: 100rpx;
		margin-bottom: 50rpx;
		border-radius: 10rpx;
		background-color: #f5f5f5;
		display: flex;

		.btn-login {
			background-color: #5ccc84;
			color: white;
			width: 100%;
		}

		.inputIcon {
			width: 100rpx;
			height: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.userInput {
			flex: 1;

			.ipt {
				height: 100rpx;
				font-size: 35rpx;
			}
		}
	}
</style>

<template>
	<view class="i-bar-list">
		<view class="barList" @click="aaa(item)" v-for="(item,index) in list" :key="index" >
			<view class="txt">
				<text class="icon" :class="item.icon"></text>
				<text class="title">{{item.title}}</text>
				
			</view>
			<text class="righticon" :class="item.rightIcon"></text>
		</view>
	</view>
</template>

<script>
	export default{
		name:'ibarList',
		props:{
			list:{
				type:Array,
				default:()=>([])
			}
		},
		onLoad() {
		},
		data(){
			return{
				
			}
		},
		methods:{
			aaa(item){
				if(this.$store.getters.hasLogin){
					this.navTo(item.page)
				}else{
					if(!item.isLogin){
						this.navTo(item.page)
					}else{
						console.log('请先登录')
						this.navTo("/pages/login/login")
						return 
					}
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.barList {
		box-sizing: border-box;
		width: 700rpx;
		height: 95rpx;
		// background-color: pink;
		margin: auto;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #e5e5e5;
		align-items: center;
		padding: 0 45rpx;
		.txt{
			display: flex;
			align-items: center;
			.title{
				margin-left: 20rpx;
				font-size: 14rpx;
			}
			.icon{
				color: #006dee;
			}
		}
		
		.righticon{
			transform: rotate(180deg);
			color: #cccccc;
		}
	}
</style>

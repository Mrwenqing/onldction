<template>
	<view class="my-container animate__animated animate__fadeInDown">
		<view class="my-box  ">
			
			<my-login></my-login>
			
			<my-tab-list :list="item" :tabList="tabList" v-for="(item,index) in tabList" :key="index"></my-tab-list>
		</view>
		
		<my-bar-list :list="item" :barList="barList" v-for="(item,index) in barList" :key="index"></my-bar-list>
		
	</view>
</template>

<script>
	import myLogin from '@/components/my/my-login.vue'
	import myBarList from "@/components/my/my-bar-list.vue"
	import myTabList from "@/components/my/my-tab-list.vue"
	import barList from "@/config/my/my-bar-list.js"
	import tabList from "@/config/my/my-tab-list.js"
	export default {
		components:{
			myBarList,
			myTabList,
			myLogin
		},
		data() {
			return {
				barList:barList(),
				tabList:tabList(),
				page:1,

			}
		},
		onLoad() {

		},
		methods: {
		},
		// 监听原生按钮事件
		onNavigationBarButtonTap() {
			this.navTo("/pages/setting/setting")
		}
	}
</script>

<style lang="scss">
	
	page,.my-container{
		.my-box{
			width: 750rpx;
			height: 300rpx;
			background-color: #5ccc84;
			margin-bottom: 70rpx;
			border-radius: 100rpx;
			border-top-left-radius: 0;
			border-top-right-radius: 0;
			padding-top: 50rpx;
			position: relative;

		}
		
	}

</style>

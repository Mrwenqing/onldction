<template>
	<view class="couponBox">
		<!-- 我的优惠券 -->
		<CouponItem v-for="(item,index) in rowsList" :key="index" :item="item" current="home"></CouponItem>
		<noList></noList>
	</view>
</template>

<script>
	import CouponItem from "@/components/coupon-item/coupon-item.vue"
	import indexAPi from "@/api/index.js"
	export default {
		data() {
			return {
				rowsList:[],
				data:{
					page:1,
					limit:10
				}
			};
		},
		components:{
			CouponItem,
		},
		created(){
			this.getList()
		},
		methods:{
			async getList (){
				let {code,data} =await indexAPi.userCoupon(this.data)
				
				if(code==20000){
					this.rowsList=data.rows
					// console.log(data.rows)
					
				}
			}
			
			
		}
	}
</script>

<style lang="scss">
.couponBox{
	padding: 30rpx;
	box-sizing: border-box;
}
</style>

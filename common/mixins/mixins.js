export default{
	data(){
		return{
			
		}
	},
	methods:{
		navTo(url,options={}){
			if(!url) return '路径不对'
			
			if(options.login && !this.$store.getters.hasLogin){
				uni.navigateTo({
					url : '/pages/login/login'
				})
				return
			}
			
			uni.navigateTo({
				url
			})
		}
	}
	
}
const rightIcon="iconfont icon-fanhui"

export default()=>{
	return [
		[
			{
				id:1,
				title:'我的优惠券',
				icon:"iconfont icon-9",
				rightIcon,
				page:"/pages/disCard/disCard",
				isLogin:true
			},
			{
				id:2,
				title:'常见问题',
				icon:"iconfont icon-help",
				rightIcon,
				page:"/pages/FAQ/FAQ",
			},
			{
				id:3,
				title:"设置",
				icon:'iconfont icon-leimupinleifenleileibie',
				rightIcon,
				page:"/pages/setting/setting"
			}
		]
	]
}
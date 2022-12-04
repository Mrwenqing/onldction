import request from "@/utils/request.js"

// 注册接口
const register=(data)=>{
	return request({
		url:'/mobile/reg',
		method:"POST",
		data
	})
}

export default{
	register
}
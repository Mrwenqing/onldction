import config from "@/config/index.js"
import store from "@/store/index.js"
const request = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: config.baseUrl + options.url,
			method: options.method || "GET",
			header: {
				appid: "bd9d01ecc75dbbaaefce",
				...options.header,
			},
			data: options.data || {},
			success: (res) => {
				resolve(res)
			},
			fail: (error) => {
				reject(error, 'errpr')
			}
		})
	})
}

export default request

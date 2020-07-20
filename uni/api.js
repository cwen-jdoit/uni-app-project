const BASE_URL = 'http://localhost:8082'
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: BASE_URL + options.url,
			methods: options.methods || 'GET',
			data: options.data || {},
			success(res){
				if(res.data.status !== 0){
					return uni.showToast({
						title:'请求数据失败'
					})
				}
				resolve(res)
			},
			fail(err){
				return uni.showToast({
					title:'接口请求失败'
				})
				reject(err)
			}
		})
	})
}
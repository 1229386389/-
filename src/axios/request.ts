//服务器接口地址
// const baseURL:string='http://xxxxxx' 
 //本地调试接口地址
 const baseURL:string='http://localhost:3000'
 export interface result {
	 code: number;
	 result: object | Array<object> | string
	 errMsg: string
 }
 
function request<T>(url:string, method: "GET" | "POST" = 'GET',data?: any):Promise<T>{
      return new Promise(function(resolve, reject){
			//这里推荐可以写没有token，跳转至登陆界面的,使用uni.navigate就可以了 
              let header:object
			  // 获取token
                header = {
                  'content-type': 'application/json',
				  'Cookie': uni.getStorageSync('cookie')
                };
              uni.request({
                    url: baseURL + url,
                    method: method,
                    data: data,
                    header: header,
                    success(res:any) {
						if(res.data)
						resolve(res.data)
						resolve(res)
                    },
                    fail(err:any) {
						reject(err)
                    }
                    
                  })
                  
            })
            
    }
 
 
export {request,baseURL}
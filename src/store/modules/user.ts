export interface Profile {
	avatarUrl:           string;
	backgroundUrl:       string;
	birthday:            number;
	city:                number;
	gender:              number;
	userId:              number;
	nickname:            string;
}
export interface user {
	profile: Profile;
	cookie:string;
	
}
const state:user = {
  // 用户信息
  profile: JSON.parse(uni.getStorageSync('profile') || '{}'),
  cookie:uni.getStorageSync('cookie') || null
}

// 用户模块
export default {
  namespaced: true,
  state,
  mutations: {
	  logout (state: user):void {
	    // 这里的 `state` 对象是模块的局部状态
	    state.profile = {
			avatarUrl: '',
			backgroundUrl:      '',
			birthday:            1,
			city:               1,
			gender:             1,
			userId:              0,
			nickname:           ''
		}
		state.cookie = ''
		uni.removeStorageSync('cookie')
		uni.removeStorageSync('profile')
	  },
	  login (state: user, info:Profile):void{ // 登陆
		  state.profile = info
		  uni.setStorageSync('profile', JSON.stringify(info))
	  },
	  setCookie(state: user, cookie:string){ // 设置cookie 持久化保存
		  state.cookie = cookie
		  uni.setStorageSync('cookie', cookie)
	  }
  }
}

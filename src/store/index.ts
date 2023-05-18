import type { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import user from './modules/user';
import type { RootState } from './type';
interface State {
    nowMusic: object
  }
// 定义 injection key 
export const key: InjectionKey<Store<State>> = Symbol()
// 创建一个新的 store 实例 StoreOptions<RootState>
const store:Store<RootState> = createStore({
    state () {
		return{
			nowMusic: {}
		}
    },
    modules:{
        user
   }
})
export default store
import { request } from '../request'
export const getMusicUrl = (id:number) => {
	return request('/song/url/v1', 'GET',{id, level:'standard'})
}
import { request } from '../request'
import type { qrKeyResult, createQrKeyResult, checkQrKeyresult, checkStatusResult, getMyListResult, getListMusicResult } from '../type/login'
// 生成qrkey
export const getQrKey = (timestamp:number) => {
	return request<qrKeyResult>('/login/qr/key?timestamp='+timestamp, 'GET')
}
// 获取qrcode的地址和base64
export type createKey = {
	key:string;
	qrimg?:boolean;
}

export const createQrKey = (data:createKey) => {
	return request<createQrKeyResult>('/login/qr/create', 'GET', data)
}

// 轮询二维码状态
export type checkKey = {
	key:string
}

export const checkQrKey = (data:checkKey, timestamp:number) => {
	return request<checkQrKeyresult>('/login/qr/check?timestamp='+timestamp, 'GET', data)
}

export const checkStatus = (cookie:string) => { // 查询登陆状态 获取用户信息
	return request<checkStatusResult>('/login/status?cookie='+cookie, 'GET')
}

export type MyListReq = {
	uid: string;
	limit?:number;
	offset?:number;
}
export const getMyList = (data:MyListReq) => { // 获取我的歌单
	return request<getMyListResult>('/user/playlist', 'GET', data)
}

export type getListMusic =  {
	id:string;
	limit?:number;
	offset?:number;
}
export const getListMusic = (data:getListMusic) => { // 获取我的歌单
	return request<getListMusicResult>('/playlist/track/all', 'GET', data)
}
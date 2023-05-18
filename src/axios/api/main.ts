import { request } from '../request'
import type { playListResult, floorListResult } from '../type/main'
// 获取热门歌单
// 请求参数类型
export type playListReq = {
	limit: number
	order?: string;
	 cat?: string;
}
// 限制返回数据类型
export const getPlayList = (data:playListReq) => {
	return request<playListResult>('/top/playlist', 'GET', data)
}

// 获取热门歌单的详情
// 请求参数类型
export type floorListReq = {
	id: string;
	s?: number;
}
// 限制返回数据类型
export const getFloorList = (data: floorListReq) => {
	return request<floorListResult>('/playlist/detail', 'GET', data)
}
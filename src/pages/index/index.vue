<template>
  <block>
    <!-- 导航栏 -->
    <MyNav @openMy="open"></MyNav>
    <!-- 歌单轮播图 -->
    <view class="container">
      <swiper indicator-dots autoplay>
        <swiper-item v-for="item in playList" :key="item.id">
          <navigator class="swiper-item">
            <view class="text">{{ item.name }}</view>
            <image mode="aspectFill" :src="item.coverImgUrl"></image>
          </navigator>
        </swiper-item>
      </swiper>
    </view>
    <!-- 分类导航 -->
    <view class="nav-list">
      <typeItem v-for="item2 in typeList" :key="item2.id" :type="item2" />
    </view>
    <!-- 歌单分类 楼梯分层 -->
    <uni-card
      title="热门歌单"
      extra=">"
      class="card"
      margin="0px"
      padding="0px"
      spacing="0px"
      :is-full="true"
    >
      <view v-for="item2 in playList" :key="item2.id" class="floor-list">
        <!-- 楼层 item 项 -->
        <floor-list :id="item2.id"></floor-list>
      </view>
    </uni-card>
    <!-- 左侧弹出我的界面 -->
    <uni-popup ref="popup" background-color="#fff">
      <Mypop></Mypop>
    </uni-popup>
  </block>
</template>

<script setup lang="ts">
import { getPlayList } from '../../axios/api/main'
import type { playListReq } from '../../axios/api/main'
import type { playListResult, Playlist } from '../../axios/type/PlayList.ts'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { typeList } from '../../static/const'
const playList = ref<Playlist[]>([]) // 轮播图
const popup = ref(null)
const req: playListReq = {
  // 请求参数
  order: '',
  cat: '',
  limit: 4
}
onLoad(async () => {
  // 获取歌单信息
  const result: playListResult = await getPlayList(req)
  playList.value = result.playlists
})
const open = () => {
  // 开启弹窗
  popup.value.open('left')
}
</script>

<style lang="scss" scoped>
.container {
  // padding: 20px;
  font-size: 14px;
  // line-height: 24px;
}

swiper {
  height: 330rpx;

  .swiper-item {
    width: 100%;
    height: 100%;

    image {
      width: 100%;
      height: 100%;
    }
  }

  .text {
    background: #999;
    opacity: 0.9;
    position: absolute;
    width: 100%;
    height: 15%;
    top: 85%;
  }
}

.floor-list {
  width: 100%;
  height: auto;
}

.nav-list {
  display: flex;
  justify-content: space-around;
  background-color: #505050;
}
</style>

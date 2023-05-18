<template>
  <block>
    <!-- 楼层标题 -->
    <!-- <image :src="flooList.coverImgUrl" class="floor-title"></image> -->
    <view class="text">{{ flooList.name }}</view>
    <view class="floor-img-box">
      <!-- 左侧大图片的盒子 -->
      <view class="left-img-box">
        <navigator>
          <image :src="flooList.coverImgUrl" mode="widthFix"></image>
        </navigator>
      </view>
      <!-- 右侧 4 个小图片的盒子 -->
      <view class="right-img-box">
        <navigator v-for="item2 in flooList.tracks" :key="item2.id" class="right-img-item">
          <image :src="item2.al.picUrl"></image>
        </navigator>
      </view>
    </view>
  </block>
</template>

<script lang="ts" setup>
import { ref, defineProps, onBeforeMount } from 'vue'
import type { floorListResult, Playlist } from '../../axios/type/FloorList.ts'
import { getFloorList } from '../../axios/api/main'
import { onLoad } from '@dcloudio/uni-app'
const flooList = ref<Playlist | object>({}) // 通过id获取的当前歌单详细信息
interface floorListReq {
  // 请求req接口约束类型
  id: string
  s?: number
}
const props = defineProps<floorListReq>() // 获取props
onBeforeMount(async () => {
  // 在dom挂载前获取数据
  const result: floorListResult = await getFloorList({ id: props.id })
  flooList.value = result.playlist
  flooList.value.tracks = flooList.value.tracks.slice(0, 4)
})
</script>

<style lang="scss" scoped>
.floor-title {
  height: 60rpx;
  width: 100%;
  display: flex;
}
.left-img-box {
  flex: 1;
  image {
    height: 100%;
    width: 100%;
  }
}
.right-img-box {
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  .right-img-item {
    flex-wrap: wrap;
    flex: 1;
    // justify-content: space-around;
    width: 100%;
    height: 50%;
    margin: 0px;
    padding: 0px;
    display: flex;
    // flex-direction: column;
    image {
      width: 124.5px;
      height: 100%;
    }
  }
}

.floor-img-box {
  display: flex;
  // padding-left: 10rpx;
}
.text {
  border: 1px solid white;
  border-radius: 10% 0% 0% 0%;
  width: 100%;
  height: 20%;
  color: white;
  background-color: darkred;
  text-align: right;
}
</style>

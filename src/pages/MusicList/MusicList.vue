<template>
  <view>
    <view class="list">
      <uni-card title="歌单">
        <view
          v-for="item in list"
          :key="item.id"
          class="ListItem"
          :style="{ backgroundImage: `url(${item.picUrl})` }"
          @click="nav(item.id)"
        >
          <!-- <image :src="item.picUrl" mode="aspectFill"></image> -->
          <view class="rigthbox">
            {{ item.name }}
            <view class="bottom">{{ item.alia[0] }}</view>
          </view>
        </view>
      </uni-card>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getListMusic } from '../../axios/api/login'
// import { Song } from '../../axios/type/login'
interface item {
  name: string
  id: number
  alia: string[]
  picUrl: string
}
const req = {
  // 请求参数
  id: '',
  offset: 0,
  limit: 10
}
const list = ref<item[]>([])
onLoad((Option) => {
  req.id = Option.id
  getList()
})

const getList = async () => {
  // 获取歌单数据
  const { songs } = await getListMusic(req)
  list.value = songs.map((item) => {
    return {
      name: item.name,
      id: item.id,
      alia: item.alia,
      picUrl: item.al.picUrl
    }
  })
}
const nav = (id: number) => {
  uni.navigateTo({
    url: `../play/play?id=${id}`
  })
}
</script>

<style lang="scss" scoped>
.ListItem {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  border-radius: 5%;
  height: auto;
  color: navajowhite image {
    flex: 10;
    height: 2.5rem;
  }
  .rigthbox {
    flez: 1;
  }
}
</style>

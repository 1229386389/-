<template>
  <uni-card padding="0" spacing="0">
    <template #cover>
      <view v-if="$store.state.user.cookie" class="custom-cover">
        <image class="cover-image" mode="aspectFill" :src="$store.state.user.profile.avatarUrl">
        </image>
        <view class="cover-content">
          <text class="uni-subtitle uni-white">{{ $store.state.user.profile.nickname }}</text>
        </view>
      </view>
      <view v-else class="custom-cover" @click="login">
        <uni-icons type="personadd-filled" size="30"></uni-icons>
        <text>登陆</text>
      </view>
    </template>
    <uni-list>
      <uni-list-item title="我的歌单" show-arrow></uni-list-item>
      <uni-list-item title="我的动态" show-arrow></uni-list-item>
      <uni-list-item title="历史记录" show-arrow></uni-list-item>
    </uni-list>
    <view slot="actions" class="card-actions no-border">
      <view class="card-actions-item">
        <uni-icons type="starhalf" size="18" color="#999"></uni-icons>
        <text class="card-actions-item-text">我的关注</text>
      </view>
      <view class="card-actions-item">
        <uni-icons type="star" size="18" color="#999"></uni-icons>
        <text class="card-actions-item-text">我的粉丝</text>
      </view>
    </view>
  </uni-card>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore()
const info = {
  name: '斯大林猫',
  img: 'https://img01.yzcdn.cn/vant/cat.jpeg'
}
const login = () => {
  // 跳转到登陆界面
  uni.navigateTo({
    url: '../../pages/login/login'
  })
}
const actionsClick = (): void => {}
</script>

<style scoped>
.custom-cover {
  width: 100%;
}
.card-actions {
  display: flex;
}
</style>

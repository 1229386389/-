<template>
  <view class="item" @click="nav(item.id)">
    <image :src="item.coverImgUrl" mode="aspectFill"></image>
    <view class="rightbox">
      {{ item.name }}
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'MusicItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup() {
    const nav = (id: string) => {
      // 跳转到歌单详情
      uni.navigateTo({
        url: `../MusicList/MusicList?id=${id}`
      })
    }
    return { nav }
  }
}
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  height: 9.375rem;
  display: flex;
  margin-top: 0.9375rem;
  image {
    flex: 2;
    width: 300px;
    height: 150px;
    border-radius: 25%;
  }
  .rightbox {
    flex: 1;
    font-size: 1.25rem;
  }
}
</style>

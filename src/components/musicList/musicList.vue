<template>
  <view>
    <image :src="topImg"></image>
    <view class="list">
      <uni-indexed-list :options="list" :show-select="true" @click="bindClick" />
    </view>
  </view>
</template>

<script>
export default {
  name: 'MusicList',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    topImg: {
      type: String,
      default: ''
    }
  },
  setup() {
    const bindClick = () => {}
  }
}
</script>

<style></style>

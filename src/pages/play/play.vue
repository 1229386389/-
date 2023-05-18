<template>
  <view>
    <audio :src="url" controls></audio>
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { getMusicUrl } from '../../axios/api/play'
import { ref } from 'vue'
const url = ref<string>('')
onLoad(async (option) => {
  const id = option.id
  const { data } = await getMusicUrl(id)
  url.value = data[0].url
})
</script>

<style></style>

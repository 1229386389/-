<template>
  <view
    class="my"
    :style="{ backgroundImage: 'url(' + $store.state.user.profile.backgroundUrl + ')' }"
  >
    <Mypop></Mypop>
    <!-- 我的歌单 -->
    <view class="list">
      <uni-card title="我的歌单" padding="0" spacing="0">
        <musicItem v-for="item in myList" :key="item.id" :item="item"></musicItem>
      </uni-card>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { getMyList } from '../../axios/api/login'
const store = useStore()
interface item {
  name: string
  id: number
  coverImgUrl: string
}
const myList = ref<item[]>([])
const getList = async () => {
  // 获取我的歌单
  const { playlist: result } = await getMyList({
    uid: store.state.user.profile.userId,
    limit: 3,
    offset: 0
  })
  myList.value = result.map((item) => {
    return { name: item.name, id: item.id, coverImgUrl: item.coverImgUrl }
  })
}
getList() // 获取歌单
</script>

<style lang="scss" scoped>
.info {
  background-color: darkred;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  .mainInfo {
    .userImgae {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    .name {
      color: aliceblue;
      float: left;
    }
  }
}
.main {
  border-top: 1px solid ＃A9A9A9;
  box-shadow: 0px -1px teal;
  border-radius: 4px;
  .col {
    margin: 10px 0px;
    box-shadow: 2px 2px #dcdcdc;
    display: flex;
    justify-content: space-between;
    .choice {
      font-weight: bold;
    }
  }
}
.demo-uni-row {
  margin-bottom: 10px;
  /* QQ、字节小程序文档写有 :host，但实测不生效 */
  /* 百度小程序没有 :host，需要设置block */
  /* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
  display: block;
  /* #endif */
}

/* 支付宝小程序没有 demo-uni-row 层级 */
/* 微信小程序使用了虚拟化节点，没有 demo-uni-row 层级 */
/* #ifdef MP-ALIPAY || MP-WEIXIN */
:deep .uni-row {
  margin-bottom: 10px;
}
/* #endif */

.demo-uni-col {
  margin: 5px 0px;
  height: 36px;
  border-radius: 4px;
}
.my {
  background-size: cover;
  width: 23.4375rem;
  height: auto;
  margin-top: -0.9375rem;
  padding-top: 1.875rem;
}
.list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

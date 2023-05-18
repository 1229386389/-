// An highlighted block
<template>
  <view class="content">
    <view v-if="type === 'normal'" class="normal">
      <view class="avatorWrapper">
        <view class="avator">
          <image class="img" src="../../static/logo.png" mode="widthFix"></image>
        </view>
      </view>
      <view class="form">
        <view class="inputWrapper">
          <input v-model="phone" class="input" type="text" placeholder="请输入手机号" />
        </view>
        <view class="inputWrapper">
          <input v-model="password" class="input" type="password" placeholder="请输入密码" />
        </view>
        <view class="loginBtn" @click="normlLogin">
          <text class="btnValue">登录</text>
        </view>
      </view>
    </view>
    <view v-if="type === 'qrcode'" class="qrcode"> <image :src="qrCodeImg"></image> </view>
    <view v-if="type === 'weixin'" class="weixin">
      <button @click="wxLogin">微信登陆</button>
    </view>
    <view class="tools">
      <uni-icons type="phone" size="30" @click="type = 'normal'"></uni-icons>
      <text class="btnValue" @click="wxLogin">使用手机登陆</text>
      <uni-icons type="weixin" size="30" @click="type = 'weixin'"></uni-icons>
      <text class="btnValue">使用微信登陆</text>
      <uni-icons type="scan" size="30" @click="qrLogin"></uni-icons>
      <text class="btnValue" @click="wxLogin">使用二维码</text>
    </view>
    <view class="forgotBtn">
      <text>找回密码</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { getQrKey, createQrKey, checkQrKey, checkStatus } from '../../axios/api/login'
import { useStore } from 'vuex'
import { ref } from 'vue'
const phone = ref<string>('')
const password = ref<string>('')
const type = ref<string>('normal') // 当前显示什么登陆方式
const qrCodeImg = ref<string>('') // qrcode
const store = useStore()
const normlLogin = () => {
  // 正常登陆
}
const wxLogin = () => {
  // 使用微信登陆
  uni.login({
    // 获取code换取appid 没申请所以不请求
    success: (res) => {
      console.log(res)
      uni.getUserProfile({
        desc: '测试',
        success: (res) => {
          console.log(res)
        },
        complete: (res) => {
          console.log(res)
        }
      })
    }
  })
}
const getuserInfo = async () => {
  // 获取用户信息
  const { data: userInfo } = await checkStatus(store.state.user.cookie)
  // 保存到vuex中
  store.commit('user/login', {
    avatarUrl: userInfo.profile.avatarUrl,
    backgroundUrl: userInfo.profile.backgroundUrl,
    birthday: userInfo.profile.birthday,
    city: userInfo.profile.city,
    gender: userInfo.profile.gender,
    userId: userInfo.profile.userId,
    nickname: userInfo.profile.nickname
  })
}
const qrLogin = async () => {
  // 扫码登陆
  type.value = 'qrcode'
  let time = Date.now() // 时间戳
  const { data: result } = await getQrKey(time) // 获取key
  const unikey: string = result.unikey // key
  const { data: result2 } = await createQrKey({ key: unikey, qrimg: true }) // 获取qrcode base64和网页
  qrCodeImg.value = result2.qrimg // 展示qrcode供扫
  // 没有cookie才轮询
  const timer = setInterval(async () => {
    // 3秒轮询一次
    // 轮询扫码状况
    time = Date.now()
    const result3 = await checkQrKey({ key: unikey }, time)
    if (result3.code === 803 || store.state.user.cookie) {
      // 如果为已登陆
      uni.showToast({
        title: '登陆成功'
      })
      store.commit('user/setCookie', result3.cookie)
      // 清除定时器
      clearInterval(timer)
      // 获取用户信息并储存
      getuserInfo()
    }
  }, 3000)
}
</script>

<style scoped>
.content {
  background: #377eb4;
  width: 100vw;
  height: 100vh;
}
.avatorWrapper {
  height: 30vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.avator {
  width: 200upx;
  height: 200upx;
  overflow: hidden;
}
.avator .img {
  width: 100%;
}
.form {
  padding: 0 100upx;
  margin-top: 80px;
}
.inputWrapper {
  width: 100%;
  height: 80upx;
  background: white;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 0 20px;
  margin-top: 25px;
}
.inputWrapper .input {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 15px;
}
.loginBtn {
  width: 100%;
  height: 80upx;
  background: #77b307;
  border-radius: 50upx;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginBtn .btnValue {
  color: white;
}
.forgotBtn {
  text-align: center;
  color: #eaf6f9;
  font-size: 15px;
  margin-top: 20px;
}
.tools {
}
</style>

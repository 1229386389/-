<template>
				<view class="box-bg">
					<uni-nav-bar backgroundColor = 'darkred'>
						<block v-slot:left><uni-icons  type="settings-filled" size="18" @click="$emit('openMy')"></uni-icons></block>	
						<view class="input-view">
							<uni-icons class="input-uni-icon" type="search" size="18" color="#999" />
							<input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词"
								@confirm="confirm" />
						</view>
					</uni-nav-bar>
				</view>
</template>

<script lang="ts" setup>
import { defineEmits, ref }  from 'vue'
let emit = defineEmits(['search', 'openMy']) // emit触发父组件事件 父组件中的自定义方法,参数一,参数二,...
const text = ref<string>('')
const confirm = ():void => { // 按下搜索后
	emit('search', text.value)
} 
</script>

<style lang="scss" scoped>
	$nav-height: 30px;
	
		.box-bg {
			background-color: darkred;
			padding: 5px 0px 0px 0px;
			// display: inline;
		}
	
		.city {
			/* #ifndef APP-PLUS-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			// width: 160rpx;
			margin-left: 4px;
		}
	
		.input-view {
			/* #ifndef APP-PLUS-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			// width: 500rpx;
			flex: 1;
			background-color: #f8f8f8;
			height: $nav-height;
			border-radius: 15px;
			padding: 0 15px;
			flex-wrap: nowrap;
			margin: 7px 0;
			line-height: $nav-height;
		}
	
		.input-uni-icon {
			line-height: $nav-height;
		}
	
		.nav-bar-input {
			height: $nav-height;
			line-height: $nav-height;
			/* #ifdef APP-PLUS-NVUE */
			width: 370rpx;
			/* #endif */
			padding: 0 5px;
			font-size: 12px;
			background-color: #f8f8f8;
		}
		.tool{
			display: flex;
			justify-content: space-between;
		}
</style>
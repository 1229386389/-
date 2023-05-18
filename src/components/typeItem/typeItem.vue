<template>
	<view class="item">
		<uni-icons :type="type.icon" size="30"></uni-icons>
		<text>{{type.name}}</text>
		
	</view>
</template>

<script>
	export default {
		name:"typeItem",
		props:{
			type: {
				type:Object
			}
		}
	}
</script>

<style lang="scss" scoped>
.item{
	flex: 1;
	color: white;
}
</style>
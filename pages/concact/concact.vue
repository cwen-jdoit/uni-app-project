<template>
	<view>
		<image src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view><text @click="phone">拨打电话：（8888888888）</text></view>
			<view><text>具体地址： 河南省商丘市梁园区----商丘工学院</text></view>
		</view>
		<map :longitude="longitude" :latitude="latitude" :scale="scale" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:115.692691,
				latitude:34.424781,
				scale:13,
				markers:[{
					title:'商丘工学院',
					longitude:115.692691,
					latitude:34.424781,
					iconPath:'../../static/hmlogo.png',
					width:30,
					height:30
				}]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:'8888888888'
				})
			}
		}
	}
</script>

<style lang="scss">
	image{
		width: 750rpx;
		height: 320rpx;
	}
	.info{
		line-height: 80rpx;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid #eee;
		font-size: 30rpx;
	}
	map{
		margin-top: 16rpx;
		width: 750rpx;
		height: 750rpx;
	}
</style>

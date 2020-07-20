<template>
	<view>
		<view class="detail">
			<view class="tit">{{detail.title}}</view>
			<view class="info">
				<text>发表时间：{{detail.add_time | formateDate}}</text>
				<text>浏览：{{detail.click}}</text>
			</view>
			<view class="content">
				<rich-text :nodes="detail.content"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				detail:{}
			}
		},
		onLoad(options){
			this.id = options.id;
			this.getDetail();
		},
		methods: {
			async getDetail(){
				const {data:res} = await this.$http({
					url:'/api/getnew/'+this.id
				})
				this.detail = res.message[0]
			}
		}
	}
</script>

<style lang="scss">
	.detail{
		padding: 20rpx 20rpx;
		.tit{
			text-align: center;
			line-height: 30rpx;
			font-size: 30rpx;
		}
		.info{
			margin-top: 20rpx;
			font-size: 30rpx;
			display: flex;
			justify-content: space-between;
		}
		.content{
			margin-top: 20rpx;
			font-size: 30rpx;
		}
	}
</style>

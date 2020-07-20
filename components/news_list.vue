<template>
	<view>
		<view class="news_item" v-for="(item,index) in newsList" :key="index" @click="gonews(item.id)">
			<image :src="item.img_url"></image>
			<view class="info">
				<view class="title">{{item.title}}</view>
				<view class="mytext">
					<text>发布时间：{{item.add_time | formateDate}}</text>
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['newsList'],
		data() {
			return {

			};
		},
		filters:{
			formateDate:(date)=>{
				const newDate = new Date(date);
				const y = newDate.getFullYear();
				const m = (newDate.getMonth()+1).toString().padStart(2,'0');
				const d = newDate.getDate().toString().padStart(2,'0');
				return y + '-' + m +'-'+ d;
			}
		},
		methods:{
			gonews(id){
				this.$emit('clicknews',id)
			}
		}
	}
</script>

<style lang="scss">
	.news_item {
		padding: 10rpx 20rpx;
		display: flex;
		border-bottom: 2px solid #b50e0c;

		image {
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
		}

		.info {
			margin-left: 20rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.title {
				font-size: 30rpx;
				padding-top: 20rpx;
			}

			.mytext {
				font-size: 24rpx;

				text:nth-child(2) {
					margin-left: 18rpx;
				}
			}
		}
	}
</style>

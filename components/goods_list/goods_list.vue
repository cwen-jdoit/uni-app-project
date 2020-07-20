<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in goods" :key="item.id" @click="gogoods(item.id)">
			<image :src="item.img_url"></image>
			<view class="price">
				<text>￥{{item.sell_price}}</text>
				<text>￥{{item.market_price}}</text>
			</view>
			<view class="name">
				{{item.zhaiyao}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:['goods'],
		methods:{
			gogoods(id){
				this.$emit('clickgood',id)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list{
		display: flex;
		flex-wrap: wrap;
		padding: 0 15rpx;
		justify-content: space-between;
		.goods_item{
			width: 355rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;
			background-color: #fff;
			image{
				width: 80%;
				height: 150px;
				display: block;
				margin: 0 auto;
			}
			.price{
				color: #b50e03;
				font-size: 38rpx;
				text:nth-child(2){
					color: #666;
					font-size: 28rpx;
					margin-left: 26rpx;
					text-decoration: line-through;
				}
			}
			.name{
				font-size: 28rpx;
				line-height: 50rpx;
				padding-top: 16rpx;
				padding-bottom: 20rpx;
			}
		}
	}
</style>

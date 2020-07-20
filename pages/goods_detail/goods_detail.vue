<template>
	<view>
		<view class="box1">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in imgs" :key="index">
					<image :src="item.src"></image>
				</swiper-item>
			</swiper>
			<view class="price">
				<text>￥{{info.sell_price}}</text>
				<text>￥{{info.market_price}}</text>
			</view>
			<view class="tit">{{info.title}}</view>
		</view>
		<view class="active"></view>
		<view class="box2">
			<view>货号：{{info.goods_no}}</view>
			<view>库存：{{info.stock_quantity}}</view>
		</view>
		<view class="active"></view>
		<view class="content">
			<text>详情介绍</text>
			<view class="contentdetail">
				<rich-text :nodes="content"></rich-text>
			</view>
		</view>
		<!-- 购物车导航栏 -->
		<view class="cartnav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				id: 0,
				imgs: [],
				info: {},
				content: {},
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getGoodDetailImg()
			this.getGoodsDetailInfo()
			this.getGoodsDetailContent()
		},
		components: {
			uniGoodsNav
		},
		methods: {
			async getGoodDetailImg() {
				const {
					data: res
				} = await this.$http({
					url: '/api/getthumimages/' + this.id
				})
				this.imgs = res.message
			},
			async getGoodsDetailInfo() {
				const {
					data: res
				} = await this.$http({
					url: '/api/goods/getinfo/' + this.id
				})
				this.info = res.message[0]
			},
			async getGoodsDetailContent() {
				const {
					data: res
				} = await this.$http({
					url: '/api/goods/getdesc/' + this.id
				})
				this.content = res.message[0].content
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		}
	}
</script>

<style lang="scss">
	.box1 {
		width: 750rpx;

		swiper {
			width: 100%;
			height: 600rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.price {
			padding: 20rpx 20rpx;
			font-size: 45rpx;
			color: #b50e0c;

			text:nth-child(2) {
				margin-left: 20rpx;
				font-size: 30rpx;
				color: #666;
				text-decoration: line-through;
			}
		}

		.tit {
			padding: 0 20rpx 20rpx;
			font-size: 35rpx;
			line-height: 60rpx;
		}
	}

	.active {
		width: 750rpx;
		height: 3px;
		background-color: #ccc;
	}

	.box2 {
		height: 50px;
		padding: 20rpx 20rpx;
		font-size: 35rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.content {
		margin-top: 20rpx;
		padding-bottom: 50px;
		text {
			padding: 20rpx 20rpx;
		}

		.contentdetail {
			margin-top: 30rpx;
			font-size: 30rpx;
		}
	}
	
	.cartnav{
		width: 100%;
		position: fixed;
		bottom: 0;
	}
</style>

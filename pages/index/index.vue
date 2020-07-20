<template>
	<view>
		<!-- 轮播图 -->
		<view class="swiper">
		<swiper :indicator-dots="true" :autoplay="true" :circular="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		</view>
		<!-- 导航栏 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="itemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">
				商品推荐
			</view>
		<goods-list :goods="goods" @clickgood="gogoodDetail"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods_list/goods_list.vue'
	export default {
		data() {
			return {
				swipers:[],
				goods:[],
				navs:[{
					icon:'iconfont icon-bijiben',
					title:'我的商城',
					path:'/pages/goods/goods'
				},{
					icon:'iconfont icon-Chat-Help',
					title:'联系我吧',
					path:'/pages/concact/concact'
				},{
					icon:'iconfont icon-Picture-',
					title:'社区美图',
					path:'/pages/pics/pics'
				},{
					icon:'iconfont icon-shipindaofang',
					title:'交流视频',
					path:'/pages/videos/videos'
				}]
			}
		},
		onLoad() {
			this.getSwipers()
			this.getHotgoods()
		},
		components:{
			"goods-list":goodsList
		},
		methods: {
			async getSwipers(){
				const {data:res} = await this.$http({
					url:'/api/getlunbo',
				})
				this.swipers = res.message;
			},
			async getHotgoods(){
				const {data:res} = await this.$http({
					url:'/api/getgoods?pageindex=1'
				})
				this.goods = res.message;
			},
			itemClick(url){
				uni.navigateTo({
					url
				})
			},
			gogoodDetail(id){
				uni.navigateTo({
					url:'../goods_detail/goods_detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.swiper{
		width: 750rpx;
		height: 380rpx;
		swiper{
			height: 100%;
		}
		image{
			width: 100%;
			height: 100%;
		}
	}
	.nav{
		display: flex;
		justify-content: space-around;
		.nav_item .iconfont{
			width: 120rpx;
			height: 120rpx;
			font-size: 50rpx;
			line-height: 120rpx;
			text-align: center;
			color: #fff;
			background-color: #0066FF;
			border-radius: 60rpx;
			margin: 10rpx auto;
		}
		text{
			font-size: 30rpx;
		}
	}
	.hot_goods{
		background-color: #eee;
		overflow: hidden;
		.tit{
			height: 100rpx;
			margin-top: 19rpx;
			color: $uni-color-primary;
			letter-spacing: 25rpx;
			background-color: #fff;
			text-align: center;
			line-height: 100rpx;
		}
	}
</style>

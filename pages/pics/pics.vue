<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view :class="active === index ? 'active' : ''" v-for="(item,index) in cates" :key="item.id" @click="getActive(index,item.id)">{{item.title}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in cateImg" :key="item.id">
				<image :src="item.img_url" @click="lookImg(item.img_url)"></image>
				<text>{{item.title}}</text>
			</view>
			<view v-if="cateImg.length === 0">暂无数据</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates:[],
				active: 0,
				cateImg:[]
			}
		},
		onLoad(){
			this.getCates()
		},
		methods: {
			async getCates(){
				const {data:res} = await this.$http({
					url:'/api/getimgcategory'
				})
				this.cates = res.message;
				this.getActive(0,this.cates[1].id);
			},
			async getActive(index,id){
				this.active = index;
				const {data:res} = await this.$http({
					url:'/api/getimages/'+ id
				})
				this.cateImg = res.message;
			},
			lookImg(url){
				const arrImg = []
				this.cateImg.forEach(item=>{
					arrImg.push(item.img_url)
				})
				uni.previewImage({
					current:url,
					urls:arrImg
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		height: 100%;
		display: flex;
	}
	.left{
		width: 200rpx;
		height: 100%;
		border-right: 1px solid #eee;
		view{
			height: 60px;
			line-height: 60px;
			text-align: center;
			color: #333;
			font-size: 30rpx;
			border-bottom: 1px solid #eee;
		}
	}
	.active{
		background-color: #b50e03;
		color: #fff!important;
	}
	.right{
		width: 520rpx;
		height: 100%;
		margin: 10rpx auto;
		.item{
			image{
				width: 520rpx;
				height: 520rpx;
			}
			text{
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
	}
</style>

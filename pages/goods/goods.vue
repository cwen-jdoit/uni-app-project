<template>
	<view class="goods_list">
		<goods-list :goods="goods" @clickgood="gogoodDetail"></goods-list>
		<view class="tip" v-if="flag">
			-----俺也是有底线的-----
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods_list/goods_list.vue'
	export default {
		data() {
			return {
				goods:[],
				indexPage: 1,
				flag: false
			}
		},
		created(){
			this.getGoodsList()
		},
		methods: {
			async getGoodsList(callback){
				const {data:res} = await this.$http({
					url:'/api/getgoods?pageindex='+ this.indexPage
				})
				this.goods = [...this.goods,...res.message];
				callback && callback();
			},
			gogoodDetail(id){
				uni.navigateTo({
					url:'../goods_detail/goods_detail?id='+id
				})
			}
		},
		onPullDownRefresh(){
				this.goods = []
				this.indexPage = 1
				this.flag = false
				setTimeout(()=>{
					this.getGoodsList(()=>{
						uni.stopPullDownRefresh()
						uni.showToast({
							title:'刷新成功!'
						})
					})
				},1000)
		},
		onReachBottom(){
			// console.log('触底了')
			if(this.goods.length < this.indexPage * 10) return this.flag = true
			this.indexPage++
			this.getGoodsList()
		},
		components:{
			"goods-list":goodsList
		}
	}
</script>

<style lang="scss">
	.goods_list{
		background-color: #eee;
	}
	.tip{
		height: 100rpx;
		font-size: 26rpx;
		line-height: 100rpx;
		text-align: center;
	}
</style>

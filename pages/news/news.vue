<template>
	<view>
		<news-list :newsList="newsList" @clicknews="gonewsdetial"></news-list>
	</view>
</template>

<script>
	import newsList from '../../components/news_list.vue'
	export default {
		data() {
			return {
				newsList: []
			}
		},
		onLoad() {
			this.getNewsList()
		},
		components: {
			"news-list": newsList
		},
		methods: {
			async getNewsList() {
				const {data: res} = await this.$http({
					url: '/api/getnewslist'
				})
				this.newsList = res.message;
			},
			gonewsdetial(id){
				uni.navigateTo({
					url:'../news_detail/news_detail?id='+id
				})
			}
		}
	}
</script>

<style>
</style>

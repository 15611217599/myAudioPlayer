<template>
	<view><web-view :src="playUrl"></web-view></view>
</template>

<script>
export default {
	data() {
		return {
			playUrl:'',
		}
	},

	onLoad(e) {
		
		this.playUrl ='https://jx.7639616.com/?url='+ e.url;
		console.log('页面播放的地址是'+ this.playUrl);
	},
	methods: {

	}
}
</script>

<style></style>

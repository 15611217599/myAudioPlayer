<script>
export default {
	
	//这样的全局变量可以挂在页面,再onshow中
	globalData:{
		isShowPay : 'true'
	},
	onLaunch: function() {
		console.log('App Launch')
	},
	onShow: function() {
		console.log('App Show')
	},
	onHide: function() {
		console.log('App Hide')
	}
}
</script>

<style>
/*每个页面公共css */
::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
}
</style>

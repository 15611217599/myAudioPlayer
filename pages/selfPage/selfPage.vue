<template>
	<view class="center">
		<view>
			<view class="center_top"><view class="mask"></view></view>
			<view class="center_box_bg">
				<view class="profily">
					<view class="base">
						<view class="profily_header"></view>
						<text style="display: block;">{{ userInfo.name }}</text>

						<view v-if="isShowPay == 'true'">
							<image
								class="icon"
								:src="userInfo.vip + '' == 'true' ? '/static/isvip.png' : ''"
								mode="aspectFill"
								style="border-radius: 5upx;"
							></image>
							<text v-if="userInfo.vip + '' == 'true'" style="position: absolute;left: 120upx;bottom: 0;white-space: nowrap;">
								到期日:{{ userInfo.activeDate.split('T')[0] }}
							</text>
						</view>
					</view>
					<view class="order_status">
						<view class="status" v-for="(item, keys) in status" :key="keys" @tap="goForStatus(item)">
							<image class="icon" :src="item.url" mode="aspectFill" style="border-radius: 5upx;"></image>
							<text>{{ item.name }}</text>
						</view>
					</view>
				</view>
				<view class="baiban"></view>
				<view class="center_menu">
					<view class="menu_item" v-for="(item, keys) in menus" :key="keys" @tap="goForDetail(item)">
						<image :src="item.icon" mode="aspectFill" style="border-radius: 5upx;"></image>
						<text>{{ item.name }}</text>
					</view>
				</view>
			</view>
			<tabBar4 :currentPage="currentPage"></tabBar4>
		</view>

		<!-- 提交建议遮罩层 -->

		<view :class="sendMsg == 'true' || isshowPayPic == 'true' ? 'pageFilter' : ''"></view>

		<!-- 提交建议 -->
		<view :class="sendMsg == 'true' ? 'show' : 'hide'" style="position: fixed;background-color: #ffffff; top: 30%;width: 80%; margin: 0 10%;border-radius: 15upx;">
			<view style="width: 100%; border-bottom: #bababa solid 1upx;padding-top: 5upx;">
				<textarea
					@input="getInPutMsg"
					placeholder="请输入反馈内容"
					style="width: 90%; text-align: left;margin: 10upx auto;color: #000000;color: #999;padding:1.3em 1.6em 1.3em;"
				></textarea>
			</view>
			<view style="height: 80upx;">
				<view @click="closeSendMsg" style="float: left; width: 49%;text-align: center;height: 80upx; line-height: 80upx;color: rgb(0, 0, 0); text-decoration: none;">
					取消
				</view>
				<view style="float: left; width: 1%;text-align: center;height: 80upx;line-height: 80upx;border-right: #bababa solid 1upx;"></view>
				<view @click="SendMsg" style="float: left; width: 49%;text-align: center;height: 80upx;line-height: 80upx;color: rgb(0, 122, 255); text-decoration: none;">
					发送
				</view>
			</view>
		</view>

		<!-- payPic -->
		<view :class="isshowPayPic == 'true' ? 'show' : 'hide'" style="position: fixed;background-color: #ffffff; top: 30%; margin: 0 10%;border-radius: 15upx;width: 80%;">
			<view style="width: 90%; text-align: center; margin: 10upx auto; color: red;font-size: 25upx;font-weight: bold;">请在1分钟内完成支付,否则可能导致支付失败</view>
			<view style="width: 90%; text-align: center; margin: 10upx auto; font-size: 25upx;">支付过程中请勿关闭此界面</view>

			<view style="width: 100%; border-bottom: #bababa solid 1upx;padding-top: 5upx;text-align: center;"><image :src="payUrl" mode="aspectFit"></image></view>

			<view style="height: 80upx;">
				<view @click="hidePayPicFunc" style="float: left; width: 49%;text-align: center;height: 80upx; line-height: 80upx;color: rgb(0, 0, 0); text-decoration: none;">
					取消支付
				</view>
				<view style="float: left; width: 1%;text-align: center;height: 80upx;line-height: 80upx;border-right: #bababa solid 1upx;"></view>
				<view @click="surePayed" style="float: left; width: 49%;text-align: center;height: 80upx;line-height: 80upx;color: rgb(0, 122, 255); text-decoration: none;">
					查询结果
					<text style="color: #ff0000;">({{ timeUpdate }})</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import tabBar4 from '../../components/tabBar4.vue';
export default {
	components: { tabBar4 },

	data() {
		return {
			payUrl:'',
			interval: [],
			timeUpdate: 0,
			isshowPayPic: 'false',
			isShowPay: 'false',
			userInfo: '',
			sendMsg: 'false',
			msg: '',
			currentPage: 'selfPage',
			status: [
				{
					key: 1,
					name: '登陆',
					url: '../../static/fumou-center-template/one.png'
				},
				{
					key: 2,
					name: '注销',
					url: '../../static/fumou-center-template/2.png'
				}
			],
			menus: [
				{
					name: '我的下载',
					icon: '../../static/fumou-center-template/5.png',
					key: 1
				},
				{
					name: '清除所有缓存',
					icon: '../../static/fumou-center-template/6.png',
					key: 2
				},

				{
					name: '帮助中心',
					icon: '../../static/fumou-center-template/8.png',
					key: 3
				},
				{
					name: '意见反馈',
					icon: '../../static/fumou-center-template/9.png',
					key: 4
				},
				{
					name: '关于我们',
					icon: '../../static/fumou-center-template/10.png',
					key: 5
				}
			]
		};
	},
	methods: {
		getInPutMsg(e) {
			var value = e.detail.value;
			this.msg = value;
			console.log(e);
		},
		goForDetail(e) {
			var key = e.key;

			if (key == '1') {
				uni.navigateTo({
					url: 'downLoad/downLoad'
				});
			} else if (key == '2') {
				var ress;
				try {
					ress = uni.getStorageInfoSync();
				} catch (e) {
					uni.showToast({
						title: '没有缓存!',
						duration: 2000
					});
				} finally {
					uni.showModal({
						title: '删除所有缓存',
						content: '将会删除所有缓存,会影响下载内容以及播放列表,当前缓存大小:' + ress.currentSize + 'kb',
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');

								uni.clearStorageSync();
								uni.showToast({
									title: '清除缓存成功!',
									duration: 2000
								});
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
			} else if (key == '3') {
				uni.navigateTo({
					url: 'help/help'
				});
			} else if (key == '4') {
				this.sendMsg = 'true';
			} else if (key == '5') {
				uni.showModal({
					title: '关于我们',
					content: '当前版本: 浣熊影视 V-1.0.1',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		},

		goForStatus(e) {
			var key = e.key;

			if (key == '1') {
				uni.navigateTo({
					url: './xiaocong-login/login/login'
				});
			} else if (key == '2') {
				var cacheUser = uni.getStorageSync('userinfo') || [];

				if (cacheUser.length == 0) {
					uni.showToast({
						title: '没有登陆!',
						duration: 2000
					});
					return;
				}
				var that = this;
				uni.showModal({
					title: '注销',
					content: '确定注销当前账号吗?',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.removeStorageSync('userinfo');
							that.userInfo = uni.getStorageSync('userinfo') || [];
							that.$forceUpdate();
							uni.showToast({
								title: '注销账号成功!',
								duration: 2000
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			} else if (key == '3') {
				//先检查是否可以支付

				this.getPayState();
			}
		},
		closeSendMsg() {
			this.sendMsg = 'false';
		},
		SendMsg() {
			this.closeSendMsg();

			if (this.msg.trim().length > 0) {
				uni.showToast({
					title: '发送成功!',
					duration: 2000
				});
			} else {
				uni.showToast({
					title: '输入不能为空!',
					duration: 2000
				});
			}
		},

		//隐藏支付图片
		hidePayPicFunc() {
			this.isshowPayPic = 'false';
			this.timeUpdate = 0;
			clearInterval(this.interval);
			this.consolePay();
		},
		async getPayState() {
			
			if(!this.userInfo.name){
				uni.showToast({
					title: '请先登陆',
					duration: 2000
				});
				return;
			}
			const [err, res] = await uni.request({
				url: this.$serverUrl + '/' + 'getPayState',
				data: this.userInfo.name,
				method: 'POST',
				header: {
					'content-type': 'application/json'
				}
			});
			//data为一个数组，数组第一项为错误信息，第二项为返回数据
			if (err) {
				console.log('请求支付失败:', err);
			} else {
				var result = res.data;

				if (!result) {
					uni.showToast({
						title: '请稍后尝试!',
						duration: 2000
					});

					return;
				}

				//显示支付图片
				this.isshowPayPic = 'true';
				//设置计时器

				var that = this;
				this.interval = setInterval(function() {
					that.timeUpdate = that.timeUpdate + 1;

					if (that.timeUpdate == 60) {
						that.timeUpdate = 0;
						that.isshowPayPic = 'false';
						clearInterval(that.interval);
						uni.showToast({
							title: '支付失败',
							duration: 2000
						});
					}
				}, 1000);
			}
		},

		consolePay() {
			this.getRequest('consolePay', this.userInfo.name);
		},
		async surePayed() {
			const [err, res] = await uni.request({
				url: this.$serverUrl + '/' + 'surePayed',
				data: this.userInfo.name,
				method: 'POST',
				header: {
					'content-type': 'application/json'
				}
			});
			//data为一个数组，数组第一项为错误信息，第二项为返回数据
			if (err) {
				console.log('请求支付失败:', err);
			} else {
				//支付成功啦
				if (res.data.state == '0') {
					//用户重新赋值啦
					uni.setStorageSync('userinfo', res.data.userInfo);
					this.userInfo = res.data.userInfo;

					this.isshowPayPic = 'false';
					this.timeUpdate = 0;
					clearInterval(this.interval);

					uni.showToast({
						title: '支付成功!',
						duration: 2000
					});
				} else {
					//支付还没有成功

					uni.showToast({
						title: '暂无结果,稍后查询!',
						duration: 2000
					});
				}
			}
		},

		async getRequest(url, data) {
			const [err, res] = await uni.request({
				url: this.$serverUrl + '/' + url,
				data: data,
				method: 'POST',
				header: {
					'content-type': 'application/json'
				}
			});
			//data为一个数组，数组第一项为错误信息，第二项为返回数据
			if (err) {
				console.log('请求取消支付失败:', err);
			} else {
				return res.data;
			}
		}
	},
	computed: {},
	onLoad() {
		
		//加载支付图片
		this.payUrl = this.$serverUrl+'/images/payPic.jpg',
		
		this.isShowPay = getApp().globalData.isShowPay;
		if (this.isShowPay == 'true') {
			this.status.push({
				key: 3,
				name: '办理vip',
				url: '../../static/fumou-center-template/3.png'
			});
		}
		console.log('我的页获取是否启用vip' + this.isShowPay);
	},

	//这里可以挂载全局变量
	onShow() {
		this.userInfo = uni.getStorageSync('userinfo') || [];
	}
};
</script>

<style lang="scss">
.show {
	z-index: 100;
	visibility: visible;
	opacity: 1;
	transition: all 0.6s ease-in-out 0s;
}
.hide {
	opacity: 0;
	visibility: hidden;
	z-index: 100;
	transition: all 0.2s ease-in-out 0s;
}

.pageFilter {
	position: fixed;
	left: 0px;
	top: 0px;
	background: rgba(0, 0, 0, 0.6);
	width: 100%; /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/
	height: 100%;
	z-index: 50;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
}

page {
	height: 100%;
}

.profily,
.profily_header {
	border-radius: 8px;
}

.center {
	height: 100%;

	&_top {
		height: 18vh;
		background: url('../../static/fumou-center-template/header.jpg') no-repeat 0% 50%;
		background-size: cover;

		// background: #E6E6E6;
		.mask {
			background: rgba(0, 0, 0, 0.4);
			height: 100%;
		}
	}

	&_box_bg {
		background: #f9f9f9;
		position: relative;

		.profily {
			position: absolute;
			width: 90%;
			margin: 0 auto;
			top: -100upx;
			left: 5%;
			background: #fefefe;
			padding: 35upx;
			box-sizing: border-box;
			box-shadow: 0px 2px 5px #ededed;
		}
	}
}

.base {
	display: flex;
	align-items: center;
	border-bottom: 2px solid #f6f6f6;
	padding-bottom: 35upx;
	position: relative;
	.profily_header {
		height: 120upx;
		width: 120upx;
		background-image: url('../../static/fumou-center-template/header.jpg');
		background-size: 100%;
	}

	text {
		margin-left: 20px;
		font-size: 30upx;
	}

	image {
		position: absolute;
		height: 40upx;
		width: 40upx;
		right: 0px;
		top: 0px;
	}
}

.order_status {
	display: flex;
	justify-content: space-between;
	margin-top: 35upx;

	.status {
		width: 140upx;
		font-size: 24upx;
		text-align: center;
		letter-spacing: 0.5px;
		display: flex;
		flex-direction: column;
		.icon {
			width: 50upx;
			height: 50upx;
			margin: 0 auto;
			margin-bottom: 5px;
		}
	}
}

.baiban {
	background: #fefefe;
	height: 300upx;
}

.center_menu {
	width: 100%;
	display: inline-block;

	.menu_item {
		font-size: 28upx;
		letter-spacing: 1px;
		padding: 14px 5%;
		background: #fefefe;
		overflow: hidden;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		position: relative;
		border-bottom: 1px solid #efefef;

		&:hover {
			//点击效果暂时不要
			background: #ffffff !important;
		}
		&:active {
			background: #f6f6f6 !important;
			//点击效果暂时不要
		}

		&::after {
			content: '';
			width: 30upx;
			height: 30upx;
			position: absolute;
			right: 5%;
			background: url('../../static/fumou-center-template/right.png') no-repeat;
			background-size: 100%;
		}

		text:nth-of-type(1) {
			margin-left: 10px;
		}

		image {
			width: 40upx;
			height: 40upx;
		}

		&:nth-of-type(4) {
			margin-top: 10px;
		}
	}
}
button ::after {
	border: none;
}
.showPic {
	position: fixed;
	top: 0;
	transition-duration: 0.3s;
	-ms-transform: scale(1);
	transform: scale(1);
	overflow-x: hidden;
	overflow-y: auto;
	pointer-events: auto;
	vertical-align: bottom;
}
.hide {
	top: 0;
	transition-duration: 0.3s;
	-ms-transform: scale(1);
	transform: scale(1);
	overflow-x: hidden;
	overflow-y: auto;
	pointer-events: auto;
	vertical-align: bottom;
}
</style>

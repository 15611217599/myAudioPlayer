<template>
	<view class="content">
		<view class="forget-bg">
			<view class="forget-card">
				<view class="forget-input forget-margin-b"><input type="number" placeholder="请输入您的手机号" @input="getName" /></view>
				<view class="forget-input forget-margin-b">
					<view class="verify-left"><input :placeholder="placeholder" @input="getanswer" /></view>
					<view class="verify-right"><button class="verify-btn" type="primary" @tap="getQuestion()">点击获取密保问题</button></view>
				</view>
				<view class="forget-input"><input type="text" placeholder="请输入新密码(8-16位)" @input="getPass" /></view>
			</view>
		</view>
		<view class="forget-btn"><button class="landing" type="primary" @tap="forget">提交</button></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			placeholder: '',
			userInfo: {
				name: '',
				pass: '',
				questions: '',
				answer: '',
				activeDate: '',
				isVip: ''
			}
		};
	},
	onShow() {},
	onLoad() {},
	methods: {
		//获取用户名
		getName(e) {
			this.userInfo.name = e.detail.value.trim();
		},
		//获取密码
		getPass(e) {
			this.userInfo.pass = e.detail.value.trim();
		},
		//获取密保答案
		getanswer(e) {
			this.userInfo.answer = e.detail.value.trim();
		},
		async forget() {
			var user = this.userInfo;

			var cacheUser = uni.getStorageSync('userinfo') || [];
			
			console.log("length" + cacheUser.length);
			if (!cacheUser.length && cacheUser.length != 0) {
				uni.showToast({
					title: '已经登陆,无需找回!',
					duration: 2000
				});
				return;
			}
			if (user.name.length < 11) {
				uni.showToast({
					title: '用户名不正确',
					duration: 2000
				});
				return;
			}

			if (user.answer.length == 0) {
				uni.showToast({
					title: '密保答案不正确',
					duration: 2000
				});
				return;
			}
			if (user.pass.length < 8 || user.pass.length > 16) {
				uni.showToast({
					title: '密码格式不正确',
					duration: 2000
				});
				return;
			}

			uni.showLoading({
				title: '加载中',
				mask: true
			});
			const [err, ret] = await uni.request({
				url: this.$serverUrl + '/forget',
				data: user,
				method: 'POST',
				header: {
					'content-type': 'application/json'
				}
			});

			uni.hideLoading();
			if (err) {
				console.log(err);
				uni.showToast({
					title: '找回密码错误,请重试',
					duration: 2000
				});
			} else {
				let data = ret.data;

				//和之前密码一样
				if (data.state == '0') {
					//给全局登陆变量赋值 修改了密码,那他所有登陆信息应该删除
					//getApp().globalData.userInfoGloble = "";
					//缓存也添加登陆用户信息
					uni.setStorageSync('userinfo', []);

					uni.showToast({
						title: '找回密码成功!',
						duration: 2000
					});

					let _open = setTimeout(() => {
						uni.navigateBack();
						_open = null;
					}, 2000);
				} else {
					uni.showToast({
						title: data.msg,
						duration: 2000
					});
				}
				console.log(data);
			}
		},
		async getQuestion() {
			if (this.userInfo.name.length < 11) {
				uni.showToast({
					title: '用户名不正确',
					duration: 2000
				});
				return;
			}

			const [err, ret] = await uni.request({
				url: this.$serverUrl + '/getQuestionforget',
				data: this.userInfo.name,
				method: 'POST',
				header: {
					'content-type': 'application/json'
				}
			});

			if (err) {
				uni.showToast({
					title: '获取密保问题失败!',
					duration: 2000
				});
			} else {
				if (ret.data.state == '0') {
					this.placeholder = ret.data.userInfo.questions;
				} else {
					uni.showToast({
						title: ret.data.msg,
						duration: 2000
					});
				}
			}
		}
	}
};
</script>

<style>
.verify-left {
	width: calc(100% - 260upx);
}
.verify-right {
	padding-left: 20upx;
}
.verify-btn {
	height: 80upx;
	line-height: 80upx;
	font-size: 28upx;
	width: 240upx;
	border-radius: 8upx;
	background: linear-gradient(to left, #ff978d, #ffbb69);
}
.verify-left,
.verify-right {
	float: left;
}
.landing {
	height: 84upx;
	line-height: 84upx;
	border-radius: 44upx;
	font-size: 32upx;
	background: linear-gradient(to left, #ff978d, #ffbb69);
}
.forget-btn {
	padding: 10upx 20upx;
	margin-top: 380upx;
}

.forget-input input {
	background: #f2f5f6;
	font-size: 28upx;
	padding: 10upx 25upx;
	height: 62upx;
	line-height: 62upx;
	border-radius: 8upx;
}
.forget-margin-b {
	margin-bottom: 25upx;
}
.forget-input {
	padding: 10upx 20upx;
	overflow: auto;
}
.forget-card {
	background: #fff;
	border-radius: 12upx;
	padding: 60upx 25upx;
	box-shadow: 0 6upx 18upx rgba(0, 0, 0, 0.12);
	position: relative;
	margin-top: 120upx;
}
.forget-bg {
	height: 260upx;
	padding: 25upx;
	background: linear-gradient(#ff978d, #ffbb69);
}
</style>

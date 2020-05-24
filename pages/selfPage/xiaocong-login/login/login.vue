<template>
	<view class="content">
		<view class="login-bg">
			<view class="login-card">
				<view class="login-head">请输入你的账户</view>
				<view class="login-input login-margin-b"><input type="number" placeholder="请输入您的手机号" @input="getName" /></view>
				<view class="login-input"><input type="text" placeholder="请输入密码(8-16位)" @input="getPass" /></view>
				<view class="login-function">
					<view class="login-forget" @click="go_forget">忘记密码</view>
					<view class="login-register" @click="go_register">快速注册></view>
				</view>
			</view>
		</view>
		<view class="login-btn"><button class="landing" type="primary" @tap="login">登陆</button></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userInfo: {
				name: '',
				pass: ''
			}
		};
	},
	onLoad() {},
	methods: {
		go_forget() {
			uni.navigateTo({
				url: '../forget/forget'
			});
		},
		go_register() {
			uni.navigateTo({
				url: '../register/register'
			});
		},
		//获取用户名
		getName(e) {
			this.userInfo.name = e.detail.value.trim();
		},
		//获取密码
		getPass(e) {
			this.userInfo.pass = e.detail.value.trim();
		},

		//提交登陆
		async login() {
			var user = this.userInfo;
			var cacheUser = uni.getStorageSync('userinfo') || [];

			if (!cacheUser.length && cacheUser.length != 0) {
				uni.showToast({
					title: '无需重复登陆!',
					duration: 2000
				});
				return;
			}

			if (user.name.length < 11) {
				uni.showToast({
					title: '用户名格式不正确',
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
				url: this.$serverUrl + '/login',
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
					title: '登陆错误,请重试',
					duration: 2000
				});
			} else {
				let data = ret.data;

				//给全局登陆变量赋值
				//getApp().globalData.userInfoGloble = data.userInfo;

				if (data.state == '0') {
					uni.showToast({
						title: '登陆成功!',
						duration: 2000
					});
					//缓存也添加登陆用户信息
					uni.setStorageSync('userinfo', data.userInfo);
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
		}
	}
};
</script>

<style>
.landing {
	height: 84upx;
	line-height: 84upx;
	border-radius: 44upx;
	font-size: 32upx;
	background: linear-gradient(to left, #ff978d, #ffbb69);
}
.login-btn {
	padding: 10upx 20upx;
	margin-top: 350upx;
}
.login-function {
	overflow: auto;
	padding: 20upx 20upx 30upx 20upx;
}
.login-forget {
	float: left;
	font-size: 26upx;
	color: #999;
}
.login-register {
	color: #666;
	float: right;
	font-size: 26upx;
}
.login-input input {
	background: #f2f5f6;
	font-size: 28upx;
	padding: 10upx 25upx;
	height: 62upx;
	line-height: 62upx;
	border-radius: 8upx;
}
.login-margin-b {
	margin-bottom: 25upx;
}
.login-input {
	padding: 10upx 20upx;
}
.login-head {
	font-size: 34upx;
	text-align: center;
	padding: 25upx 10upx 55upx 10upx;
}
.login-card {
	background: #fff;
	border-radius: 12upx;
	padding: 10upx 25upx;
	box-shadow: 0 6upx 18upx rgba(0, 0, 0, 0.12);
	position: relative;
	margin-top: 120upx;
}
.login-bg {
	height: 260upx;
	padding: 25upx;
	background: linear-gradient(#ff978d, #ffbb69);
}
</style>

<template>
	<view class="content">
		<!-- #ifdef APP-VUE || MP-WEIXIN -->
		<view class="status_bar"><view class="top_view"></view></view>
		<!-- #endif -->

			<video
				:title="video.name"
				id="myVideo"
				:src="playUrl"
				style="width: 100%; height: 421.875rpx;"
				autoplay="true"
				@ended="autoPlayNext"
				:poster="video.picture"
				@timeupdate="saveHis"
				:initial-time="oldPlayTime"
				objectFit="cover"
			>
				<cover-image
					style="width: 40upx; height: 40upx;position: relative; top: 8%; left: 5%;z-index: 1;border-radius: 50%;"
					@click="back"
					src="/static/back-black.png"
				></cover-image>
			</video>
		<view class="cu-item shadow">
			<view class="image"></view>
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="content flex-sub" style="left: 50upx;">
						<view class="cutext-grey" style="font-weight: bold;">{{ video.name }}</view>
						<view class="text-gray text-sm flex justify-between" style="float: left;">
							<view class="text-gray" style="white-space: nowrap;">{{ video.area }} {{ video.updated_time }}</view>

							<view class="" style="font-size: 25upx;font-weight: bold;width: 125upx;padding: 0 10upx;" @tap="showModal" data-target="xiangqing">
								详情
								<text class="margin-lr-xs cuIcon-unfold"></text>
							</view>
							<view class=" " style="font-size: 25upx;font-weight: bold;width: 125upx;" @tap="showModal" data-target="xuanji">
								选集
								<text class="margin-lr-xs cuIcon-unfold"></text>
							</view>
							<!-- <view style="font-size: 25upx;font-weight: bold;width: 125upx;" @tap="goToWeb" data-target="xiazai">加速播放</view> -->
						</view>
					</view>
				</view>
			</view>
			<view class="cu-list">
				<scroll-view class="cu-item nav" scroll-x scroll-with-animation>
					<view class="margin-tb-sm text-center cu-item" style=" margin: -10upx;" v-for="(urls, urli) in video.show_url" :key="urli" @tap="onClickButton(urli, urls.url)">
						<button :class="clickButtonId == urli ? 'clickButtonId' : ''" class="cu-btn  bg-white " style="width: 100upx;">{{ urli + 1 }}</button>
					</view>
				</scroll-view>
			</view>

			<!-- 详情模态框 start-->
			<view class="cu-modal" :class="modalName == 'xiangqing' ? 'show' : ''">
				<view class="cu-dialog" style="padding-left: 10upx;padding-right: 10upx;overflow: hidden;border-radius: 0;">
					<view class="cuIcon-close action" @tap="hideModal" style="position: relative; right: -320upx;top: 10upx;"></view>

					<view style="font-weight: bold;">{{ video.name }}</view>
					<view class="link-top"></view>
					<scroll-view scroll-y="true" style="height: 80%;position: relative; top: 50upx;">
						<view class="desc shows">
							<text class="texts">上映时间:&nbsp;&nbsp;{{ video.release_time }}</text>
							<text class="texts">地区:&nbsp;&nbsp;{{ video.area }}</text>
							<text class="texts">导演:&nbsp;&nbsp;{{ video.director }}</text>
							<text class="texts">演员:&nbsp;&nbsp;{{ video.actors }}</text>
							<view class="link-top"></view>
							<text class="texts1">简介:&nbsp;&nbsp;{{ video.film_synopsis }}</text>
						</view>
					</scroll-view>
					<!-- </view> -->
				</view>
			</view>
			<!-- 详情模态框 end-->

			<!-- 选集 start-->
			<view class="cu-modal" :class="modalName == 'xuanji' ? 'show' : ''">
				<view class="cu-dialog" style="padding-left: 10upx;padding-right: 10upx;overflow: hidden;border-radius: 0;">
					<view class="cuIcon-close action" @tap="hideModal" style="position: relative; right: -320upx;top: 10upx;"></view>

					<view style="font-weight: bold;">{{ video.name }}</view>
					<view class="link-top"></view>
					<scroll-view scroll-y="true" style="height: 80%;position: relative; top: 50upx;">
						<view
							class="margin-tb-sm text-center cu-item"
							style="margin: 10upx; display: inline-block;float: left;"
							v-for="(urls, urli) in video.show_url"
							:key="urli"
							@tap="onClickButton(urli, urls.url)"
						>
							<button :class="clickButtonId == urli ? 'clickButtonId' : ''" class="cu-btn bg-white " style="width: 100upx;">{{ urli + 1 }}</button>
						</view>
					</scroll-view>
					<!-- </view> -->
				</view>
			</view>
			<!-- 选集 end-->

			<!-- 下载 start-->
			<view class="cu-modal" :class="modalName == 'xiazai' ? 'show' : ''">
				<view class="cu-dialog" style="padding-left: 10upx;padding-right: 10upx;overflow: hidden;border-radius: 0;">
					<view class="cuIcon-close action" @tap="hideModal" style="position: relative; right: -320upx;top: 10upx;"></view>

					<view style="font-weight: bold;">{{ video.name }}</view>
					<view class="link-top"></view>
					<scroll-view scroll-y="true" style="height: 80%;position: relative; top: 50upx;">
						<view class="margin-tb-sm text-center cu-item" style="margin: 10upx; display: inline-block;float: left;" v-for="(urls, urli) in video.down_url" :key="urli">
							<button @tap="downLoad(urli, urls)" v-if="urls.type != '0'" class="cu-btn bg-white " style="width: 100upx;">{{ urli + 1 }}</button>

							<!-- 下载中 -->
							<button v-if="urls.type == '0' && urls.downPersent != '100'" class="cu-btn bg-white " style="width: 100upx;color: #ff0000;">
								{{ urls.downPersent }}
							</button>

							<!-- 下载完成 -->
							<button v-if="urls.type == '0' && urls.downPersent == '100'" class="cu-btn bg-white" style="width: 100upx;">
								{{ urli + 1 }}
								<image src="/static/download.png" style="height: 30upx; width: 20upx; position: absolute;bottom: 0; right: 0;"></image>
							</button>
						</view>
					</scroll-view>
					<!-- </view> -->
				</view>
			</view>
			<!-- 下载 end-->
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			isFullScreen: false,
			videoContext: '',
			/* 点击按钮变色,并且给选集按钮赋值,可以显示点击过的 */
			downButtonId: 0,
			/* 是否要执行自动播放下一集 */
			isAutoPlayNext: true,
			/* 点击按钮变色,并且给选集按钮赋值,可以显示点击过的 */
			clickButtonId: 0,
			/* 模态框属性,动态赋值的变量 */
			modalName: null,
			/* 当前播放的url */
			playUrl: '',
			/* 初始化历史记录位置播放 */
			oldPlayTime: '',
			video: {}
		};
	},
	onLoad: function(e) {
		console.log(e);
		let data = JSON.parse(e.video);
		console.log(data);
		var showurl = data.show_url;

		var realUrls = [];
		//播放地址
		for (var i = 0; i < showurl.length; i++) {
			var url = showurl[i];
			realUrls.push({
				name: '第' + (i + 1) + '集',
				url: url,
				//0 本地下载 第i集 网络带过来的
				type: i
			});
		}

		var downUrl = data.down_url;
		var downUrls = [];
		for (var i = 0; i < downUrl.length; i++) {
			var url = downUrl[i];
			var persent = url.split('$')[0] == '0' ? '100' : '0';
			downUrls.push({
				name: '第' + (i + 1) + '集',
				url: url,
				//0 本地下载 第i集 网络带过来的
				type: i,
				downPersent: persent
			});
		}
		data.show_url = realUrls;
		data.down_url = downUrls;

		this.video = data;

		var playJi = uni.getStorageSync(this.video.id) || 0;
		this.clickButtonId = playJi;
		this.playUrl = realUrls[playJi].url;
		console.log('this.video' + this.video);

		console.log('保存的所有key: ' + uni.getStorageInfoSync().keys);
		this.oldPlayTime = uni.getStorageSync(this.video.id + '_' + this.clickButtonId) || 0;
		console.log('当前播放视频记录时 ' + this.oldPlayTime);
	},
	onUnload() {
		uni.$off('drawer-page');
	},
	onReady: function(res) {
		this.videoContext = uni.createVideoContext('myVideo');
	},

	methods: {
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target;
		},
		hideModal(e) {
			this.modalName = null;
		},

		//点击切换视频按钮
		onClickButton(urlId, url) {
			console.log('点击按钮的id' + urlId + url);

			//给选中的标签赋值
			this.clickButtonId = urlId;

			//关闭弹窗
			this.modalName = null;

			//切换视频
			this.playUrl = url;

			//切换播放记录
			this.oldPlayTime = uni.getStorageSync(this.video.id + '_' + this.clickButtonId) || 0;
		},
		//自动播放下一集
		autoPlayNext(e) {
			var urls = this.video.show_url;
			var url = urls[this.clickButtonId + 1];
			if (url != null && url != 'undefined') {
				//切换视频
				this.playUrl = url.url;

				//给选中的标签赋值
				this.clickButtonId = this.clickButtonId + 1;

				//切换播放记录
				this.oldPlayTime = uni.getStorageSync(this.video.id + '_' + this.clickButtonId) || 0;
			}
		},
		//保存记录
		saveHis(e) {
			var times = e.detail.currentTime;

			var beforeTime = times - 5;
			if (beforeTime < 0) {
				beforeTime = 0;
			}

			//每5s取一次吧
			if (beforeTime % 10 == 0) {
				/* console.log('当前缓存时间 ' + beforeTime + '实际时间' + times); */
				//取播放记录前5s,这样可以解决进来就切换或者点击视频自动切换下一个视频
				uni.setStorageSync(this.video.id + '_' + this.clickButtonId, beforeTime);
				//播放到第几集
				uni.setStorageSync(this.video.id, this.clickButtonId);

				console.log('当前播放到滴 ' + this.clickButtonId + '集');
			}

			//控制在5分钟
			/* if (times > 300 && getApp().globalData.isShowPay == 'true') {
				控制会员播放

				console.log('我进来了 onshow video');
				var userinfo = uni.getStorageSync('userinfo');
				//已经登陆
				if (!userinfo.length && userinfo.length != 0) {
					if (!userinfo.vip) {
						//非会员看5分钟
						this.videoContext.stop();
						uni.showToast({
							title: 'vip专享',
							duration: 2000
						});
					} else if (userinfo.vip) {
						//我是会员
					}
				} else {
					//没有登陆
					this.videoContext.stop();
					uni.showToast({
						title: 'vip专享',
						duration: 2000
					});
				}
			} */
		},
		back() {
			uni.navigateBack();
		},
		downLoad(index, v) {
			console.log('正在下载' + v);
			this.video.down_url[index].type = '0';
			this.video.down_url[index].downPersent = '0';

			var that = this;
			var saveResult = uni.downloadFile({
				url: v.url,
				success: res => {
					console.log('下载到临时文件夹成功', res);

					//把下载内容永久保存
					uni.saveFile({
						tempFilePath: res.tempFilePath,
						success: function(res) {
							var savedFilePath = res.savedFilePath;
							console.log('保存文件情况', res);

							//下载并保存后的路径这个是

							var saveVideo = uni.getStorageSync('saveVideo') || [];

							var video = that.video;
							//查看缓存里面是否有
							for (var i = 0; i < saveVideo.length; i++) {
								var video_temp = saveVideo[i];
								if (video.id == video_temp.id) {
									//以前有下载过
									video = video_temp;
									isDownEd = true;
									saveVideo.splice(i, 1);
									break;
								}
							}

							//重新组装

							for (var j = 0; j < video.show_url.length; j++) {
								var u = video.show_url[j];

								//以前下载过
								if (u.type == '0') {
									video.show_url[j] = '0$' + video.show_url[j].url;
								} else {
									video.show_url[j] = '第' + j + '集$' + video.show_url[j].url;
								}
							}

							for (var j = 0; j < video.down_url.length; j++) {
								var u = video.down_url[j];

								//以前下载过
								if (u.type == '0') {
									video.down_url[j] = '0$' + video.down_url[j].url;
								} else {
									video.down_url[j] = '第' + j + '集$' + video.down_url[j].url;
								}
							}

							video.show_url[index] = '0$' + savedFilePath;

							saveVideo.unshift(video);

							uni.setStorageSync('saveVideo', saveVideo);
						},
						fail: function(err) {
							console.log('保存失败', err);
						}
					});
				},
				fail: err => {
					console.log('下载到临时文件夹失败', err);
				}
			});

			var taskJD = '1';
			saveResult.onProgressUpdate(res => {
				/* console.log('已经上传的数据长度' + res.totalBytesWritten);
				console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToWrite); */

				var taskJD_ = res.progress;
				console.log('下载进度' + taskJD_);
				//进度没有变化
				if (taskJD == taskJD_) {
					return;
				}
				taskJD = taskJD_;

				that.video.down_url[index].downPersent = taskJD;
			});
		},
		goToWeb() {
			if (getApp().globalData.isShowPay == 'true') {
				/* 控制会员播放 */

				console.log('我进来了 onshow video');
				var userinfo = uni.getStorageSync('userinfo');
				//已经登陆
				if (!userinfo.length && userinfo.length != 0) {
					if (!userinfo.vip) {
						//非会员看5分钟
						this.videoContext.stop();
						uni.showToast({
							title: 'vip专享',
							duration: 2000
						});
					} else if (userinfo.vip) {
						//我是会员
						this.videoContext.pause();
						uni.navigateTo({
							url: '/pages/videoPage/videoPlayer/videoWeb/videoWeb?url=' + this.playUrl
						});
					}
				} else {
					//没有登陆
					this.videoContext.stop();
					uni.showToast({
						title: 'vip专享',
						duration: 2000
					});
				}
			} else {
				//未开启会员机制

				this.videoContext.pause();
				uni.navigateTo({
					url: '/pages/videoPage/videoPlayer/videoWeb/videoWeb?url=' + this.playUrl
				});
			}
		}
	}
};
</script>

<style>
@import '../../../colorui/main.css';
@import '../../../colorui/icon.css';
.status_bar {
	height: var(--status-bar-height);
	width: 100%;
	background-color: #000000;
}
.top_view {
	height: var(--status-bar-height);
	width: 100%;
	position: fixed;
	background-color: #000000;
	top: 0;
	z-index: 999;
}
.clickButtonId {
	font-size: 30upx;
	font-weight: bold;
	transition: all 0.3s;
	color: #5100f5;
	box-shadow: 2upx 2upx 2upx 1upx rgba(134, 134, 134, 25);
}
.texts {
	font-size: 24upx;
	color: #aaaaaa;
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-align: left;
	line-height: 2em;
}
.texts1 {
	position: relative;
	top: 40upx;
	font-size: 24upx;
	color: #aaaaaa;
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	text-align: left;
	line-height: 2em;
}
.shows {
	padding: 40upx 40upx;
	height: 700upx;
}
.link-top {
	position: relative;
	top: 30upx;
	bottom: 30upx;
	width: 100%;
	height: 2upx;
	border-top: solid #aaaaaa 1px;
}
</style>

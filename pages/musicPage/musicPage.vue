<template>
	<view class="container999">
		<view :class="showMusicDetail || showHot ? 'showMusicIhide' : 'showMusicIshow'">
			<!-- #ifdef APP-VUE || MP-WEIXIN -->
			<view class="status_bar"><view class="top_view"></view></view>
			<!-- #endif -->
			<view class="nav" style="box-shadow: 5upx 5upx 10upx rgba(89, 125, 172, 0.4);">
				<!-- 导航栏 agents导航栏标题 -->
				<navTab ref="navTab" :tabTitle="tabTitle" @changeTab="changeTab" class="backGrondColor" style="height: 6vh;"></navTab>

				<!-- 搜索 -->
				<view class="searchInput999" v-if="currentTab != 0">
					<view class="searchBox999"><image src="/static/icon-search.png" class="search999"></image></view>
					<input class="input999" placeholder="输入关键词" @confirm="confirm" type="text" confirm-type="search" :value="input" />
					<view
						@click="playAll(list[currentTab])"
						style="color: #a3a7a8;background-color: #efefef;padding: 10upx; width: 120upx; text-align: center;border-radius: 20upx;"
					>
						全部播放
					</view>
				</view>
			</view>

			<!-- swiper切换 swiper-item表示一页 scroll-view表示滚动视窗 -->
			<swiper style="min-height: 80vh;" :current="currentTab" @change="swiperTab">
				<swiper-item v-for="(listItem, listIndex) in list" :key="listIndex">
					<scroll-view style="height: 80.1vh;" scroll-y="true" @scrolltolower="lower1" scroll-with-animation :scroll-into-view="toView">
						<view style="width: 100vh;height: 20upx; opacity:0;"></view>

						<view class="content">
							<view class="index">
								<view class="recom">
									<!-- hot -->
									<view v-for="(val, index) in hotCateGory" :key="index" class="zj" v-if="listIndex == 0" @tap="showHotButton(true, val)">
										<view class="imgSpan">
											<image class="img" v-if="val.picUrl" :src="val.picUrl" mode="widthFix"></image>
											<image class="icon" src="/static/icon/kaishi-2.png'" mode="widthFix"></image>
											<view class="listenCount"><image src="/static/icon/yinle.png'"></image></view>
										</view>
										<view v-if="val.showName" class="name">{{ val.showName }}</view>
									</view>

									<!-- 正常列表正常的遍历 -->

									<view
										v-for="(item, index) in list[listIndex]"
										:key="index"
										style="width: 100%;height: 122upx;border-bottom:2upx solid #ffffff;"
										v-if="listIndex != 0"
										:class="isClickPlay == index ? 'shaky' : 'noShaky'"
									>
										<button @tap="goUrl(index, list[listIndex][index])">
											<view style="height: 120upx;">
												<image style="width: 100upx; height: 100upx;  line-height:100upx;margin: 10upx 10upx;" :src="item.picUrl"></image>
												<view style="display: inline-block;height: 100upx;left: 15upx;position: relative;width: 80%;">
													<view
														style="text-align: left;line-height:50upx;height: 50upx;font-size: 30upx;width: 400upx;white-space: nowrap;overflow: hidden;text-overflow:ellipsis;position: relative; top: -15upx;"
													>
														{{ item.name }}
														<view class="biao sq" style="left: 15upx; position: relative;">SQ</view>
													</view>
													<view
														style="text-align: left;line-height:60upx;color: #999999;height: 60upx;font-size: 22upx;width: 400upx;white-space: nowrap;overflow: hidden;text-overflow:ellipsis;position: relative; top: -15upx;"
													>
														{{ item.authorName }}
													</view>
												</view>
											</view>
										</button>

										<view style="width: 100upx; float: right;line-height: 30upx;position: relative;bottom: 80upx;right: 20upx;">
											<view v-if="downLoadedMsg.indexOf(item.songOldUrl) !== -1">
												<view class="progress-box" v-for="(d, i) in downLoadMsg" :key="i">
													<progress
														active-mode="forwards"
														v-if="d.songOldUrl == item.songOldUrl"
														:percent="d.taskPersent"
														active
														stroke-width="3"
														backgroundColor="#999"
													/>
												</view>
											</view>
											<view v-if="downLoadedMsg.indexOf(item.songOldUrl) === -1" @tap="downLoad(item, index)">
												<image src="/static/image/icon/xiazaiH.png" style="width: 30upx; height: 30upx;"></image>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="noCard" v-if="currentTab != 0 && listItem.length === 0">暂无信息</view>
						<view style="width: 100%;height: 150upx;opacity:0;">底部占位盒子</view>
					</scroll-view>
				</swiper-item>
			</swiper>

			<view class="playBot borderColorTop">
				<image class="img" :class="playState ? 'zhuan' : ''" :src="picUrl" @tap="showMusicDetailFuc"></image>
				<view class="title">
					<view class="name">{{ name }}</view>

					<view class="desc">{{ authName }}</view>
				</view>
				<image class="icon" v-if="!playState" src="/static/image/icon/kaishiH.png" @tap="clickParent"></image>
				<image v-if="playState" class="icon" src="/static/image/icon/zantingH.png" @tap="clickParent"></image>
			</view>
			<tabBar4 :currentPage="currentPage"></tabBar4>
		</view>

		<!-- 歌曲详细页面 -->
		<view :class="showMusicDetail ? 'showMusicDetail' : 'showMusic'">
			<music-player @fatherMethod="fatherMethod" @changeSongMsg="changeSongMsg" @changeState="changeState" ref="mychild"></music-player>
		</view>

		<!-- 热门歌曲弹出框   -->

		<view :class="showHot ? 'showHot' : 'hideHot'">
			<!-- #ifdef APP-VUE || MP-WEIXIN -->
			<view class="status_bar"><view class="top_view"></view></view>
			<!-- #endif -->
			<view style="height: 100upx;">
				<view
					@click="playAll(hotList)"
					style="color: #a3a7a8;background-color: #f5f5f5;padding: 10upx; width: 120upx; text-align: center;border-radius: 20upx; float: left; margin: 40upx;"
				>
					全部播放
				</view>
				<image src="/static/close-_b.png" style="height: 40upx;width: 40upx; float: right; margin: 40upx;" @tap="showHotButton(null, null)"></image>
			</view>
			<scroll-view style="height: 86%;" scroll-y="true" @scrolltolower="getMoreHost()">
				<view
					v-for="(item, index) in hotList"
					:key="index"
					style="float: left;width: 100%;text-align: left;height: 122upx;border-bottom:2upx solid #ffffff;"
					:class="isClickPlay == index ? 'shaky' : 'noShaky'"
				>
					<button @tap="goUrl(index, hotList[index])" style="background-color: transparent;">
						<view style="height: 120upx;">
							<image style="width: 100upx; height: 100upx;  line-height:100upx;margin: 10upx 10upx;" :src="item.picUrl"></image>
							<view style="display: inline-block;height: 100upx;left: 15upx;position: relative; width: 80%;">
								<view
									style="text-align: left;line-height:50upx;height: 50upx;font-size: 30upx;width: 400upx;white-space: nowrap;overflow: hidden;text-overflow:ellipsis;position: relative; top: -15upx;"
								>
									{{ item.name }}
									<view class="biao sq" style="left: 15upx; position: relative;">SQ</view>
								</view>
								<view
									style="text-align: left;line-height:60upx;color: #999999;height: 60upx;font-size: 22upx;width: 400upx;white-space: nowrap;overflow: hidden;text-overflow:ellipsis;position: relative; top: -15upx;"
								>
									{{ item.authorName }}
								</view>
							</view>
						</view>
					</button>

					<!-- 下载进度条 -->
					<view v-if="downLoadedMsg.indexOf(item.songOldUrl) !== -1" style="width: 150upx; line-height: 30upx;position: relative;bottom: 80upx;left: 80%">
						<view class="progress-box" v-for="(d, i) in downLoadMsg" :key="i">
							<progress
								active-mode="forwards"
								v-if="d.songOldUrl == item.songOldUrl && d.taskPersent != '-1'"
								show-info="true"
								:percent="d.taskPersent"
								active
								stroke-width="3"
								backgroundColor="#999"
							/>
						</view>
					</view>
					<!-- 下载取消按钮 -->
					<view style="width: 100upx; float: right;line-height: 30upx;position: relative;bottom: 80upx;right: 20upx;">
						<view v-if="downLoadedMsg.indexOf(item.songOldUrl) === -1" @tap="downLoad(item, index)">
							<image src="/static/image/icon/xiazaiH.png" style="width: 30upx; height: 30upx;"></image>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
const util = require('../../util/util.js');
import navTab from '../../components/navTab.vue';
import tabBar4 from '../../components/tabBar4.vue';
import musicPlayer from './info/index.vue';
export default {
	components: { navTab, tabBar4, musicPlayer },
	data() {
		return {
			//要删除的歌曲的songUrl
			downLoadMsg: [],
			downLoadedMsg: [],
			isClickDownLoad: null,
			isClickPlay: null,
			showHot: null,
			name: '',
			authName: '',
			picUrl: '',
			playState: 0,
			showMusicDetail: null,
			toView: '', //回到顶部id
			currentPage: 'musicPage',
			currentTab: 0, //sweiper所在页
			pages: [1, 1, 1, 1, 1, 1, 1, 1, 1], //第几页存储
			paraForEachPage: [],
			input: '',
			inputOld: '',
			tabTitle: ['推荐', '', '', '', ''], //导航栏格式
			list: [], //数据格式
			hotCateGory: [],
			hotList: []
		};
	},
	onLoad(e) {
		uni.showLoading({
			title: '加载中'
		});

		setTimeout(function() {
			uni.hideLoading();
		}, 2000);

		this.urlRequest();

		this.getHot();
	},
	onShow() {},
	onHide() {},
	methods: {
		toTop() {
			this.toView = '';
			setTimeout(() => {
				this.toView = 'top' + this.currentTab;
			}, 10);
		},

		//显示热门播放列表
		showHotButton(e, value) {
			//这是关闭窗口
			if (value == null) {
				this.showHot = e;
				this.pages[0] = '1';
				this.paraForEachPage[0].id = '';
				this.hotList = [];
				//延迟渲染,让页面先弹出来
				/* let _open = setTimeout(() => {
					this.hotList = [];
					_open = null;
				}, 10); */
				this.$forceUpdate();
				return;
			}

			var id = value.id;
			this.paraForEachPage[0].id = id;
			this.getMoreHost();
		},
		async getMoreHost() {
			var pagePara = this.paraForEachPage[0];
			var input = this.input;
			var id = pagePara.id;
			var page = this.pages[0];
			var pageSize = '20';

			var par = {
				id: id,
				input: input,
				page: page,
				pageSize: pageSize
			};

			const [err, ret] = await uni.request({
				url: this.$serverUrl + '/getMusicListByCategory',
				data: par,
				method: 'POST',
				header: {
					'content-type': 'application/json'
				}
			});

			if (err) {
				console.log(err);
			} else {
				//延迟渲染,让页面先弹出来

				this.pages[this.currentTab]++;
				let data = ret.data;
				var templist = this.hotList.concat(data);
				this.hotList = templist;
				this.$forceUpdate();
				this.showHot = true;
			}
		},
		//显示歌曲详情页面
		showMusicDetailFuc() {
			this.showMusicDetail = true;
		},
		//子类组件调用父类
		fatherMethod() {
			this.showMusicDetail = null;
		},
		//父类调用子类
		clickParent() {
			this.playState = this.$refs.mychild.play();
		},

		//子类状态改变了
		changeState(e) {
			this.playState = e;
		},

		changeSongMsg(e) {
			console.log('接收到子类的歌曲信息了' + e.name + e.authorName);
			this.name = e.name;
			this.authName = e.authorName;
			this.picUrl = e.picUrl;
		},
		changeTab(index) {
			this.currentTab = index;
		},

		// swiper 滑动
		swiperTab: function(e) {
			var index = e.detail.current; //获取索引
			this.$refs.navTab.longClick(index);

			if (this.input.length == 0) {
				return;
			}

			//第一页时top500,不要去那搜索
			if (this.currentTab == 0) {
				return;
			}

			//滑动的时候判断有么有值,没有的话取获取一下
			let currentList = this.list[this.currentTab];
			if (currentList.length == 0 || (this.inputOld != this.input && this.inputOld != '')) {
				this.inputOld = this.input;

				var pagePara = this.paraForEachPage[this.currentTab];
				var id = pagePara.id;
				var page = this.pages[this.currentTab];
				var pageSize = '20';

				var par = {
					id: id,
					input: this.input,
					page: page,
					pageSize: pageSize
				};
				console.log('para is ' + pagePara);

				this.urlRequestSerch(par);
			}
		},
		// 加载更多 util.throttle为防抖函数
		lower1: util.throttle(function(e) {
			if (this.currentTab == 0) {
				return;
			}

			console.log(`加载${this.currentTab}`); //currentTab表示当前所在页数 根据当前所在页数发起请求并带上page页数
			uni.showLoading({
				title: '加载中',
				mask: true
			});

			var pagePara = this.paraForEachPage[this.currentTab];
			var input = this.input;
			var id = pagePara.id;
			var page = this.pages[this.currentTab];
			var pageSize = '20';

			var par = {
				id: id,
				input: input,
				page: page,
				pageSize: pageSize
			};
			this.urlRequestNextPage(par);
		}, 300),

		goUrl: function(str, val) {
			console.log("点击播放歌曲"+val.name)
			this.isClickPlay = str;
			this.$refs.mychild.fatherToPlay(val);
		},
		//获取音乐资源的标题
		async urlRequest() {
			const [err, ret] = await uni.request({
				url: this.$serverUrl + '/getMusicInit',
				//data: [],
				method: 'POST',
				header: {
					'content-type': 'application/json'
				},
				timeout: '100000'
			});

			if (err) {
				console.log(err);
			} else {
				let data = ret.data;
				this.paraForEachPage = data;

				//初始化标题
				this.tabTitle = [];

				//初始化每页的第几页
				this.pages = [];

				//初始化list详情
				this.list = [];

				for (var i = 0; i < data.length; i++) {
					var e = data[i];
					this.tabTitle.push(e.showName);

					this.pages.push(e.page);

					this.list.push([]);
				}
				console.log(data);

				//初始化top500
				var par = {
					id: '0',
					input: '',
					page: '1',
					pageSize: '20'
				};
				console.log('para is ' + par);

				this.urlRequestSerch(par);
			}
		},

		//获取更多音乐下一页
		async urlRequestNextPage(par) {
			const [err, ret] = await uni.request({
				url: this.$serverUrl + '/musicSearch',
				data: par,
				method: 'POST',
				header: {
					'content-type': 'application/json'
				},
				timeout: '100000'
			});

			uni.hideLoading();
			if (err) {
				console.log(err);
			} else {
				let data = ret.data;

				if (data.length == 0) {
					uni.showToast({
						icon: 'success',
						title: '没有更多了'
					});
					return;
				}

				this.pages[this.currentTab]++;
				var templist = this.list[this.currentTab].concat(data);
				this.list[this.currentTab] = templist;
				this.$forceUpdate();
				console.log(data);
			}
		},
		//搜索
		confirm(e) {
			console.log('输入了' + e.detail.value);

			//收起键盘
			// #ifndef APP-PLUS
			uni.hideKeyboard();
			// #endif
			// #ifdef APP-PLUS
			plus.key.hideSoftKeybord();
			// #endif

			if (e.detail.value.trim().length == 0 || this.currentTab == 0) {
				return;
			}

			var pagePara = this.paraForEachPage[this.currentTab];
			var input = e.detail.value;
			if (this.input == input) {
				return;
			}

			this.inputOld = this.input;
			this.input = input;

			var id = pagePara.id;

			//如果时输入的话,page应该一直都是1之前内容都清空 排行榜的不要动

			for (var i = 1; i < this.pages.length; i++) {
				this.pages[i] = 1;
				this.list[i] = [];
			}

			this.pages[this.currentTab] == 1;
			var page = this.pages[this.currentTab];

			var pageSize = '20';

			var par = {
				id: id,
				input: input,
				page: page,
				pageSize: pageSize
			};
			console.log('para is ' + pagePara);

			this.urlRequestSerch(par);
		},
		//获取音乐资源
		async urlRequestSerch(data) {
			uni.showLoading({
				title: '加载中',
				mask: true
			});
			const [err, ret] = await uni.request({
				url: this.$serverUrl + '/musicSearch',
				data: data,
				method: 'POST',
				header: {
					'content-type': 'application/json'
				},
				timeout: '100000'
			});

			uni.hideLoading();
			if (err) {
				console.log(err);
			} else {
				let data = ret.data;
				this.list[this.currentTab] = data;

				this.$forceUpdate();
				console.log(data);
			}
		},
		playAll(e) {
			var allPlay = e;

			if (allPlay.length == 0) {
				uni.showToast({
					icon: 'none',
					title: `播放列表不能为空`
				});
				return;
			}

			//少循环一个,当作参数传过去
			let musicList = uni.getStorageSync('musicList') || [];
			for (var i = allPlay.length - 1; i > 0; i--) {
				var mus = allPlay[i];

				var musicId = mus.songOldUrl;
				var musicCach = [musicId, mus];

				for (var j = 0; j < musicList.length; j++) {
					var musCache = musicList[j];

					if (musicCach[0] == musCache[0]) {
						//先判断哪个是本地,哪个是网络 0 本地 1酷狗 2网易
						var cachType_ = musCache[1].type; //缓存
						var cachType = musicCach[1].type; //准备播放
						//如果是网络过来的  网络不能覆盖本地,只有一个条件
						if (cachType != '0') {
							//如果缓存里面是本地的,就删除放在最上面,内容还是本地的
							if (cachType_ == '0') {
								musicCach = muicCach1[0];
							}
						}

						//删除放在前面
						musicList.splice(j, 1);
						j = j - 1;

						break;
					}
				}

				musicList.unshift(musicCach);
			}

			uni.setStorageSync('musicList', musicList);
			this.goUrl('info/index', allPlay[0]);
		},
		async getHot() {
			const [err, ret] = await uni.request({
				url: this.$serverUrl + '/getMusicCateGory',
				data: '',
				method: 'POST',
				header: {
					'content-type': 'application/json'
				}
			});

			if (err) {
				console.log(err);
			} else {
				let data = ret.data;
				this.hotCateGory = data;

				this.$forceUpdate();
				console.log(data);
			}
		},
		downLoad(e, index) {
			//给下载的内容动画
			this.isClickDownLoad = index;

			console.log('进来下载页面了');

			var saveResult = uni.downloadFile({
				url: e.songUrl,
				success: res => {
					console.log('下载到临时文件夹成功', res);

					//把下载内容永久保存
					uni.saveFile({
						tempFilePath: res.tempFilePath,
						success: function(res) {
							var savedFilePath = res.savedFilePath;
							console.log('保存文件情况', res);

							//下载并保存后的路径这个是

							var saveMusic = uni.getStorageSync('saveMusic') || [];

							e.songUrl = savedFilePath;

							//设置为0,本地的类型是0,避免取更新播放地址和区别网络歌曲
							e.type = '0';
							saveMusic.push(e);

							uni.setStorageSync('saveMusic', saveMusic);
						},
						fail: function(err) {
							console.log('保存失败', err);
							isDowned = true;
						}
					});
				},
				fail: err => {
					console.log('下载到临时文件夹失败', err);
				}
			});

			console.log('我已经把下载进度保存下来了');
			//封装一下,展示歌曲并且还有进度
			var musicDownTask = {
				songOldUrl: e.songOldUrl,
				taskPersent: '0',
				isCansole: 'false'
			};

			this.downLoadMsg.push(musicDownTask);

			//不存在再加入
			if (this.downLoadedMsg.indexOf(e.songOldUrl) === -1) {
				this.downLoadedMsg = this.downLoadedMsg + e.songOldUrl;
			}

			this.$forceUpdate();
			var taskJD = '1';
			let that = this;
			saveResult.onProgressUpdate(res => {
				/* console.log('已经上传的数据长度' + res.totalBytesWritten);
					console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToWrite); */
				var taskJD_ = res.progress;

				//进度没有变化
				if (taskJD == taskJD_) {
					return;
				}
				taskJD = taskJD_;

				var down_ = that.downLoadMsg;

				//已经加入任务了所以肯定有的
				for (var i = 0; i < down_.length; i++) {
					var down = down_[i];
					if (down.songOldUrl == e.songOldUrl) {
						//如果没删除,把进度传过去
						down.taskPersent = taskJD_;

						down_ = down_.splice(i, 1, down);

						that.downLoadMsg = down_;
						that.$forceUpdate();
						console.log(taskJD_);
						break;
					}
				}
			});
		}
	}
};
</script>

<style lang="scss">
.container999 {
	width: 100vw;
	font-size: 28upx;
	min-height: 100vh;
	height: 100vh;
	overflow: hidden;
	color: #6b8082;
	position: relative;
	background-color: white;
}
.content {
	width: 100%;
}

.card {
	width: 90%;
	height: 368upx;
	background-color: white;
	margin: 0 auto 42upx auto;
	background: #ffffff;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	position: relative;
}

.noCard {
	position: relative;
	top: 10upx;
	width: 80%;
	height: 200upx;
	margin: auto;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #999999;
	box-shadow: 0 0 10upx 0 rgba(0, 0, 0, 0.1);
	border-radius: 10upx;
}

.nav {
	position: relative;
	left: 0;
	top: 0;
	color: white;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	font-size: 24upx;
	background-color: #ffffff;
	z-index: 996;
}

.searchInput999 {
	width: 90%;
	margin: 0 auto;
	background: white;
	border-radius: 30upx;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 56upx;
}

.search999 {
	width: 32upx;
	height: 32upx;
}

.searchBox999 {
	width: 56upx;
	height: 56upx;
	display: flex;
	justify-content: center;
	align-items: center;
}

.input999 {
	color: #999;
	width: 70%;
}
.index {
	width: 100vw;
	padding-bottom: 60upx;
	color: #333333;

	.bannerContent {
		width: 100%;
		height: 220upx;
		.swiperImg {
			width: 100%;
			height: 100%;
		}
	}

	.content {
		padding: 20upx;

		.bar {
			display: flex;
			padding: 36upx 0;
			margin-top: -28upx;
			position: relative;
			z-index: 1;
			background: #ffffff;
			box-shadow: 4upx 4upx 10upx #cccccc;

			.iconSpan {
				flex: 1;
				text-align: center;
				.iconBarImg {
					width: 44upx;
					height: 44upx;
				}
			}
		}

		.used {
			display: flex;
			margin-top: 40upx;

			.usedImg {
				position: relative;
				width: 220upx;
				height: 220upx;
				margin-right: 20upx;
				box-shadow: 4upx 4upx 10upx #cccccc;
				image {
					height: 100%;
					width: 100%;
				}

				.icon {
					position: absolute;
					width: 50upx;
					height: 50upx;
					top: 50%;
					left: 50%;
					margin: -25upx auto auto -25upx;
					opacity: 0.8;
				}

				.imgTitle {
					position: absolute;
					display: block;
					width: 100%;
					bottom: 20upx;
					text-align: center;
					color: #ffffff;
				}
			}

			.list {
				flex: 1;

				.info {
					position: relative;
					height: 100upx;
					box-sizing: border-box;
					padding: 12upx 20upx;

					&:first-child {
						margin-bottom: 20upx;
					}

					.name {
						font-size: 32upx;
					}

					.disc {
						font-size: 26upx;
						color: #6f6f6f;
					}

					.listImg {
						position: absolute;
						right: 0;
						top: 0;
						width: 100upx;
						height: 100upx;
					}
				}
			}
		}
	}
}

.hideSerch {
	visibility: hidden;
	opacity: 0;
	height: 0vh;
	-webkit-transition: all 0.5s linear;
	-moz-transition: all 0.5s linear;
	-ms-transition: all 0.5s linear;
	-o-transition: all 0.5s linear;
	transition: all 0.5s linear;
}
.nohideSerch {
	visibility: show;
	opacity: 1;
	height: 6vh;
	-webkit-transition: all 0.5s linear;
	-moz-transition: all 0.5s linear;
	-ms-transition: all 0.5s linear;
	-o-transition: all 0.5s linear;
	transition: all 0.5s linear;
}
.status_bar {
	height: var(--status-bar-height);
	width: 100%;
	background: -moz-linear-gradient(left, #ace, #f9a2ff); /*Mozilla*/
	background: -webkit-gradient(linear, 0 50%, 100% 50%, from(#ace), to(#f9a2ff)); /*Old gradient for webkit*/
	background: -webkit-linear-gradient(left, #ace, #f9a2ff); /*new gradient for Webkit*/
	background: -o-linear-gradient(left, #ace, #f9a2ff); /*Opera11*/
}
.top_view {
	height: var(--status-bar-height);
	width: 100%;
	position: fixed;
	background: -moz-linear-gradient(left, #ace, #f9a2ff); /*Mozilla*/
	background: -webkit-gradient(linear, 0 50%, 100% 50%, from(#ace), to(#f9a2ff)); /*Old gradient for webkit*/
	background: -webkit-linear-gradient(left, #ace, #f9a2ff); /*new gradient for Webkit*/
	background: -o-linear-gradient(left, #ace, #f9a2ff); /*Opera11*/
	top: 0;
	z-index: 1999;
}
.backGrondColor {
	background: -moz-linear-gradient(left, #ace, #f9a2ff); /*Mozilla*/
	background: -webkit-gradient(linear, 0 50%, 100% 50%, from(#ace), to(#f9a2ff)); /*Old gradient for webkit*/
	background: -webkit-linear-gradient(left, #ace, #f9a2ff); /*new gradient for Webkit*/
	background: -o-linear-gradient(left, #ace, #f9a2ff); /*Opera11*/
}
button ::after {
	border: none;
}
.clear:after {
	content: '';
	display: block;
	height: 0;
	line-height: 0;
	clear: both;
}

//展示列表合并一页的css

.recom {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;

	.zj {
		width: 45%;
		height: 45%;
		margin-bottom: 30upx;
		margin-left: 15upx;
		margin-right: 15upx;
		.imgSpan {
			position: relative;
			.img {
				display: block;
				width: 100%;
			}
			.icon {
				position: absolute;
				z-index: 1;
				right: 10upx;
				bottom: 10upx;
				width: 40upx;
				opacity: 0.9;
			}
			.listenCount {
				position: absolute;
				left: 10upx;
				bottom: 10upx;
				color: rgba(255, 255, 255, 0.8);
				font-size: 20upx;

				image {
					width: 28upx;
					height: 32upx;
					margin-right: 6upx;
					display: inline-block;
					vertical-align: text-bottom;
				}
			}
		}
	}

	.name,
	.author {
		padding: 0 6upx;
		font-size: 26upx;
	}

	.author {
		color: #999999;
	}
}

//底部播放器样式

.playBot {
	background-color: #ffffff;
	z-index: 1000;
	position: fixed;
	display: flex;
	align-items: center;
	bottom: 132upx;
	width: 100%;
	padding: 20upx 25upx 10upx;
	box-sizing: border-box;
	.img {
		display: block;
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		&.zhuan {
			-webkit-transition-property: -webkit-transform;
			-webkit-transition-duration: 1s;
			-moz-transition-property: -moz-transform;
			-moz-transition-duration: 1s;
			-webkit-animation: rotate 3s linear infinite;
			-moz-animation: rotate 3s linear infinite;
			-o-animation: rotate 3s linear infinite;
			animation: rotate 3s linear infinite;
		}
	}
	@-webkit-keyframes rotate {
		from {
			-webkit-transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@-moz-keyframes rotate {
		from {
			-moz-transform: rotate(0deg);
		}
		to {
			-moz-transform: rotate(359deg);
		}
	}
	@-o-keyframes rotate {
		from {
			-o-transform: rotate(0deg);
		}
		to {
			-o-transform: rotate(359deg);
		}
	}
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}

	.title {
		flex: 1;
		padding-left: 30upx;
		font-size: 34upx;
		.desc {
			font-size: 26upx;
			color: rgb(75, 75, 75);
		}
	}
	.icon {
		width: 65upx;
		height: 65upx;
		padding-left: 30upx;
		&.liebiao {
			width: 40upx;
			height: 40upx;
		}
	}
}

//显示详情页的css

.showMusicDetail {
	position: fixed;
	top: 0;
	z-index: 1000;
	width: 100vw;
	height: 100vh;
	transition: all 0.5s;
	visibility: visible;
	transform: translateY(0);
}

.showMusic {
	position: fixed;
	top: 0;
	z-index: 1000;
	width: 100vw;
	height: 100vh;
	transition: all 0.5s;
	visibility: hidden;
	transform: translateY(100%);
}
.showMusicIhide {
	display: none;
}
.showMusicIshow {
}

.showHot {
	z-index: 1000;
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	transition: all 0.8s;
	transform: translateY(0);
	background: -moz-linear-gradient(left, #ace, #f9a2ff); /*Mozilla*/
	background: -webkit-gradient(linear, 0 50%, 100% 50%, from(#ace), to(#f9a2ff)); /*Old gradient for webkit*/
	background: -webkit-linear-gradient(left, #ace, #f9a2ff); /*new gradient for Webkit*/
	background: -o-linear-gradient(left, #ace, #f9a2ff); /*Opera11*/
}
.hideHot {
	z-index: 1000;
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	transition: all 0.8s;
	transform: translateY(100%);
	background: -moz-linear-gradient(left, #ace, #f9a2ff); /*Mozilla*/
	background: -webkit-gradient(linear, 0 50%, 100% 50%, from(#ace), to(#f9a2ff)); /*Old gradient for webkit*/
	background: -webkit-linear-gradient(left, #ace, #f9a2ff); /*new gradient for Webkit*/
	background: -o-linear-gradient(left, #ace, #f9a2ff); /*Opera11*/
}
button:after {
	border: none;
}
.biao {
	display: inline-block;
	vertical-align: text-bottom;
	padding: 2upx 6upx;
	margin-right: 10upx;
	border: solid 1px #f55500;
	color: #f55500;
	border-radius: 4upx;
	font-size: 24upx;
	line-height: 24upx;
	&.sq {
		color: #9c8200;
		border: solid 1px #9c8200;
	}
}

/* 下载和点击抖动效果 */

.shaky {
	transform: rotateX(360deg);
	-ms-transform: rotateX(360deg); /* IE 9 */
	-moz-transform: rotateX(360deg); /* Firefox */
	-webkit-transform: rotateX(360deg); /* Safari 和 Chrome */
	-o-transform: rotateX(360deg);

	transition: All 1s ease-in-out;
	-ms-transform: All 1s ease-in-out; /* IE 9 */
	-webkit-transition: All 1s ease-in-out;
	-moz-transition: All 1s ease-in-out;
	-o-transition: All 1s ease-in-out;
}
.shakyDownLoad {
	transform: rotateX(90deg);
	-ms-transform: rotateX(90deg); /* IE 9 */
	-moz-transform: rotateX(90deg); /* Firefox */
	-webkit-transform: rotateX(90deg); /* Safari 和 Chrome */
	-o-transform: rotateX(90deg);

	z-index: 0;
	opacity: 0;
	visibility: hidden;

	transition: All 1s ease-in-out;
	-ms-transform: All 1s ease-in-out; /* IE 9 */
	-webkit-transition: All 1s ease-in-out;
	-moz-transition: All 1s ease-in-out;
	-o-transition: All 1s ease-in-out;
}
.noShaky {
}
</style>

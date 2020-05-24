<template>
	<view class="info" :style="bgStyle">
		<view class="bg"></view>
		<view class="content" :class="modalNameList == 'liebiao' ? 'maoboli' : ''">
			<!-- #ifdef APP-VUE || MP-WEIXIN -->
			<view class="status_bar"><view class="top_view"></view></view>
			<!-- #endif -->
			<view class="top">
				<image class="back" @click="back" src="/static/back-music.png"></image>
				<view class="name" v-if="audioList[audioPlaySrc]">{{ audioList[audioPlaySrc].name }}</view>
				<view class="author" v-if="audioList[audioPlaySrc]">{{ audioList[audioPlaySrc].authorName }}</view>
			</view>
			<view class="micImg"><image v-if="audioList[audioPlaySrc]" :class="playState ? 'zhuan' : ''" :src="audioList[audioPlaySrc].picUrl"></image></view>

			<view class="micWord " v-if="audioList[audioPlaySrc] && audioList[audioPlaySrc].lyrics && lyricsIndex >= 2 && audioList[audioPlaySrc].lyrics.length > 0">
				{{ audioList[audioPlaySrc].lyrics[lyricsIndex - 2][1] }}
			</view>

			<view
				class="micWord geci"
				v-if="
					audioList[audioPlaySrc] &&
						audioList[audioPlaySrc].lyrics &&
						lyricsIndex >= 1 &&
						lyricsIndex <= audioList[audioPlaySrc].lyrics.length &&
						audioList[audioPlaySrc].lyrics.length > 0
				"
			>
				{{ audioList[audioPlaySrc].lyrics[lyricsIndex - 1][1] }}
			</view>
			<view class="micWord " v-if="audioList[audioPlaySrc] && lyricsIndex < audioList[audioPlaySrc].lyrics.length && audioList[audioPlaySrc].lyrics.length > 0">
				{{ audioList[audioPlaySrc].lyrics[lyricsIndex][1] }}
			</view>
			<view class="bot">
				<view class="lineBar">
					<view class="time star">{{ nowmiaoForc }}</view>
					<slider class="line" :value="nowmiao" min="0" :max="allmiao" @change="sliderChange" block-size="15" activeColor="#55A532" />
					<view class="time end">{{ allmiaoForc }}</view>
				</view>
				<view class="btn">
					<view @tap="audioWayFunc">
						<image v-if="audioWay == 0" class="iconbtn" src="/static/image/icon/xunhuanbofang.png"></image>
						<image v-if="audioWay == 2" class="iconbtn" src="/static/image/icon/danquxunhuan.png"></image>
						<image v-if="audioWay == 1" class="iconbtn" src="/static/image/icon/suijibofang.png"></image>
					</view>
					<view class="palybtn">
						<view @tap="upPlay"><image class="iconbtn" style="opacity=1 !important;" src="/static/image/icon/shangyishou.png"></image></view>
						<view @tap="play">
							<image v-if="!playState" class="iconbtn play" src="/static/image/icon/kaishi-2.png"></image>
							<image v-if="playState" class="iconbtn play" src="/static/image/icon/zanting-2.png"></image>
						</view>
						<view @tap="nextPlay"><image class="iconbtn" src="/static/image/icon/xiayishou.png"></image></view>
					</view>
					<view><image class="iconbtn" src="/static/image/icon/yinleliebiao.png" @tap="showModal" data-target="liebiao"></image></view>
				</view>
			</view>
		</view>

		<!-- 歌曲列表模态框-->
		<view :class="modalNameList == 'liebiao' ? 'shows' : 'hides'">
			<view style="border-radius: 0;width: 100%;">
				<view style="width: 100%;margin: 20upx 10upx;height: 8vh;padding: 40upx 40upx;position: relative;">
					<image src="/static/deleteAll_w.png" style="width: 50upx;height: 50upx;float: right; " @tap="deleteAll"></image>
					<image src="/static/close-_b.png" style="width: 50upx; height: 50upx; float: left; " @tap="hideModal"></image>
					<!-- <view class="cuIcon-close action" @tap="hideModal" style="width: 80upx; height: 80upx; float: left;"></view> -->
				</view>
				<scroll-view scroll-y="true" style="height: 58.1vh;">
					<view class="cu-list menu-avatar">
						<view class="cu-item" v-for="(item, index) in audioList" :key="index" style="background-color: transparent;">
							<view class="cu-avatar round lg" :style="[{ backgroundImage: 'url(' + item.picUrl + ')' }]"></view>
							<view class="content" @tap="changeMusic(index)">
								<view class="text-grey">{{ item.name }}</view>
								<view class="text-gray text-sm" style="text-align: left;">{{ item.authorName }}</view>
							</view>

							<image
								:src="item.type == '0' ? '/static/file_b.png' : '/static/net_w.png'"
								style="position: relative;height: 30upx; width: 30upx;right: 90upx;"
							></image>
							<image src="/static/close-_b.png" style="position: relative;height: 30upx; width: 30upx;right: 30upx;" @tap="deleteMusic(index)"></image>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- 详情模态框 end-->
	</view>
</template>

<script>
//
let innerAudioContext = '';

export default {
	components: {},
	data() {
		return {
			//歌词滚动到哪
			lyricsIndex: 1,

			//控制列表显示隐藏
			modalNameList: '',
			modalName: '',
			nowmiao: 0, //当前时间
			allmiao: 1, //全部时间
			lineBarWid: 520, //进度条的宽度跟css一只
			playState: 0, //播放状态
			audioCont: '',
			audioList: [
				//http://imge.kugou.com/stdmusic/20170720/20170720141006369299.jpg
			],
			audioPlaySrc: 0, //当前播放的歌曲index
			audioWay: 0 //播放方式 0顺序播放 1随机播放 2单曲循环
		};
	},

	computed: {
		width: function() {
			return 'width:' + (Math.floor(this.nowmiao) / this.allmiao) * this.lineBarWid + 'upx';
		},
		playWidth: function() {
			return 'transform:translate3d(' + (Math.floor(this.nowmiao) / this.allmiao) * this.lineBarWid + 'upx,0,0);';
		},
		nowmiaoForc: function() {
			return this.$pubFuc.secondFormact(Math.floor(this.nowmiao));
		},
		allmiaoForc: function() {
			return this.$pubFuc.secondFormact(this.allmiao);
		},
		bgStyle: function() {
			if (this.audioList.length == 0) {
				return 'background-image:url(' + 'http://imge.kugou.com/stdmusic/20170720/20170720141006369299.jpg' + ')';
			}
			return 'background-image:url(' + this.audioList[this.audioPlaySrc].picUrl + ')';
		}
	},
	mounted: function() {
		console.log('我进来音乐初始化页面了');

		this.audioPlaySrc = 0;

		let musicList = uni.getStorageSync('musicList') || [];
		if (musicList.length == 0) {
		} else {
			//第一次进来设置好定时器来更新酷狗变动的url 第一次初始化

			this.tongbuKugouMusicUrl(true);

			//每3个小时就要去更新一下播放资源
			this.timer = setInterval(() => {
				this.tongbuKugouMusicUrl(false);
				console.log('正在更新酷狗歌曲......');
			}, 10800000); //三小时去刷新一下
		}

		var that = this;
		//下载页来调用,初始化下载页的监听
		uni.$on('downloadPlay', function(e) {
			that.fatherToPlay(e);
		});
	},

	methods: {
		async tongbuKugouMusicUrl(init) {
			let musicList = uni.getStorageSync('musicList') || [];

			//把type = 1 酷狗的歌曲id的位置记下来,到时候整体替换

			var readGetNews = [];

			var songOldUrls = [];
			for (var i = 0; i < musicList.length; i++) {
				var muicCach1 = musicList[i];

				var music = muicCach1[1];

				//之刷新酷狗音乐的歌曲id
				if (music.type == '1') {
					var songOldUrl = music.songOldUrl;
					readGetNews.push(i);
					songOldUrls.push(songOldUrl);
				}
			}

			if (songOldUrls.length > 0) {
				const [err, ret] = await uni.request({
					url: this.$serverUrl + '/getMusicByMusic',
					data: JSON.stringify(songOldUrls),
					method: 'POST',
					header: {
						'content-type': 'application/json'
					}
				});

				if (err) {
					console.log(err);
				} else {
					console.log('刷新酷狗音乐歌曲id返回结果' + ret.data);
					var musics = ret.data;

					for (var i = 0; i < musics.length; i++) {
						var music = musics[i];
						var musicId = music.songOldUrl;
						var musicCach = [musicId, music];

						var cacheIndex = readGetNews[i];
						// 替换元素 替换起始下标为cacheIndex，长度为1的一个值为‘hh’，len设置的musicCach
						musicList.splice(cacheIndex, 1, musicCach);
					}

					//给播放列表更新

					this.audioList = [];
					for (var i = 0; i < musicList.length; i++) {
						var muicCach1 = musicList[i];

						this.audioList.push(muicCach1[1]);
					}
				}

				//第一次页面初始化的话初始化播放列表
				if (init) {
					//初始化了但是不要播放啊
					this.audioInit();
					innerAudioContext.pause();
				}
			}
		},

		//音乐页过来调用
		fatherToPlay(e) {
			var music = e;
			console.log('我进来音乐初始化页面了_onload'+e.name);
			this.audioList = [];
			let musicList = uni.getStorageSync('musicList') || [];

			//歌曲应该用播放url作为key,防止重复-->修改为用old播放地址,这样无论本地还是 网络都有统一的

			var musicId = music.songOldUrl;
			var musicCach = [musicId, music];

			//如果以前有,就删除,把当前的放在第一位
			for (var i = 0; i < musicList.length; i++) {
				var muicCach1 = musicList[i];

				//如果有重复的
				if (muicCach1[0] == musicCach[0]) {
					//先判断哪个是本地,哪个是网络 0 本地 1酷狗 2网易
					var cachType_ = muicCach1[1].type;
					var cachType = muicCach1[1].type;
					//如果是网络过来的  网络不能覆盖本地,只有一个条件
					if (cachType != '0') {
						//如果缓存里面是本地的,就删除放在最上面,内容还是本地的
						if (cachType_ == '0') {
							musicCach = muicCach1[0];
						}
					}
					musicList.splice(i, 1);
					i = i - 1;
					continue;
				}
				this.audioList.push(muicCach1[1]);
			}
			musicList.unshift(musicCach);
			this.audioList.unshift(music);
			uni.setStorageSync('musicList', musicList);
			this.$forceUpdate();
			console.log('yes');

			//是不是要把它放在歌曲的第一位呀
			this.audioPlaySrc = 0;
			this.audioInit();
		},
		audioInit() {
			// #ifdef APP-VUE || MP-WEIXIN
			innerAudioContext = uni.getBackgroundAudioManager();
			//#endif
			/* #ifdef H5 */
			//销毁====================
			if (innerAudioContext) {
				innerAudioContext.destroy();
			}

			innerAudioContext = uni.createInnerAudioContext();
			/* #endif */

			if (this.audioList.length == 0) {
				return;
			}
			let src = this.audioList[this.audioPlaySrc].songUrl;
			let authorName = this.audioList[this.audioPlaySrc].authorName;
			let name = this.audioList[this.audioPlaySrc].name;
			let picUrl = this.audioList[this.audioPlaySrc].picUrl;
			innerAudioContext.autoplay = true;
			innerAudioContext.src = src;
			//不理睬静音,不然ios有bug
			innerAudioContext.obeyMuteSwitch = false;
			innerAudioContext.title = name;
			innerAudioContext.singer = authorName;
			innerAudioContext.coverImgUrl = picUrl;

			//每次切换更新歌曲同步一下爸爸的值啊

			this.$emit('changeSongMsg', this.audioList[this.audioPlaySrc]);

			/* 这些监听项目是不是应该放在初始化 */
			innerAudioContext.autoplay = true;
			//监听事件
			innerAudioContext.onPlay(() => {
				this.playFunc();

				this.allmiao = Math.floor(innerAudioContext.duration);

				this.$emit('changeState', this.playState);
			});
			innerAudioContext.onPause(() => {
				this.pauseFunc();

				this.$emit('changeState', this.playState);
			});
			innerAudioContext.onTimeUpdate(e => {
				this.nowmiao = innerAudioContext.currentTime;
				var liangwei = Math.floor(this.nowmiao * 100) / 100;
				//计算歌词的位置
				if (this.audioList.length == 0 || !this.audioList[this.audioPlaySrc]) {
					return;
				}

				var lyris = this.audioList[this.audioPlaySrc].lyrics;

				if (lyris && lyris.length > 0) {
					//最后一个歌词了
					var s1 = lyris[lyris.length - 1][0] * 1 - liangwei;
					if (s1 > 0) {
						this.lyricsIndex = lyris.length;
					}

					for (var i = 0; i < lyris.length; i++) {
						var l = lyris[i];
						var ss = l[0] * 1 - liangwei;
						if (ss > 0.3) {
							/* console.log('come in'); */
							this.lyricsIndex = i;
							break;
						}
					}
				}

				//控制在1分钟
				if (this.nowmiao > 60 && getApp().globalData.isShowPay == 'true') {
					/* 控制会员播放 */

					console.log('我进来了 onshow video');
					var userinfo = uni.getStorageSync('userinfo');
					//已经登陆
					if (!userinfo.length && userinfo.length != 0) {
						if (!userinfo.vip) {
							//非会员看5分钟
							innerAudioContext.pause();
							uni.showToast({
								title: 'vip专享',
								duration: 2000
							});
						} else if (userinfo.vip) {
							//我是会员
						}
					} else {
						//没有登陆
						innerAudioContext.pause();
						uni.showToast({
							title: 'vip专享',
							duration: 2000
						});
					}
				}
			});
			innerAudioContext.onEnded(() => {
				this.nextPlay();
			});

			innerAudioContext.onError(e => {
				console.log('播放错误');

				//第一次使用没事
				if (this.audioList.length == 0) {
					return;
				}
				uni.showToast({
					icon: 'none',
					title: `没有版权`
				});
			});

			//用户在系统音乐播放面板点击上一曲事件（iOS only）
			innerAudioContext.onNext(() => {
				this.nextPlay();
			});
			innerAudioContext.onPrev(() => {
				this.upPlay();
			});

			/* 这些监听项目是不是应该放在初始化 顿挫苹果bug*/
			this.play();

			let _open = setTimeout(() => {
				this.play();
				_open = null;
			}, 100);
		},
		playFunc() {
			this.playState = 1;
		},
		pauseFunc() {
			this.playState = 0;
		},
		sliderChange(e) {
			this.nowmiao = e.detail.value;
			innerAudioContext.seek(this.nowmiao);
		},
		play() {
			if (this.playState) {
				//暂停
				innerAudioContext.pause();
			} else {
				//播放
				innerAudioContext.play();
			}
		},
		nextPlay() {
			if (this.audioWay == 1) {
				//随机
				this.audioPlaySrc = this.randomNum(0, this.audioList.length - 1);
			} else if (this.audioWay == 0) {
				if (this.audioPlaySrc == this.audioList.length - 1) {
					//最后一首了
					innerAudioContext.pause();
					return;
				}

				//顺序
				if (this.audioPlaySrc >= this.audioList.length - 1) {
					this.audioPlaySrc = 0;
				} else {
					this.audioPlaySrc = this.audioPlaySrc + 1;
				}
			} //单曲循环

			this.audioInit();
		},
		randomNum(minNum, maxNum) {
			switch (arguments.length) {
				case 1:
					return parseInt(Math.random() * minNum + 1, 10);
					break;
				case 2:
					return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
					break;
				default:
					return 0;
					break;
			}
		},
		upPlay() {
			if (this.audioPlaySrc == 0) {
				return;
			}

			if (this.audioWay == 1) {
				//随机
				this.audioPlaySrc = Math.floor(Math.random() * 10) % this.audioList.length;
			} else if (this.audioWay == 0) {
				//顺序
				if (this.audioPlaySrc < 1) {
					this.audioPlaySrc = this.audioList.length - 1;
				} else {
					//最后一首
					if (this.audioPlaySrc == this.audioList.length) {
						return;
					}

					this.audioPlaySrc = this.audioPlaySrc - 1;
				}
			} //单曲循环
			this.audioInit();
		},
		audioWayFunc() {
			if (this.audioWay > 1) {
				this.audioWay = 0;
			} else {
				this.audioWay = this.audioWay + 1;
			}
		},
		collectFunc() {
			this.collect = !this.collect;
		},
		back() {
			//uni.navigateBack();
			this.$emit('fatherMethod');
		},
		showModal(e) {
			this.modalNameList = e.currentTarget.dataset.target;
		},
		hideModal(e) {
			this.modalNameList = null;
		},

		//删除一个歌曲
		deleteMusic(e) {
			let musicList = uni.getStorageSync('musicList') || [];

			//如果是最后一个了
			if (musicList.length == 1 || this.audioList.length == 1) {
				innerAudioContext.pause();
				//innerAudioContext = '';
				this.audioPlaySrc = 0;
				this.allmiao = 1;
				this.nowmiao = 0;
				//innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.src = 'http:';
				this.$emit('changeSongMsg', []);
			}

			//删除缓存
			musicList.splice(e, 1);
			uni.setStorageSync('musicList', musicList);

			//删除播放列表
			this.audioList.splice(e, 1);

			//删除后要做好处理,当前播放到哪个数组,会影响

			if (this.audioPlaySrc == e && this.audioPlaySrc + '' != '') {
				//正好相等,调用下一首方法自己去找

				this.audioInit();
			} else if (this.audioPlaySrc < e) {
				//当前播放的在删除之前,则不处理
			} else if (this.audioPlaySrc > e) {
				//当前播放的在删除后面,则下角标应该减一

				this.audioPlaySrc = this.audioPlaySrc - 1;
			}
		},

		deleteAll() {
			uni.setStorageSync('musicList', []);
			this.audioList = [];
			innerAudioContext.pause();
			//innerAudioContext = '';
			this.audioPlaySrc = 0;
			this.allmiao = 1;
			this.nowmiao = 0;
			//innerAudioContext = uni.createInnerAudioContext();
			innerAudioContext.src = 'http:';
			this.$emit('changeSongMsg', []);
		},
		//将歌曲置顶

		putToTop(e) {
			if (e == 0) {
				return;
			}
			let musicList = uni.getStorageSync('musicList') || [];

			//删除缓存并把元素添加到头
			let muicCach1 = musicList[e];
			musicList.splice(e, 1);
			musicList.unshift(muicCach1);
			uni.setStorageSync('musicList', musicList);

			//删除播放列表并置为头
			let musicL = this.audioList[e];
			this.audioList.splice(e, 1);
			this.audioList.unshift(musicL);

			if (this.audioPlaySrc < e) {
				this.audioPlaySrc = this.audioPlaySrc + 1;
			} else if (this.audioPlaySrc == e) {
				this.audioPlaySrc = 0;
			}
		},
		//切换 歌曲
		changeMusic(e) {
			if (this.audioPlaySrc == e) {
				this.hideModal(e);
				return;
			}
			this.audioPlaySrc = e;
			this.audioInit();
			this.hideModal(e);
		}
	},
	destroyed() {
		innerAudioContext.destroy();
		innerAudioContext = '';
	}
};
</script>

<style lang="scss" scoped>
@import '../../../colorui/main.css';
@import '../../../colorui/icon.css';
* {
	margin: 0;
	padding: 0;
}
.info {
	position: fixed;
	right: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	.bg {
		position: fixed;
		z-index: 0;
		right: 0;
		left: 0;
		height: 100%;
		width: 100%;
		filter: blur(40upx);
		background: inherit;
	}
	.content {
		position: fixed;
		z-index: 1;
		right: 0;
		left: 0;
		height: 100%;
		width: 100%;
		color: #fffdef;

		.top {
			margin-top: 20upx;
			width: 100%;
			text-align: center;
			.name {
				font-size: 46upx;
			}
			.author {
				font-size: 34upx;
				line-height: 60upx;
			}
			.bar {
				width: 330upx;
				justify-content: space-between;
				display: flex;
				margin: 20upx auto;
				view {
					width: 100upx;
					height: 40upx;
					border: solid 1upx #fffdef;
					border-radius: 2upx;
					text-align: center;
				}
			}
		}
		.micImg {
			margin: 25upx auto;
			image {
				display: block;
				margin: 0 auto;
				width: 600upx;
				height: 600upx;
				border: solid 16upx rgba(0, 0, 0, 0.15);
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

		.micWord {
			text-align: center;
		}
		.bot {
			position: fixed;
			bottom: 40upx;
			left: 0;
			width: 100%;
			padding: 0 26upx;
			box-sizing: border-box;
			.lineBar {
				display: flex;
				padding: 20upx 0;
				justify-content: space-between;
				.line {
					margin: 0;
					width: 520upx;
				}
			}
			.iconbtn {
				display: block;
				width: 50upx;
				height: 50upx;
				margin: 0 auto;
				opacity: 1;
			}
			.btn {
				display: flex;
				justify-content: space-between;
				padding: 40upx 15upx;
				.palybtn {
					display: flex;
					width: 500upx;
					margin-top: -15upx;
					view {
						flex: 1;
						align-items: center;
					}
					.iconbtn {
						width: 80upx;
						height: 80upx;
						opacity: 1 !important;
						&.play {
							margin-top: -20upx;
							width: 120upx;
							height: 120upx;
						}
					}
				}
			}
			.tool {
				display: flex;
				view {
					flex: 1;
					text-align: center;
				}
			}
		}
	}
}
.status_bar {
	height: var(--status-bar-height);
	width: 100%;
	opacity: 0;
	//background-color: #ffffff;
}
.top_view {
	height: var(--status-bar-height);
	width: 100%;
	position: relative;
	//background-color: #ffffff;
	top: 0;
	z-index: 999;
	opacity: 0;
}
.back {
	width: 50upx;
	height: 50upx;
	position: absolute;
	top: 8%;
	left: 5%;
	z-index: 1;
}
.shows {
	position: fixed;
	bottom: 0;
	width: 100vw;
	height: 70vh;
	z-index: 100;
	background: -moz-linear-gradient(left, #ace, #f96); /*Mozilla*/
	background: -webkit-gradient(linear, 0 50%, 100% 50%, from(#ace), to(#f96)); /*Old gradient for webkit*/
	background: -webkit-linear-gradient(left, #ace, #f96); /*new gradient for Webkit*/
	background: -o-linear-gradient(left, #ace, #f96); /*Opera11*/
}
.hides {
	display: none;
}
//毛玻璃
.maoboli {
	filter: blur(10upx); /* 值越大越模糊 */
	filter: blendtrans(duration=3);
}
.geci {
	color: #7f06a8;
}
</style>

<template>
	<view class="container999">
		<!-- 导航栏 agents导航栏标题 -->
		<view class="nav" style="box-shadow: 5upx 5upx 10upx rgba(89, 125, 172, 0.4);"><navTab ref="navTab" :tabTitle="tabTitle" @changeTab="changeTab"></navTab></view>
		<swiper :current="currentTab" @change="swiperTab" style="height: 90vh;">
			<swiper-item v-for="(listItem, listIndex) in list" :key="listIndex">
				<scroll-view style="height: 100%;" scroll-y="true" scroll-with-animation>
					<!-- 这个是音乐下载完成的样式和属性 -->
					<view
						v-if="listIndex == 0"
						v-for="(item, index) in listItem"
						:key="index"
						style="width: 100%;height: 122upx;border-bottom:2upx solid #c7c7c7;"
						:class="isClickPlay == index ? 'shaky' : 'noShaky'"
					>
						<view @tap="goUrl(index, item)" style="background-color: transparent;height:transparent ;">
							<view style="height: 120upx;">
								<image style="width: 100upx; height: 100upx;  line-height:100upx;margin: 10upx 10upx;" :src="item.picUrl"></image>
								<view style="display: inline-block;height: 100upx;left: 15upx;position: relative;width: 70%;">
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
						</view>
						<view style="width: 100upx; float: right;line-height: 30upx;position: relative;bottom: 80upx;right: 20upx;" @tap="deleteDownLoad(index)">
							<image src="/static/close-_b.png" style="width: 30upx; height: 30upx;"></image>
						</view>
					</view>
					<!-- 这个是音乐下载完成的样式和属性 -->

					<view v-if="listIndex == 1" class="cu-card article">
						<view v-for="(item, key) in listItem" :key="key">
							<view class="cu-card  article" @tap="tabSelect(item)">
								<view class="cu-item shadow" style="margin: 0 0;border-radius: 0; border-bottom: 1upx solid #eee;">
									<view class="content" style="padding-top: 20upx;">
										<image :src="item.picture" mode="aspectFill"></image>
										<view class="desc">
											<view>{{ item.name }}</view>
											<text class="texts">上映时间:&nbsp;&nbsp;{{ item.release_time }}</text>
											<text class="texts">地区:&nbsp;&nbsp;{{ item.area }}</text>
											<text class="texts">导演:&nbsp;&nbsp;{{ item.director }}</text>
											<text class="texts">演员:&nbsp;&nbsp;{{ item.actors }}</text>
										</view>
									</view>
								</view>
							</view>
							<view style="width: 100upx; float: right;line-height: 30upx;position: relative;bottom: 180upx;right: 20upx;" @tap="deleteDownLoad(key)">
								<image src="/static/close-_b.png" style="width: 30upx; height: 30upx;"></image>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import navTab from '../../../components/navTab.vue';
export default {
	components: { navTab },
	data() {
		return {
			isClickPlay: null,

			//这个list分两个,第一个是音乐的,第二个是视频的

			//在音乐中 list[0]里面还是一个集合,集合1中是已经下载完成的,集合2中是正在下载的内容
			list: [],

			currentPage: 'musicPage',
			currentTab: 0, //sweiper所在页
			tabTitle: ['音乐', '视频'], //导航栏格式
			tabTitleSub: ['已完成', '下载中'] //导航栏格式
		};
	},
	methods: {
		// swiper 滑动
		swiperTab: function(e) {
			var index = e.detail.current; //获取索引
			this.$refs.navTab.longClick(index);
		},
		changeTab(index) {
			this.currentTab = index;
		},
		goUrl: function(str, val) {
			this.isClickPlay = str;
			uni.$emit('downloadPlay', val);
		},
		deleteDownLoad(e) {
			console.log('删除文件');

			if (this.currentTab == 0) {
				var music = this.list[this.currentTab][e];

				//先删除列表,不然文件有一些乱的删不掉
				var saveMusic = uni.getStorageSync('saveMusic') || [];
				saveMusic.splice(e, 1);
				uni.setStorageSync('saveMusic', saveMusic);
				this.list[this.currentTab].splice(e, 1);
				this.$forceUpdate();

				//删除本地文件
				uni.removeSavedFile({
					filePath: music.songUrl,
					complete: function(res) {
						console.log(res);
					}
				});
			}

			if (this.currentTab == 1) {
				//视频
				var video = this.list[this.currentTab][e];

				//先删除列表,不然文件有一些乱的删不掉
				var saveVideo = uni.getStorageSync('saveVideo') || [];
				saveVideo.splice(e, 1);
				uni.setStorageSync('saveVideo', saveVideo);
				this.list[this.currentTab].splice(e, 1);
				this.$forceUpdate();

				//删除本地文件

				var showUrls = video.show_url;

				for (var i = 0; i < showUrls.length; i++) {
					var u = showUrls[i];
					var head = u.split('$')[0];
					var realUrl = u.split('$')[1];

					//0代表本地文件
					if (head == '0') {
						uni.removeSavedFile({
							filePath: realUrl,
							complete: function(res) {
								console.log(res);
							}
						});
					}
				}
			} //音乐
		},
		tabSelect(e) {
			uni.navigateTo({
				url: '/pages/videoPage/videoPlayer/videoPlayer?video=' + JSON.stringify(e)
			});
		},
		back() {
			uni.navigateBack();
		}
	},
	onLoad(e) {
		/* 取下载完成的 */
		var saveMusic = uni.getStorageSync('saveMusic') || [];
		console.log('成功获取下载的音乐' + saveMusic);

		this.list[0] = saveMusic;

		var saveVideo = uni.getStorageSync('saveVideo') || [];
		console.log('成功获取下载的视频' + saveVideo);

		this.list[1] = saveVideo;
		this.$forceUpdate();
	}
};
</script>

<style>
@import '../../../common/common.css';
@import '../../../colorui/main.css';
.container999 {
	width: 100vw;
	font-size: 28upx;
	min-height: 100vh;
	overflow: hidden;
	color: #6b8082;
	position: relative;
	background-color: #ffffff;
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

.noShaky {
}

.texts {
	font-size: 18upx;
	color: #aaaaaa;
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
</style>

<template>
	<view class="container999">
		
		<view class="status_bar"><view class="top_view"></view></view>
		<!-- 刷新组件需搭配scroll-view使用，并在pages.json中添加 "disableScroll":true-->
		
		<view class="nav" style="height: 10vh;">
			<view style="height: 50upx;width: 100%;"></view>

			<view class="searchInput999">
				<image src="/static/back-black-search.png" style="position: relative; left: -80upx;align-self: center; width: 50upx; height: 50upx;" @click="back"></image>
				<view class="searchBox999"><image src="/static/icon-search.png" class="search999"></image></view>
				<input class="input999" placeholder="搜索" @confirm="confirm" type="text" confirm-type="搜索" :value="serchPara"/>
			</view>
			<view style="width: 100%;height: 50upx;"></view>
		</view>
		
		<scroll-view style="height: 84vh;" scroll-y="true" scroll-with-animation>
			<view class="cu-card  article" v-for="(item, key) in listItem" @tap="tabSelect(item)" :key="key" >
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
			<view class="noCard" v-if="hasMsg">暂无信息</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			hasMsg: false,
			serchPara: '',
			listItem: [
			]
		};
	},
	onLoad: function(e) {
		var msg = e.msg;
		console.log('输如了' + msg);
		this.serchPara = e.msg;
		
		
		this.serchMethod();
	},
	methods: {
		back() {
			uni.navigateBack();
		},
		//搜索
		confirm(e) {
			console.log('输入了' + e.detail.value);
			this.serchPara = e.detail.value.trim();
			//收起键盘
			// #ifndef APP-PLUS
			uni.hideKeyboard();
			// #endif
			// #ifdef APP-PLUS
			plus.key.hideSoftKeybord();
			// #endif
			if(e.detail.value.trim().length == 0){
				return;
			}
			this.serchMethod();
		},
		tabSelect(e) {
			uni.navigateTo({
				url: '/pages/videoPage/videoPlayer/videoPlayer?video=' + JSON.stringify(e)
			});
		},
		serchMethod(){
			//跳转到搜索页
			
			uni.showLoading({
				title: '加载中',
				mask: true
			});
			
			uni.request({
				url: this.$serverUrl + '/getSearch',
				data: this.serchPara,
				method: 'POST',
				header: {
					'content-type': 'application/json'
				},
				success: ret => {
					if (ret.statusCode !== 200) {
						console.log('请求主题信息失败:', ret);
						this.hasMsg = true;
						//隐藏加载loading
						uni.hideLoading();
					}else{
						uni.hideLoading();
						var videos = ret.data;
						var thisPageVideos = [];
						for (var j = 0; j < videos.length; j++) {
							var video = videos[j];
							//解决显示必须一致的问题
						
							var sc = video.showScore;
							if (sc.length == 1) {
								sc = sc + '.0';
							} else if (sc.length == 0) {
								sc = '0.0';
							} else if (sc.length == 4) {
								sc = sc.slice(0, 2);
							}
						
							var info = video.newInfo;
							if (info.length == 0) {
								info = 'HD高清';
							}
						
							var na = video.name;
							if (na.length == 0) {
								na = '无';
							}
						
							var videoTrans = {
								id: video.id,
								name: na,
								new_info: info,
								show_score: sc,
								//picture: this.$serverUrl + '/images/' + video.picture,
								//暂时用其他服务器的,感觉没必要用自己的
								
								picture: video.pictureUrl,
								director: video.director,
								actors: video.actors,
								release_time: video.releaseTime,
								updated_time: video.updatedTime,
								area: video.area,
								language: video.language,
								film_length: video.filmLength,
								film_synopsis: video.filmSynopsis.trim(),
								show_url: video.lookUrl,
								down_url: video.downUrl
							};
						
							//当页的视频集合
							thisPageVideos.push(videoTrans);
						}
						this.listItem =thisPageVideos;
						if(thisPageVideos.length > 0){
							this.hasMsg = false;
						}else{
							this.hasMsg = true;
						}
						console.log(ret);
						this.$forceUpdate();
					};
					//隐藏加载loading
					uni.hideLoading();
				},
				fail: (e) => {
					//隐藏加载loading
					uni.hideLoading();
				}
			});
		},
		refreshStart(e) {
			this.$refs.refresh.refreshStart(e);
		},
		refreshMove(e) {
			this.$refs.refresh.refreshMove(e);
		},
		refreshEnd(e) {
			this.$refs.refresh.refreshEnd(e);
		},
	}
};
</script>

<style>
@import '../../../common/common.css';
@import '../../../colorui/main.css';
.status_bar {
	height: var(--status-bar-height);
	width: 100%;
	background-color: #ffffff;
}
.top_view {
	height: var(--status-bar-height);
	width: 100%;
	position: fixed;
	background-color: #ffffff;
	top: 0;
	z-index: 999;
}
.nav {
	position: relative;
	left: 0;
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
	width: 80%;
	margin: 0 auto;
	position: relative;
	left: 30upx;
	background-color: #f5f5f5;
	border-radius: 30upx;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
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
	width: 100%;
	height: 56upx;
	justify-content: center;
	align-items: center;
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
	box-shadow: 1upx 0 10upx 0 rgba(0, 0, 0, 0.1);
}
</style>

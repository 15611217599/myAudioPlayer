<template>
	<view class="container999" @touchstart="refreshStart" @touchmove="refreshMove" @touchend="refreshEnd">
		<!-- #ifdef APP-VUE || MP-WEIXIN -->
		<view class="status_bar"><view class="top_view"></view></view>
		<!-- #endif -->
		<!-- 刷新组件需搭配scroll-view使用，并在pages.json中添加 "disableScroll":true-->
		<refresh ref="refresh" @isRefresh="isRefresh"></refresh>

		<view class="nav" style="box-shadow: 5upx 5upx 10upx rgba(89, 125, 172, 0.4);">
			<!-- 导航栏 agents导航栏标题 -->
			<navTab ref="navTab" :tabTitle="tabTitle" @changeTab="changeTab" class="backGrondColor" style="height: 6vh;"></navTab>
			<!-- 搜索 -->
			<view class="searchInput999" >
				<view class="searchBox999"><image src="/static/icon-search.png" class="search999"></image></view>
				<input class="input999" placeholder="搜索" @confirm="confirm" type="text" confirm-type="search" />
				<uniIcon class="sercheTab" type="arrowdown" size="25" @tap="showFilter" :class="xuanzhuan" color="#bdbdbd"></uniIcon>
			</view>
		</view>
		<!-- 筛选列表开始 -->
		<view v-show="currentTab != 0">
			<view :class="showOrHide" class="nav" v-for="(pagePara, index) in paramsForEachPageShow[currentTab]" :key="index" style="color: #555555;display: flex;">
				<scroll-view  scroll-x scroll-with-animation>
					<text style="font-size: 25upx !important; color: black;font-weight: bold;">{{ pagePara.name }}:</text>
					<view class="cu-item" v-for="(urls, urli) in pagePara.itemName" :key="urli">
						<button
							v-bind:class="{ clickButtonId: clickButtonIds[currentTab].cid[index] == urli }"
							class="cu-btn sm "
							style="width: 80upx;"
							@tap="onClickButton(index, urli, pagePara.link_name, pagePara.item[urli])"
						>
							{{ urls }}
						</button>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- end -->
		<!-- swiper切换 swiper-item表示一页 scroll-view表示滚动视窗 -->
		<swiper style="height: 75vh;" :current="currentTab" @change="swiperTab" skip-hidden-item-layout="true">
			<swiper-item v-for="(listItem, listIndex) in list" :key="listIndex">
				<!-- 之渲染三页数据不就好了 -->
				<view v-if="listIndex >= currentTab - 1 && listIndex <= currentTab + 1" style="position: relative;">
					<scroll-view scroll-view style="height: 75.1vh" scroll-y="true" @scrolltolower="lower1" scroll-with-animation :scroll-into-view="toView">
						<!-- 首页推荐 -->
						<view v-show="listIndex == 0" v-for="(items, k) in listHot" :key="k">
							<view style="width: 100%; margin: 30upx; font-size: 40upx; color: #000000;font-weight: bold;" v-if="items[0]">{{ items[0].showName }}</view>

							<swiper display-multiple-items="3" acceleration="true" style="height: 450upx;">
								<swiper-item v-for="(item, index) in items" :key="index">
									<view style="display: inline-block;margin: 0 10upx;padding: 0 20upx;" @tap="tabSelect(item)">
										<image class="card-list1-img" :src="item.picture"></image>
										<view
											class="text-cut"
											style="text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis; font-size: 28upx; text-align: left;font-weight: bold;color:black;width: 200upx;"
										>
											{{ item.name }}
										</view>
										<view
											class="text-cut"
											style="text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis; text-align: left;font-size: 22upx;width: 200upx;"
										>
											{{ item.new_info }}
										</view>
									</view>
								</swiper-item>
								<button style="height: 40upx; visibility: hidden;">box</button>
							</swiper>
						</view>

						<view v-show="listIndex != 0">
							<!-- <view :id="'top' + listIndex" style="width: 100%;height: 10upx;"></view> -->
							<view class="card card-list2 row" v-for="(item, key) in listItem" :key="key" @tap="tabSelect(item)">
								<image class="card-img card-list2-img" :src="item.picture"></image>
								<text class="card-num-view card-list2-num-view">{{ item.show_score }}</text>
								<view class="card-bottm row">
									<view class="car-title-view row">
										<text class="card-title card-list2-title">{{ item.name }}</text>
									</view>
								</view>

								<view class="card-bottm row">
									<view class="car-title-view row">
										<text class="card-title card-list2-title1">{{ item.new_info }}</text>
									</view>
								</view>
							</view>
						</view>
						<view class="noCard" v-if="listItem && listItem.length === 0">暂无信息</view>
					</scroll-view>
				</view>
			</swiper-item>
		</swiper>
		<tabBar4 :currentPage="currentPage"></tabBar4>
	</view>
</template>

<script>
const util = require('../../util/util.js');
import refresh from '../../components/refresh.vue';
import navTab from '../../components/navTab.vue';
import tabBar4 from '../../components/tabBar4.vue';
import uniIcon from '../../components/uni-icons/uni-icons.vue';

export default {
	components: { refresh, navTab, tabBar4, uniIcon },
	data() {
		return {
			//控制筛选显示还是隐藏
			showOrHide: 'hide',
			xuanzhuan: 'down',
			currentPage: 'videoPage',
			toView: '', //回到顶部id
			tabTitle: ['电影', '', '', '', ''], //导航栏格式 --导航栏组件
			currentTab: 0, //sweiper所在页
			pages: [1, 1, 1, 1, 1, 1], //第几个swiper的第几页

			//点击的按钮位置
			clickButtonIds: [
				//第一页
				{
					cid: [0, 0, 0, 0]
				},
				//第2页
				{
					cid: [0, 0, 0, 0]
				},
				//第3页
				{
					cid: [0, 0, 0, 0]
				}
			],
			//每个页面的参数,手机端控制,用来展示筛选条件的
			paramsForEachPageShow: [
				// 这里对应第一页
				[
					{
						name: '年代 :',
						link_name: 'years',
						item: ['', '2020', '2019', '2018', '2017', '2016', '2015'],
						itemName: ['全部', '2020', '2019', '2018', '2017', '2016', '2015']
					},
					{
						name: '分类 :',
						link_name: 'pids',
						item: ['', '11', '12', '13'],
						itemName: ['全部', '武打', '动作', '科幻']
					},
					{
						name: '排序 :',
						link_name: 'sortWay',
						item: ['', '0', '1', '2'],
						itemName: ['全部', '上映时间', '更新时间', '评分']
					},
					{
						name: '区域 :',
						link_name: 'area',
						item: ['', '美国', '中国', '日本'],
						itemName: ['全部', '美国', '中国', '日本']
					}
				]
			],

			//每个页面的参数,手机端控制,请求后台的时候使用
			paramsForEachPage: [
				{
					ppid: '',
					pids: '',
					years: '',
					sortWay: '1',
					area: '',
					currentPageNum: 0,
					pageSize: 16
				},
				{
					ppid: '',
					pids: '',
					years: [],
					sortWay: '1',
					currentPageNum: 0,
					pageSize: 16
				}
			],

			//如果有值请求慢会显示出来
			list: [], //数据格式

			listHot: []
		};
	},
	onLoad(e) {
		uni.showLoading({
			title: '加载中'
		});

		setTimeout(function() {
			uni.hideLoading();
		}, 2000);
		//初始化页面加载主题数据
		this.getCatogory();
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
		changeTab(index) {
			this.currentTab = index;
			console.log('当前滑动到分类 ' + index);
		},

		// swiper 滑动
		swiperTab: function(e) {
			var index = e.detail.current; //获取索引
			this.$refs.navTab.longClick(index);
			console.log('当前滑动窗体到分类 ' + index);
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

			//当前页的第几页要更新
			this.pages[this.currentTab]++;

			//这里是刷新回调方法,调用我们自己的
			this.getVideoList('1');
		}, 300),
		// 刷新touch监听
		refreshStart(e) {
			this.$refs.refresh.refreshStart(e);
		},
		refreshMove(e) {
			this.$refs.refresh.refreshMove(e);
		},
		refreshEnd(e) {
			this.$refs.refresh.refreshEnd(e);
		},
		isRefresh() {
			//刷新页面
			this.getVideoList(0);
		},
		tabSelect(e) {
			uni.navigateTo({
				url: '/pages/videoPage/videoPlayer/videoPlayer?video=' + JSON.stringify(e)
			});
		},
		//currentTab 当前标题数组标 ,type刷新还是下拉更多   0 刷新 1 更多 2初始化
		getVideoList(type) {
			var times = 1;
			this.currentTab1 = this.currentTab;
			//如果初始化,所有的标题都要请求,否则执行一次
			if (type == '3') {
				times = this.paramsForEachPage.length;
			}
			this.urlRequest(0, type, times);
		},
		//因为ajax是异步并且无法修改,导致回调成功后i都变为了7,所以把方法抽取出来
		async urlRequest(i, type, times) {
			//如果初始化,当前标签肯定是第一个,加i后面的也都是用
			var datas = this.paramsForEachPage[this.currentTab + i];

			datas.currentPageNum = this.pages[this.currentTab + i];
			console.log('getVideoList请求' + '当前标题数组' + (this.currentTab + i) + '当前所在的页数 ' + this.pages[this.currentTab + i] + '获取的条件是' + datas);

			//如果是刷新,则要从第一页开始
			if (type == '0' || type == '4') {
				datas.currentPageNum = 0;
			}

			const [err, ret] = await uni.request({
				url: this.$serverUrl + '/getVideoList',
				data: datas,
				method: 'POST',
				header: {
					'content-type': 'application/json'
				},
				timeout: '100000'
			});

			if (err) {
				uni.showToast({
					icon: 'fail',
					title: '网络错误'
				});

				if (type == '1') {
					//没有刷新要捡回去
					this.pages[this.currentTab]--;
					//隐藏加载loading
					uni.hideLoading();
				} else if (type == '0') {
					this.$refs.refresh.endAfter(); //刷新结束调用
				}
			} else {
				if (ret.statusCode !== 200) {
					console.log('请求主题信息失败:', ret);
				} else {
					console.log(ret.data);
					var videos = ret.data.content;

					var thisPageVideos = [];
					for (var j = 0; j < videos.length; j++) {
						var video = videos[j];
						//解决显示必须一致的问题

						var videoTrans = this.getVideoFromJavaToPage(video);

						//当页的视频集合
						thisPageVideos.push(videoTrans);
					}
					//3代表初始化,要把原来数组清空重新赋值
					if (type == '3') {
						//替换以前的集合
						this.list[this.currentTab + i] = thisPageVideos;
						//1表示加载更多
					} else if (type == '1') {
						console.log('下拉更新 ' + thisPageVideos);
						if (thisPageVideos.length == 0) {
							uni.showToast({
								icon: 'success',
								title: '没有更多了'
							});
							this.pages[this.currentTab] = this.pages[this.currentTab] - 1;
						}

						this.list[this.currentTab + i] = this.list[this.currentTab + i].concat(thisPageVideos);
						//隐藏加载loading
						uni.hideLoading();
						//0代表刷新页面
					} else if (type == '0') {
						console.log('刷新获取的数据是 ' + thisPageVideos);
						if (thisPageVideos.length > 0 && thisPageVideos[0].id == this.list[this.currentTab + i][0].id) {
							uni.showToast({
								icon: 'success',
								title: '已是最新'
							});
						} else {
							this.list[this.currentTab + i] = thisPageVideos;
							this.pages[this.currentTab] = 0;
							uni.showToast({
								icon: 'success',
								title: '刷新成功'
							});
						}
						this.$refs.refresh.endAfter(); //刷新结束调用
						//4代表筛选条件过来的
					} else if (type == 4) {
						console.log('分类获取的数据是 ' + thisPageVideos);
						this.list[this.currentTab1 + i] = thisPageVideos;
						this.pages[this.currentTab1] = 0;
					}
				}

				i++;
				if (i < times) {
					this.urlRequest(i, type, times);
				} else {
					//之后开启强制渲染,要不然页面不刷新
					this.$forceUpdate();
				}
			}
		},

		getVideoFromJavaToPage(video) {
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
				/* picture: this.$serverUrl + '/images/' + video.picture, */

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
			return videoTrans;
		},
		async getHotVideo() {
			const [err, ret] = await uni.request({
				url: this.$serverUrl + '/getHot',
				data: '',
				method: 'POST',
				header: {
					'content-type': 'application/json'
				},
				timeout: '100000'
			});
			if (err) {
				console.log('获取轮播图失败');
			} else {
				this.listHot = [[]];

				var d = ret.data;

				//i代表第几个标题
				let l = [];

				var v1 = d.最热;
				var v2 = d.热播电影;
				var v3 = d.热播电视剧;
				var v4 = d.热播综艺节目;
				var v5 = d.热播动漫;

				//this.listHot.push([]);
				//j代表每个标题下面有多少个视频
				for (var j = 0; j < v1.length; j++) {
					var video = v1[j];

					//这里转换一下格式
					var videoTrans = this.getVideoFromJavaToPage(video);
					videoTrans.showName = '最热';

					this.listHot[0].push(videoTrans);
				}
				this.listHot.push([]);
				//j代表每个标题下面有多少个视频
				for (var j = 0; j < v2.length; j++) {
					var video = v2[j];

					//这里转换一下格式
					var videoTrans = this.getVideoFromJavaToPage(video);
					videoTrans.showName = '热播电影';

					this.listHot[1].push(videoTrans);
				}
				this.listHot.push([]);
				//j代表每个标题下面有多少个视频
				for (var j = 0; j < v3.length; j++) {
					var video = v3[j];

					//这里转换一下格式
					var videoTrans = this.getVideoFromJavaToPage(video);
					videoTrans.showName = '热播电视剧';

					this.listHot[2].push(videoTrans);
				}
				this.listHot.push([]);
				//j代表每个标题下面有多少个视频
				for (var j = 0; j < v4.length; j++) {
					var video = v4[j];

					//这里转换一下格式
					var videoTrans = this.getVideoFromJavaToPage(video);
					videoTrans.showName = '热播综艺节目';
					this.listHot[3].push(videoTrans);
				}
				this.listHot.push([]);
				//j代表每个标题下面有多少个视频
				for (var j = 0; j < v5.length; j++) {
					var video = v5[j];

					//这里转换一下格式
					var videoTrans = this.getVideoFromJavaToPage(video);
					videoTrans.showName = '热播动漫';
					this.listHot[4].push(videoTrans);
				}

				console.log('轮播图数据' + ret.data);
			}
		},
		//点击切换视频按钮
		onClickButton(index, urlId, link_name, values) {
			//给选中的标签赋值
			this.clickButtonIds[this.currentTab].cid[index] = urlId;

			this.$set(this.paramsForEachPage[this.currentTab], link_name, values);

			this.$forceUpdate();

			console.log(this.paramsForEachPage);
			//调用刷新页面
			this.getVideoList(4);

			//返回到第一页

			this.toView = '';
			setTimeout(() => {
				this.toView = 'top' + this.currentTab;
			}, 10);
		},

		//显示隐藏筛选
		showFilter(e) {
			console.log('点击');
			if (this.showOrHide == 'hide') {
				this.showOrHide = 'show';
				this.xuanzhuan = 'up';
			} else {
				this.showOrHide = 'hide';
				this.xuanzhuan = 'down';
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

			if (e.detail.value.trim().length == 0) {
				return;
			}

			//跳转到搜索页
			uni.navigateTo({
				url: '/pages/videoPage/serch/serch?msg=' + e.detail.value.trim()
			});
		},

		//获取筛选列表请求
		async getFilter() {
			const [err, res] = await uni.request({
				url: this.$serverUrl + '/getSearchFilter',
				method: 'POST',
				header: {
					'content-type': 'application/json'
				}
			});
			//data为一个数组，数组第一项为错误信息，第二项为返回数据

			if (err) {
				console.log('请求主题信息失败:', err);
			} else {
				console.log(res.data);
				var showPara = res.data;
				this.paramsForEachPageShow = showPara;
				//初始化筛选按钮
				this.clickButtonIds = [];

				for (var i = 0; i < showPara.length; i++) {
					//其中4个条件确定,就是不知道有多少页
					var a = {
						cid: [0, 0, 0, 0]
					};
					this.clickButtonIds.push(a);
				}

				this.$forceUpdate();
			}
		},
		//获取主题数据,也就是左右滑动的标题数据
		async getCatogory() {
			const [err, ret] = await uni.request({
				url: this.$serverUrl + '/getCategory',
				method: 'POST'
			});

			if (err) {
				console.log('请求主题getCatogory失败:', err);
			} else {
				console.log('请求主题getCatogory返回的数据是:' + ret.data);
				var videoCategories = ret.data;

				this.tabTitle = [];
				this.paramsForEachPage = [];
				this.pages = [];
				for (var i = 0; i < videoCategories.length; i++) {
					//初始化标题
					this.tabTitle.push(videoCategories[i].name);
					//初始化查询条件
					var ppid = videoCategories[i].id;
					this.paramsForEachPage.push({
						ppid: ppid,
						pids: '',
						years: '',
						area: '',
						sortWay: '0',
						currentPageNum: 0,
						pageSize: 8
					});

					//初始化当前页数

					this.pages.push(0);
				}

				//初始化获取所有的分类下的视频 怀疑是异步执行,所以放在成功里面
				this.getVideoList('3');
				//初始化轮播图,按照更新世界排序

				this.getHotVideo();
				/* 修改为同步方法 获取筛选列表*/
				this.getFilter();

				//获取是否使用vip机制
				this.isShowPay();
			}
		},

		async isShowPay() {
			const [err, ret] = await uni.request({
				url: this.$serverUrl + '/isShowPay',
				method: 'POST',
				header: {
					'content-type': 'application/json'
				}
			});
			if (err) {
				getApp().globalData.isShowPay = 'true';
			} else {
				getApp().globalData.isShowPay = ret.data + '';
			}

			console.log('是否启用vip机制' + ret.data);
		}
	}
};
</script>

<style lang="scss">
@import '../../common/common.css';
@import '../../colorui/main.css';
@import '../../colorui/icon.css';
* {
	-webkit-overflow-scrolling: touch;
}
.container999 {
	width: 100vw;
	font-size: 28upx;
	min-height: 100vh;
	max-height: 100vh;
	overflow: hidden;
	color: #6b8082;
	position: relative;
	background-color: white;
}
.content {
	width: 100%;
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
	position: relative;
	width: 80%;
	margin: 0 auto;
	right: 50upx;
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

.sercheTab {
	height: 56upx;
	width: 56upx;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	left: 100upx;

	float: right;
}
.clickButtonId {
	font-size: 30upx;
	font-weight: bold;
	transition: all 0.3s;
	color: #5100f5;
	box-shadow: 2upx 2upx 2upx 1upx rgba(134, 134, 134, 25);
}

.hide {
	position: relative;
	opacity: 0;
	height: 0;
}

.show {
	top: 100upx;
	z-index: 5000;
	background-color: #ffffff;
	transition-timing-function: ease;
	transition-duration: 1s;
	transition-property: transform, opacity;
	opacity: 1;
	visibility: visible;
	transform: translateY(-100upx);
}
button:hover {
	border: none;
}
.down {
	transition-timing-function: ease;
	transition-duration: 0.5s;
	transition-property: transform, opacity;
}
.up {
	transform: rotate(180deg);
	transition-timing-function: ease;
	transition-duration: 0.5s;
	transition-property: transform, opacity;
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
	height: 6vh;
	opacity: 1;
	-webkit-transition: all 0.5s linear;
	-moz-transition: all 0.5s linear;
	-ms-transition: all 0.5s linear;
	-o-transition: all 0.5s linear;
	transition: all 0.5s linear;
}
.status_bar {
	height: var(--status-bar-height);
	width: 100%;
	background: -moz-linear-gradient(left, #ace, #49ff46); /*Mozilla*/
	background: -webkit-gradient(linear, 0 50%, 100% 50%, from(#ace), to(#49ff46)); /*Old gradient for webkit*/
	background: -webkit-linear-gradient(left, #ace, #49ff46); /*new gradient for Webkit*/
	background: -o-linear-gradient(left, #ace, #49ff46); /*Opera11*/
}
.top_view {
	height: var(--status-bar-height);
	width: 100%;
	position: fixed;
	background: -moz-linear-gradient(left, #ace, #49ff46); /*Mozilla*/
	background: -webkit-gradient(linear, 0 50%, 100% 50%, from(#ace), to(#49ff46)); /*Old gradient for webkit*/
	background: -webkit-linear-gradient(left, #ace, #49ff46); /*new gradient for Webkit*/
	background: -o-linear-gradient(left, #ace, #49ff46); /*Opera11*/
	top: 0;
	z-index: 999;
}
.backGrondColor {
	background: -moz-linear-gradient(left, #ace, #49ff46); /*Mozilla*/
	background: -webkit-gradient(linear, 0 50%, 100% 50%, from(#ace), to(#49ff46)); /*Old gradient for webkit*/
	background: -webkit-linear-gradient(left, #ace, #49ff46); /*new gradient for Webkit*/
	background: -o-linear-gradient(left, #ace, #49ff46); /*Opera11*/
}
.texts {
	font-size: 28upx;
	line-height: 60upx;
	color: #aaaaaa;
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
}
.comeRight {
	position: relative;
	left: 50%;
}
</style>

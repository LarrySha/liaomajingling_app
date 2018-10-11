<template>
	<view>

		<view class='pd pt20'>
			<image :src='ma_sdfg+sd.img_url' class="w100 topi_sd"></image>


			<navigator class='caha_ddfr yj4 br mt60' :url="'/pages/xiangqing/xiangqing?id_r='+srr_df">
				查看详情
			</navigator>



			<view class='caha_ddfr yj4 br mt30' @click='baocun()'>
				保存到相册
			</view>

			<view class='caha_ddfr yj4 br mt30' @click='yijian' v-if="sd.price>0 && sd.is_refund<2&& sd.is_expire<2">
				一键通知
				<text class='fz26 red'>(关注您的粉丝收到消息推送)</text>
			</view>


			<navigator :url="'/pages/zuijia/zuijia?liao_id='+sd.id+'&title='+sd.title" class='caha_ddfr yj4 br mt30' v-if="sd.is_refund<2&& sd.is_expire<2&&type_e!=1">
				追加内容
				<text class='fz26 red'>(购买过的用户收到消息推送)</text>
			</navigator>


			<view class='caha_ddfr yj4 br mt30 df_Jh_df_det' v-if="sd.is_refund==1&&type_e!=1" @click='yitkus'>
				一键退款
			</view>

			<view class='caha_ddfr yj4 br mt30 df_Jh_df_det' v-if="type_e==1" @click='suy_deertty'>
				关闭
			</view>

			<view class="mt60" v-if="type_e!=1">
				<view class='pt20 pm20 fz26'>

					收益总额
					<text class='red'>{{sd.all_amount}}</text>元

					<view class='fr'>
						已售
						<text class='red'>{{sd.sale}}</text>份
					</view>
					<view class='qc'></view>
				</view>

			</view>


		</view>



		<view class='btm pd pt20 pm20 fz30 pr' v-for="item in femsd_sd" v-if="type_e!=1">
			<image :src='item.head_img' class='yj topi_sd_deer cz'></image>
			<text class='ml10'>{{item.nick_name}} </text>
			<image src='../../static/img/yituikuan.png' class='yituikuan_der' v-if="item.status==3"></image>
			<view class='fr fz26 z9'>{{item.timedf}}</view>
		</view>

		<view v-if="is_dsrt&&femsd_sd>=10" class="pt20 pm20 btm cen fz26">
			没有更多数据了...
		</view>

		<view v-if="!is_dsrt&&femsd_sd>=10" class="pt20 pm20 btm cen fz26">
			加载中...
		</view>





	</view>
</template>
<script>
	import base from "../../common/base.js"
	export default {
		data() {
			return {
				sd: "",
				srr_df: 0,
				ma_sdfg: "",
				type_e: "",
				liao_id: 0,
				pageNo: 1,
				is_dsrt: false,
				code_d: "",
				femsd_sd: []
			}
		},
		components: {},
		methods: {
			liaoinfo() {
				var x_get_resource_info = {},
					th = this,
					code_d = this.code_d
				x_get_resource_info.id = code_d
				base.ajax("a_get_resource_info", x_get_resource_info, function(data) {
					th.sd = data.data
				})
			},
			get_liao() {
				let x_get_resource_order = {},
					th = this
				x_get_resource_order.id = this.srr_df
				x_get_resource_order.pageNo = this.pageNo.toString()
				base.ajax("a_get_resource_order", x_get_resource_order, function(data) {
					data.data.map(a => {
						a.timedf = base.time_er(a.create_time)
						th.femsd_sd.push(a)
					})
					if (data.data.length < 10) {
						th.is_dsrt = true
					}

				})
			},

			yijian() {
				var liao_id = this.liao_id,
					x_one_notice = {}
				x_one_notice.id = liao_id
				uni.showModal({
					title: '提示',
					content: '关注公众号才能收到通知',
					success: function(res) {
						if (res.confirm) {
							base.ajax("a_one_notice", x_one_notice, function(data) {
								uni.showToast({
									title: data.msg,
									icon: 'none',
									duration: 2000
								})
							})
						}
					}
				})
			},
			suy_deertty() { //关闭按钮触发
				uni.switchTab({
					url: '/pages/index/index'
				})
			},

			yitkus() {
				var liao_id = this.liao_id,
					th = this,
					x_one_notice = {}
				x_one_notice.id = liao_id
				uni.showModal({
					title: '提示',
					content: '确定要发起一键退款？',
					success: function(res) {
						if (res.confirm) {
							base.ajax("a_one_refund", x_one_notice, function(data) {
								uni.showModal({
									title: '提示',
									showCancel: false,
									content: data.msg,
									success: function(res) {
										if (res.confirm) {
											uni.redirectTo({
												url: '/pages/list_de/list_de?code_r=' + liao_id
											})
										}
									}
								})
							})
						}
					}
				})
			},
			baocun(e) {
				let url_e = "",
					ma_sdfg = this.ma_sdfg,
					sd = this.sd
				url_e = ma_sdfg + sd.img_url
				uni.showLoading({
					title: '处理中...',
					mask: true
				});
				
				
				uni.getImageInfo({
					src: url_e,
					success: function(sres) {
						uni.saveImageToPhotosAlbum({
							filePath: sres.path,
							success(res) {
								uni.hideLoading();
								uni.showToast({
									title: '保存成功',
									icon: 'none',
									duration: 2000
								})
							}
						})
					}
				})
			},


		},
		onLoad: function(options) {
			var code_d = options.code_r
			this.ma_sdfg = uni.getStorageSync('img_url_qr')
			this.srr_df = code_d
			this.type_e = options.type_e || ""
			this.liao_id = code_d
			this.code_d = code_d

			this.get_liao()

			this.liaoinfo()

		},
		onReachBottom: function() {
			if (!this.is_dsrt) {
				++this.pageNo
				this.get_liao()
			}

		},
		mounted() {

		},
	}
</script>
<style scoped>
	.topi_sd {
		height: 700rpx;
	}

	.caha_ddfr {
		line-height: 80rpx;
		text-align: center;
		font-size: 32rpx;
	}

	.qianbi_deer {
		width: 32rpx;
		height: 32rpx;
	}

	.topi_sd_deer {
		height: 60rpx;
		width: 60rpx;
	}

	.topi_sd {
		width: 100%;
		height: 700rpx;
		display: block
	}

	.df_Jh_df_det {
		color: #fff;
		background: #FF6A11 !important;
	}

	.yituikuan_der {
		position: absolute;
		left: 40%;
		width: 80rpx;
		height: 80rpx;
		top: 8rpx;
	}
</style>

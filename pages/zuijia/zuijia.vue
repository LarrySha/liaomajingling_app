<template>
	<view>
		<liaomatou></liaomatou>




		<view class="mt20 pd">
			<view>
				<text class="bgzhu dsf_jh_s yj"></text>
				<text class="fz30 ml10">标题</text>
				<text class='red fz24 ml5'>(不可改)</text>
			</view>

			<view class="mt20">
				<input class="sd_deert" disabled='true' v-model="title"></input>
			</view>





			<view class="mt30">
				<text class="bgzhu dsf_jh_s yj"></text>
				<text class="fz30 ml10">料</text>
			</view>

			<view class="mt20">

				<view class='pr sd_jh_eeer' v-if="liao_sd_a">
					<icon type='clear' class="clse_dseert" @click="liao_sd_a=false"></icon>
					<textarea class='br' v-model="content "></textarea>
				</view>



				<view class='pr' v-if="img.length>0">

					<view class='add_sertx pr cz' v-for="(sd,idx) in img">
						<icon type='clear' class="clse_dseert" @click='dsf_derty(idx)'></icon>
						<image :src="img_url+sd" @click="lltu(sd)"></image>
					</view>

					<view class='add_sertx ab cz' @click="shg_deert">
						<image src='../../static/img/add_icon.png' class="cz"></image>
					</view>


				</view>
				<view class="sd_h_deeret" v-if="!liao_sd_a" @click="liao_sd_a=true">
					<view class='yj4 br df_jh_deert'>
						<image src='../../static/img/qianbi.png' class='qianbieer cz'></image>
					</view>
					<view class="z9 fz26 mt10">文字</view>

				</view>
				<view class="sd_h_deeret" @click="shg_deert" v-if="img.length<=0">

					<view class='yj4 br df_jh_deert'>
						<image src='../../static/img/tupian.png' class='qianbieer cz'></image>
					</view>
					<view class="z9 fz26 mt10">图片</view>

				</view>
				<view class="qc"></view>
			</view>
		</view>
		<view class='btm mt40 pd'>
			<view class='shengcsd_sewr' @click="qzuijia">
				确认追加
			</view>

		</view>
	</view>
	</view>
</template>
<script>
	import base from "../../common/base.js"
	export default {
		data() {
			return {
				liao_sd_a: false,
				liao_sd_b: false,


				s_kj_der: [],
				img: [], //图片
				content: "", //内容
				title: "",
				id_r: 0,
				img_url: ""

			}
		},
		onLoad: function(options) {

			this.title = options.title
			this.id_r = options.liao_id


		},

		components: {},
		methods: {
			qzuijia() { //确认追加按钮触发
				let th = this

				if (!this.content && this.img.length <= 0) {
					wx.showToast({
						title: '请输入文字或上传图片',
						icon: 'none',
						duration: 2000
					})
					return
				}
				let x_add_content = {}
				x_add_content.id = this.id_r
				x_add_content.content = this.content
				x_add_content.img = this.img.join(",")
				base.ajax("a_add_content", x_add_content, function(data) {
					wx.showToast({
						title: '追加成功',
						icon: 'none',
						duration: 2000,
						success: function() {
							wx.redirectTo({
								url: '/pages/xiangqing/xiangqing?id_r=' + th.id_r
							})
						}
					})
				})



			},
			shg_deert() { //上传图片
				let th = this
				uni.chooseImage({
					success: function(res) {
						var login_wer = uni.getStorageSync('token')
						res.tempFilePaths.map(a => {
							th.s_kj_der.push(a)
							uni.showLoading({
								title: '加载中'
							});
							uni.uploadFile({
								url: 'https://lmjl.ttkgou.com/lmjl_core/app/a_img_upload_one', //仅为示例，非真实的接口地址
								filePath: a,
								name: 'file',
								formData: {
									'token': login_wer
								},
								success: function(res) {
									uni.hideLoading();

									let sf_ddr = JSON.parse(res.data)
									th.img.push(sf_ddr.data)

								}
							})
						})
					}

				})
			},
			dsf_derty(idx) { //删除图片
				this.img.splice(idx, 1);
				this.s_kj_der.splice(idx, 1);
			},

			lltu(url) {
				let th = this
				uni.previewImage({
					current: url,
					urls: th.s_kj_der
				});
			}


		},
		mounted() {
			this.img_url = uni.getStorageSync('img_url')
		},
	}
</script>
<style scoped>
	.dsf_jh_s {
		display: inline-block;
		width: 16rpx;
		height: 16rpx;
	}

	.sd_deert {
		width: 100%;
		height: 70rpx;
		line-height: 70rpx;
		border-radius: 8rpx;
		padding-left: 20rpx !important;
		font-size: 30rpx;
		border: 1px solid #eaeaea
	}

	.sd_deert.ab {
		height: 160rpx;
		padding-right: 20rpx !important;
		line-height: 1.5;
		padding-top: 10rpx;
	}

	.df_jh_deert {
		width: 130rpx;
		height: 130rpx;
		text-align: center;
		line-height: 130rpx;
	}

	.qianbieer {
		width: 52rpx;
		height: 52rpx;
	}

	.sd_h_deeret {
		width: 130rpx;
		text-align: center;
		float: left;
		margin-right: 30rpx;
	}

	.d_jh_deeert {
		width: 25%;
		float: left
	}

	.d_jh_deeert view.br {
		line-height: 70rpx;
		font-size: 30rpx;
		text-align: center;
		color: #666;
		border-radius: 8rpx;
		margin-top: 20rpx;
	}

	.d_jh_deeert view.br.act {
		color: #70c434 !important;
		background: #ededed;
	}

	.dsf_jh_deert {
		width: 100%;
		border-top: 10rpx solid #F8F8F8;
	}

	.down_deert {
		width: 30rpx;
		height: 30rpx;
		position: absolute;
		right: 0px;
		top: 25rpx;
	}

	.sd_jh_dert {
		width: 540rpx;
	}

	.sd_jh_dert .dsf_dert {
		padding-left: 20rpx !important;
		line-height: 65rpx;
		height: 65rpx;
		border-radius: 8rpx;
		width: 260rpx;
		float: left
	}

	.sd_jh_dert .dsf_dert.ab {
		width: 160rpx;
		margin-left: 20rpx
	}

	.qingkong_de {
		border-radius: 8rpx;
		border: 1px solid #7abd54;
		height: 58rpx;
		line-height: 58rpx;
		display: block;
		width: 100rpx;
		text-align: center;
		font-size: 26rpx;
		margin-left: 20rpx;
		color: #7abd54;
	}

	.df_erttyxc {
		display: inline-block
	}

	.giu_dsdf {
		width: 34rpx;
		height: 34rpx;
		display: inline-block;
	}

	.usdd_dseert {
		width: 160rpx;
		height: 160rpx;
	}

	.down_deert.act {
		display: inline-block;
		transform: rotate(180deg)
	}

	.shengcsd_sewr {
		line-height: 80rpx;
		height: 80rpx;
		background: #70C434;
		border-radius: 8rpx;
		text-align: center;
		color: #fff;
		margin-top: 60rpx;
		font-size: 30rpx;
		margin-bottom: 100rpx;
	}

	.sd_jh_eeer textarea {
		height: 250rpx;
		line-height: 1.5;
		width: 100%;
		margin-bottom: 20rpx;
		border-radius: 8rpx;
		font-size: 30rpx;
		padding: 15rpx 20rpx !important;
	}

	.clse_dseert {
		position: absolute;
		right: -10rpx;
		top: -10rpx;
		z-index: 100
	}

	.add_sertx {
		width: 205rpx;
		height: 205rpx;
		margin-bottom: 20rpx;
		display: inline-block;
		margin-right: 30rpx;
	}

	.add_sertx image {
		width: 100%;
		height: 100%;
	}


	.add_sertx {
		width: 205rpx;
		height: 205rpx;
		margin-bottom: 20rpx;
		display: inline-block;
		margin-right: 30rpx;
	}

	.add_sertx.ab {
		text-align: center;
		line-height: 205rpx;
		border: 2px dashed #7ABD54
	}

	.add_sertx image {
		width: 100%;
		height: 100%;
	}

	.add_sertx.ab image {

		width: 60rpx;
		height: 60rpx;
	}

	.dsfdsf_deet {
		padding-top: 30rpx;
		padding-bottom: 30rpx;
	}
</style>

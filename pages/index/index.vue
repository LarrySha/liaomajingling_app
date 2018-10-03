<template>
	<view class="content">

		<liaomatou></liaomatou>


		<view class="mt20 pd">
			<view>
				<text class="bgzhu dsf_jh_s yj"></text>
				<text class="fz30 ml10">标题</text>
			</view>

			<view class="mt20">
				<input class="sd_deert" v-model="form.title"></input>
			</view>

			<view class="mt30">
				<text class="fz30 ">简介</text>
				<text class='fz26 red'>(可不填)</text>
			</view>

			<view class="mt20">
				<textarea class='sd_deert ab' maxlength="46" v-model="form.introduce"></textarea>
			</view>


			<view class="mt30">
				<text class="bgzhu dsf_jh_s yj"></text>
				<text class="fz30 ml10">料</text>
			</view>

			<view class="mt20">

				<view class='pr sd_jh_eeer' v-if="liao_sd_a">
					<icon type='clear' class="clse_dseert" @click="liao_sd_a=false"></icon>
					<textarea class='br' v-model="form.content "></textarea>
				</view>



				<view class='pr' v-if="s_kj_der.length>0">
					<view class='add_sertx pr cz' v-for="(sd,idx) in s_kj_der">
						<icon type='clear' class="clse_dseert" @click='dsf_derty(idx)'></icon>
						<image :src="sd" @click="lltu(sd)"></image>
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





				<view class="sd_h_deeret" @click="shg_deert" v-if="s_kj_der.length<=0">

					<view class='yj4 br df_jh_deert'>
						<image src='../../static/img/tupian.png' class='qianbieer cz'></image>
					</view>
					<view class="z9 fz26 mt10">图片</view>

				</view>



				<view class="qc"></view>



			</view>



		</view>




		<view class='pl20'>
			<view class="mt30">
				<text class="bgzhu dsf_jh_s yj"></text>
				<text class="fz30 ml10">定价(元)</text>
			</view>
			<view v-for="sd in dingjia" class="d_jh_deeert pr20" @click="sd_dsf(sd)">

				<view class='br  ' :class="sd.cls">{{sd.name}}</view>
			</view>

			<view class='qc'></view>

			<view class="mt20 pr20">
				<input class="sd_deert" placeholder='自定义金额' v-model="form.price"></input>
			</view>



		</view>









		<view class='pd dsf_jh_deert mt20'>
			<view class=' pt20 pm20 bbm'>
				<text class="fz30 ">其他功能</text>
				<text class='fz26 red'>(非必填)</text>
			</view>

			<view class="pd">

				<view class='dsfdsf_deet fz30 pr bbm'>
					<view @click="is_sdf_a?is_sdf_a=false:is_sdf_a=true">
						过期时间
						<image src='../../static/img/down.png' class="down_deert"></image>
					</view>
					<view class='mt20' v-if="is_sdf_a">
						<view class='red fz26 pm20'>所选时间为稿件下架时间，此时段以后将不能被购买
						</view>
						<view class='sd_jh_dert fl'>

							<picker mode="date" start="2018-01-01" end="2019-01-01" @change="bindDateChange" class="br dsf_dert fz26">
								<view class="picker">
									{{date||'请选日期'}}
								</view>
							</picker>


							<picker mode="time" @change="bindDateChange_er" class="br dsf_dert fz26 ab">
								<view class="picker">
									{{time_sd||'请选择时间'}}
								</view>
							</picker>






						</view>

						<view class='ov'>
							<text class='qingkong_de' @click='qingdf'>清空</text>
						</view>
						<view class="qc">

						</view>


					</view>
				</view>

				<view class='dsfdsf_deet fz30 pr bbm'>
					<view @click="is_sdf_b?is_sdf_b=false:is_sdf_b=true">
						是否退款
						<image src='../../static/img/down.png' class="down_deert"></image>

					</view>

					<view class='mt20' v-if="is_sdf_b">
						<view class='red fz26 pm20'>选中退款将会有一键退款的功能 </view>
						<view bindtap='gu_seert'>
							<view class='df_erttyxc cz' @click="form.is_refund==0?form.is_refund=1:form.is_refund=0">


								<text class="ssd_drrrtt cz" v-if="form.is_refund ==0"></text>
								<icon type="success" size="22" class="cz" v-else />
								<text class="cz">是否退款</text>





							</view>
						</view>
					</view>



				</view>
				<view class='dsfdsf_deet fz30 pr bbm'>

					<view @click="is_sdf_c?is_sdf_c=false:is_sdf_c=true">
						选择模板
						<image src='../../static/img/down.png' class="down_deert"></image>
					</view>



					<view class='pt20' v-if="is_sdf_c">
						<view class='red fz26 pm20 '>点击图片选择料码模版 </view>
						<view>
							<image :src="'../../static/img/'+moban_ds+'.png'" class="usdd_dseert" @click='xzmb_erert'></image>

						</view>
					</view>


					<!-- moban_ds -->

				</view>

			</view>




		</view>


		<view class='qc'></view>
		<view class='pd pm40'>
			<view class='shengcsd_sewr ' @click='sclm_ddrt'>
				生成料码
			</view>
		</view>






	</view>
</template>

<script>
	import base from "../../common/base.js"
	export default {
		data: {
			title: 'Hello',
			jiner: '',
			date: "",
			time_sd: "",
			is_sdf_a: false,
			is_sdf_b: false,
			is_sdf_c: false,
			liao_sd_a: false,
			liao_sd_b: false,
			moban_ds: 9,
			form: {
				title: "", //标题
				introduce: "", //简介
				content: "", //内容
				img: "", //内容图片，和内容至少填一个
				price: 0, //价格（元）
				color_s: "", // 二维码上半色
				color_x: "", //二维码下半色
				is_refund: 0, //是否退款0不退款1有退款
				expire_time_str: "" //过期时间（非必填）
			},

			dingjia: [{
				name: "免费",
				num: 0,
				cls: "act"
			}, {
				name: "1元",
				num: 1,
				cls: ""
			}, {
				name: "5元",
				num: 5,
				cls: ""
			}, {
				name: "18元",
				num: 18,
				cls: ""
			}, {
				name: "38元",
				num: 38,
				cls: ""
			}, {
				name: "68元",
				num: 68,
				cls: ""
			}, {
				name: "88元",
				num: 88,
				cls: ""
			}, {
				name: "188元",
				num: 188,
				cls: ""
			}],
			s_kj_der: [],
			img: []

		},
		components: {},
		onShow: function(e) {
			if (uni.getStorageSync('id_s')) {
				var yanse = uni.getStorageSync('yanse')
				yanse = yanse.split(",")
				this.moban_ds = uni.getStorageSync('id_s')
				this.form.color_s = yanse[0]
				this.form.color_x = yanse[1]
			}

		},
		methods: {
			xzmb_erert() {
				let th=this 
				wx.navigateTo({
					url: '/pages/xzmb/xzmb?id_s=' + th.moban_ds
				})
			},
			sclm_ddrt() { //生成料码
				if (!this.form.title) {
					uni.showToast({
						title: '请输入标题',
						icon: "none",
						duration: 2000
					});
					return
				}

				if (!this.form.content && this.img.length <= 0) {
					uni.showToast({
						title: '请输入文字或上传图片',
						icon: 'none',
						duration: 2000
					})
					return
				}

				this.form.img = this.img.join(",")
				this.form.expire_time_str = this.date + " " + this.time_sd
				base.ajax("a_add_resource", this.form, function(data) {
					uni.redirectTo({
						url: '/pages/list_de/list_de?type_e=1&code_r=' + data.data
					})
				})



			},
			checkboxChange(e) {

			},
			sd_dsf(sd) {
				this.dingjia.map(a => {
					a.cls = ""
				})
				sd.cls = "act"
				this.jiner = sd.num
				this.form.price = sd.num
				console.log(sd.num)
			},
			bindDateChange(evt) {
				this.date = evt.detail.value;
			},
			bindDateChange_er(evt) {
				this.time_sd = evt.detail.value;
			},
			qingdf() {
				this.date = ""
				this.time_sd = ""
			},
			shg_deert() { //上传图片
				let th = this
				uni.chooseImage({
					success: function(res) {
						var login_wer = uni.getStorageSync('token')
						res.tempFilePaths.map(a => {
							th.s_kj_der.push(a)
							uni.uploadFile({
								url: 'https://lmjl.ttkgou.com/lmjl_core/app/a_img_upload_one', //仅为示例，非真实的接口地址
								filePath: a,
								name: 'file',
								formData: {
									'token': login_wer
								},
								success: function(res) {
									let sf_ddr = JSON.parse(res.data)
									th.img.push(sf_ddr.data)
									console.log(th.img)
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
		mounted() {},
	}
</script>



<style>
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
		border: 1rpx solid #eaeaea
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
		right: 0rpx;
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
		border: 1rpx solid #7abd54;
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
		margin-top: 80rpx;
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

	.add_sertx.ab {
		text-align: center;
		line-height: 205rpx;
		border: 2rpx dashed #7ABD54
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

	.ssd_drrrtt {
		border: 1px solid #999;
		width: 32rpx;
		height: 32rpx;
		border-radius: 50%;
		display: inline-block;
	}
</style>

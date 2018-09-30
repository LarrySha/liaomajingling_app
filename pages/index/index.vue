<template>
	<view class="content">


		<view class="cen df_jh_drt">
			<image src="../../static/img/logo.png" class="logo_dert"></image>
			<view class="fz26 z9">资源扫码工具</view>
		</view>


		<view class="mt20 pd">
			<view>
				<text class="bgzhu dsf_jh_s yj"></text>
				<text class="fz30 ml10">标题</text>
			</view>

			<view class="mt20">
				<input class="sd_deert"></input>
			</view>

			<view class="mt30">
				<text class="fz30 ">简介</text>
				<text class='fz26 red'>(可不填)</text>
			</view>

			<view class="mt20">
				<textarea class='sd_deert ab' maxlength="46"></textarea>
			</view>


			<view class="mt30">
				<text class="bgzhu dsf_jh_s yj"></text>
				<text class="fz30 ml10">料</text>
			</view>

			<view class="mt20">

				<view class='pr sd_jh_eeer' v-if="liao_sd_a">
					<icon type='clear' class="clse_dseert" @click="liao_sd_a=false"></icon>
					<textarea class='br'></textarea>
				</view>



				<view class='pr' v-if="false">
					<!--     <view class='add_sertx pr cz' >
        <icon type='clear' class="clse_dseert" catchtap='dsf_derty' data-idx="{{index}}"></icon>
        <image src="{{item}}"></image>
      </view> -->

					<view class='add_sertx ab cz'>
						<image src='../../static/img/add_icon.png' class="cz"></image>
					</view>


				</view>




				<view class="sd_h_deeret" v-if="!liao_sd_a" @click="liao_sd_a=true">
					<view class='yj4 br df_jh_deert'>
						<image src='../../static/img/qianbi.png' class='qianbieer cz'></image>
					</view>
					<view class="z9 fz26 mt10">文字</view>

				</view>





				<view class="sd_h_deeret">

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
				<input class="sd_deert" placeholder='自定义金额' v-model="jiner"></input>
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
							<view class='df_erttyxc cz'>

								<label class="checkbox">
									<checkbox :value="is_tui.name" :checked="is_tui.checked" />{{is_tui.value}}
								</label>



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
							<image src='/static/img/1.png' class="usdd_dseert" bindtap='xzmb_erert'></image>
						</view>
					</view>




				</view>

			</view>




		</view>


		<view class='qc'></view>
		<view class='pd pm40'>
			<view class='shengcsd_sewr ' bindtap='sclm_ddrt'>
				生成料码
			</view>
		</view>






	</view>
</template>

<script>
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
			is_tui: {
				name: 'shifou',
				value: '是否退款',
				checked: 'true'
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
			}]
		},
		components: {},
		methods: {
			sd_dsf(sd) {
				this.dingjia.map(a => {
					a.cls = ""
				})
				sd.cls = "act"
				this.jiner = sd.num
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
</style>

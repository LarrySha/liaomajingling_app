<template>
	<view>
		
		<view class='pd pt20 pm20 dfs_hg_deert' v-if="is_hide.is_hide==2">
			<view class='cf fz26 '>今日收益
				<view class='df_jh_deet cf cen  fr pr20 ab'>
					<image :src='user_info.head_img' class='user_icon_e yj cz'></image>

					<text class=' fz26 cz ml10'>{{user_info.nick_name}}</text>
				</view>
			</view>

			<view class="qc">

			</view>



			<view class='df_jh_deet cf cen '>
				￥{{sd.day_amount}}

			</view>

			<view class='mt20'>
				<view class='scfd_Jhg_der'>
					<view class='fz32 cf cen'>{{sd.balance}}</view>
					<view class='fz26 cf cen'>余额</view>
				</view>

				<view class='scfd_Jhg_der'>
					<view class='fz32 cf cen'>{{sd.all_amount}}</view>
					<view class='fz26 cf cen'>收益总额</view>
				</view>

				<view class='qc'></view>
			</view>
		</view>

		<view class='pd pt20 pm20 dfs_hg_deert' v-else>

			<view class='df_jh_deet cf cen mt20'>
				<image src='http://thirdwx.qlogo.cn/mmopen/vi_32/bzAuBySaic9iaXIdr6sf0tSDMicQ4UmF1wUkWzBdAu8QurRVich0ibpWHRgZeeIW8DvVLc8C9Pc4IubBBeSRGNKTJuA/132'
				 class='user_icon_e yj ak'></image>

				<view class='mt20 fz30'>小鸣</view>
			</view>



		</view>

 
		<view class='cen mui-row'>
			<navigator url="/pages/guanzhu/index" class='df_dsdft cen fz32  pt20 pm20 ls'>
				关注 <text class='red'>{{sd.attention_num}}</text>
			</navigator>


			<navigator url="/pages/fensoi/index" class='df_dsdft cen pt20 pm20 fz32 ls blm'>
				粉丝 <text class='red'>{{sd.follower_num}}</text>
			</navigator>


			<view class='qc'></view>

		</view>



		<view class="df_derrtt">
			<view v-if="is_hide==2">
				<navigator class='pd sd_dff_dreer bbm pr btm' url="/pages/zhanghu/index">
					账户明细
					<image src='../../static//img/right.png' class='right_icone'></image>
				</navigator>


				<navigator class='pd sd_dff_dreer bbm pr' url="/pages/mingxi/index">
					提现明细
					<image src='../../static//img/right.png' class='right_icone'></image>
				</navigator>

				<view class='pd sd_dff_dreer  pr'>
					提现说明
					<view class='fz26 red df_jh_deer mt20'>

						为了您的资金安全，请在【料码精灵】公众号【我的钱包】进行提现，谢谢！

					</view>


				</view>
			</view>
		</view>
		<view class='pd '>
			<view class='shengcsd_sewr' @click='tuichu'>
				退出登录
			</view>
		</view>


		<navigator class="cen fz30 mt10 red sd_j_rrrt" url="/pages/xieyi/xieyi" v-if="is_hide==2">
			用户使用协议
		</navigator>
		<!-- <view class='mt50 fz32 cen z6 gff_cderert' v-if="is_hide">
    料码
  <view class='fz22 z6'>资源变现工具，帮你提高变现率</view>
</view> -->
	</view>
</template>
<script>
	import base from "../../common/base.js"
	export default {
		data() {
			return {
				sd: "",
				user_info: "",
				is_hide: ""
			}
		},
		onLoad: function(options) {
		this.is_hide=JSON.parse(uni.getStorageSync("get_key"))
			var login_wer = JSON.parse(uni.getStorageSync('x_login'))
			
				
			  this.user_info = login_wer
		},
		onShow: function() {
			var th = this
			base.ajax("a_get_account", {}, function(data) {

				th.sd = data.data

			})
		},
		components: {},
		methods: {
			tuichu() {
				uni.removeStorageSync('x_login');
				uni.removeStorageSync('img_url');
				uni.removeStorageSync('img_url_qr');
				uni.removeStorageSync('token');
				// uni.removeStorageSync('get_key'); 
				base.authLogout();
				uni.reLaunch({
					url: '/pages/star/index'
				});
			}
		},
		mounted() {




		},
	}
</script>
<style scoped>
	.df_derrtt {
		min-height: 300upx;
	}

	.dfs_hg_deert {
		background: #70C434
	}

	.df_jh_deet {
		font-size: 72rpx;
	}

	.df_jh_deet.ab {
		position: relative;
		bottom: 30rpx;

	}

	.scfd_Jhg_der {
		width: 50%;
		float: left
	}

	.right_icone {
		width: 32rpx;
		height: 32rpx;
		position: absolute;
		right: 20rpx;
		top: 25rpx;
	}

	.df_jh_deer {
		text-indent: 40rpx;
		line-height: 1.5
	}

	.df_dsdft {
		width: 50%;
		float: left
	}

	.de_cdfretry {
		background: #fff;
		padding: 0px;
		text-align: left;
		padding-left: 20rpx;
	}

	.de_cdfretry::after {
		display: none
	}

	.user_icon_e {
		width: 65rpx;
		height: 65rpx;
	}

	.user_icon_e.ak {
		width: 130upx;
		height: 130upx;
	}

	.sd_dff_dreer {
		font-size: 26rpx;
		line-height: 80rpx;
	}

	.gff_cderert {
		line-height: 1.8;
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

	.sd_j_rrrt {
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		text-decoration: underline
	}
</style>

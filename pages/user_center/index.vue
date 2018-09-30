<template>
	<view>
		<view class='pd pt20 pm20 dfs_hg_deert'>
			<view class='cf fz26'>今日收益</view>
			<view class='df_jh_deet cf cen mt20'>
				￥5

			</view>

			<view class='mt20'>
				<view class='scfd_Jhg_der'>
					<view class='fz32 cf cen'>0</view>
					<view class='fz26 cf cen'>余额</view>
				</view>

				<view class='scfd_Jhg_der'>
					<view class='fz32 cf cen'>0</view>
					<view class='fz26 cf cen'>收益总额</view>
				</view>

				<view class='qc'></view>
			</view>
		</view>

		<view class='cen mui-row'>
			<navigator url="/pages/guanzhu/index" class='df_dsdft cen pt20 pm20 fz30 ls'>
				关注 <text class='red'>0</text>
			</navigator>


			<navigator url="/pages/fensoi/fensoi" class='df_dsdft cen pt20 pm20 fz32 ls blm'>
				粉丝 <text class='red'>0</text>
			</navigator>


			<view class='qc'></view>

		</view>


<navigator class='pd pt20 pm20 fz30 bbm pr btm' url="">
    收入明细
    <image src='../../static/img/right.png' class='right_icone'></image>
</navigator>


<navigator class='pd pt20 pm20 fz30 bbm pr' url="">
    提现明细
   <image src='../../static/img/right.png' class='right_icone'></image>

</navigator>


<view class='pd pt20 pm20 fz30  pr' >
    提现说明
    <view class='fz26 red df_jh_deer mt20'>
    
     为了您的资金安全，请在【料码精灵】公众号【我的钱包】进行提现，谢谢！
        
    </view>


</view>


<view class='mt50 fz32 cen z6' >
    料码
  <view class='fz22 z6'>资源变现工具，帮你提高变现率</view>
</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		components: {},
		methods: {},
		mounted() {},
	}
</script>
<style scoped>
	.dfs_hg_deert {
		background: #70C434
	}

	.df_jh_deet {
		font-size: 72rpx;
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
		width: 150rpx;
		height: 150rpx;
	}
</style>

<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/**app.wxss**/
	@import './static/css/bass.css';

	page {
		font-family: 'Microsoft Yahei';
		background: #eee;
	}

	.bgzhu {
		background: #70c434;
	}

	page,
	input,
	textarea,
	view {
		box-sizing: border-box;
	}

	page {
		background: #fff;
	}

	.df_jh_drt {
		background: #f8f8f8;
		line-height: 1;
		padding-top: 5rpx;
		padding-bottom: 10rpx;
		border-radius: 0 0 50% 50%/0 0 20% 20%;
	}

	.logo_dert { 
		width: 70rpx;
		height: 70rpx;
	}


	.sd_jh_deert {
		width: 50%;
		float: left;
		text-align: center;
		font-size: 32rpx;
		line-height: 80rpx;
	}

	.sd_jh_deert.act {
		color: #70c434 !important
	}

	.dsf_jh_deert {
		width: 80%;
		float: left
	}

	.lajixiang {
		width: 32rpx;
		height: 32rpx;
		position: relative;
		top: 8rpx;
	}
</style>

<script>
	import base from "common/base.js"

	export default {
		onLaunch: function() {
			base.ajax("a_get_key", '', function(data) {
				let jiemi = data.data,
					sd_dffgg = JSON.parse(base.Decrypt(jiemi))
				console.log(JSON.stringify(sd_dffgg))
				let banben = 1.0; //版本号
				if (banben < parseFloat(sd_dffgg.app_version)) {
					uni.showModal({
						title: '提示',
						content: '有新版本更新'+sd_dffgg.app_version,
						confirmText:"立即更新",
						success: function(res) {
							if (res.confirm) { 
							uni.getSystemInfo({
								success: function(res) {
									if (res.platform == "ios") {
										plus.runtime.openURL(sd_dffgg.ios_update_url);
										
									} else {
										plus.runtime.openURL(sd_dffgg.andr_update_url);
									}
								},
							})
							}
						}
					});


				
				}
				if (sd_dffgg.is_hide == 1) {
					uni.setStorageSync('token', 'acf06b3b90ebe4750afe163b255a2f98c3095540889271');

				} else {
					if (uni.getStorageSync('token') == "acf06b3b90ebe4750afe163b255a2f98c3095540889271") {
						uni.removeStorageSync('token');
					}

				}
				uni.setStorageSync('get_key', base.Decrypt(jiemi));
			})

		},
		onShow: function() {

		},
		onHide: function() {

		},
		mounted() {


		},
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

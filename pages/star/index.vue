<template>
	<view class="content">

		<navigator @click="denglu">

			<image src="../../static/img/qidongtu.jpg" class="dsfdfrtrty"></image>
		</navigator>

	</view>
</template>
 
<script>
	import md5 from "../../common/md5.js"
	import base from "../../common/base.js"

	export default {
		data() {
			return {
				sd_ddfg: "",
				sd_ddfg_b: "",
			}
		},
		components: {},
		onLoad: function() {
			if (uni.getStorageSync('token')) {
				uni.switchTab({
					url: '/pages/index/index'
				});
			}
		}, 
		methods: {
			denglu() {
				let th = this
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						th.sd_ddfg = JSON.stringify(loginRes)
						// 获取用户信息
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								th.sd_ddfg_b = JSON.stringify(infoRes)
								let user_info = {},
									userInfo = infoRes.userInfo
								user_info.union_id = userInfo.unionId
								user_info.nick_name = userInfo.nickName
								user_info.sex = userInfo.gender
								user_info.country = userInfo.country
								user_info.province = userInfo.province
								user_info.city = userInfo.city
								user_info.head_img = userInfo.avatarUrl
								base.ajax("a_login", user_info, function(data) {
									let sd_drrt = data.data
									console.log(JSON.stringify(sd_drrt))
									uni.setStorageSync('is_hide', sd_drrt.is_hide);
									uni.setStorageSync('x_login', JSON.stringify(sd_drrt.userInfo));
									uni.setStorageSync('img_url', sd_drrt.img_url);
									uni.setStorageSync('img_url_qr', sd_drrt.img_url_qr);
									uni.setStorageSync('token', sd_drrt.userInfo.a_token);
									uni.switchTab({
										url: '/pages/index/index'
									});
								})
							}
						});

					}
				});
			}
		},
		mounted() {

			//console.log(base.Encrypt("515235416@qq.com"))
			//console.log(base.Decrypt("d6af6a3376cda2bd1a6b50d0329c8cbfc49c4100f4f5322370ba3bf45ce22e2511d78090219e5efe6303a2c0ae3045c608d79005b01770bae7696410f676bc8f"))

		}
	}
</script>

<style>
	.sfdf_dfert {
		padding: 0px;
	}

	.dsfdfrtrty {
		position: fixed;
		width: 100%;
		display: block;
		height: 100%;
	}
</style>

<!-- 关注 -->
<template>
	<view>


		<view class='pd pt20 pm20 bbm'>
			<view class='dsf_jh_deert dian'>
				<image src='../../static/img/1.png' class='yj dfg_jh_dert cz'></image>
				<text class='fz32 z3 ml10'>名字</text>
			</view>
			<view class='ov fz26 z9 df_jh_deert dian tr'>
				2018-09-30 17:04:46

				<view class=' tr'>
					<image src='../../static/img/lajixiang.png' class='lajixiang' @click="delect"></image>
				</view>


			</view>

			<view class='qc'></view>


		</view>


		<kongbai v-if="false"></kongbai>
	</view>
</template>
<script>
	import kongbai from "../../dx_unp/kongbai.vue"
	export default {
		data() {
			return {

			}
		},
		components: {
			kongbai
		},
		methods: {
			delect() {
				uni.showModal({
					title: '提示',
					content: '确定删除？',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		},
		mounted() {},
	}
</script>
<style scoped>
	.dfg_jh_dert {
		width: 60rpx;
		height: 60rpx;
	}

	.dsf_jh_deert {
		width: 50%;
		float: left
	}

	.df_jh_deert {
		line-height: 60rpx;
	}

	.df_jh_deert {
		line-height: 1.6
	}
</style>

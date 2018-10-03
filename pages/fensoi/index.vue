<template>
	<view>
		<view class='pd pt20 pm20 bbm' v-for="item in sd_kis">
			<view class='dsf_jh_deert dian'>
				<image :src='item.dp_head_img' class='yj dfg_jh_dert cz'></image>
				<text class='fz32 z3 ml10'>{{item.dp_nick_name}}</text>
			</view>
			<view class='ov fz26 z9 df_jh_deert dian tr'>
				{{item.timedf}}




			</view>

			<view class='qc'></view>


		</view>
 


	<view class='btm pt20 fz26 pm20 z9 cen' v-if="!is_dsrt&&sd_kis.length>=15">
			加载中...
		</view>

		<view class='btm pt20 fz26 pm20 z9 cen' v-if="is_dsrt&&sd_kis.length>=15">
			已加载全部数据
		</view>


		<kongbai v-if="sd_kis.length<10"></kongbai>

	</view>
</template>
<script>
	import kongbai from "../../dx_unp/kongbai.vue"
	import base from "../../common/base.js"
	export default {
		data() {
			return {
				pageNo: 1,
				sd_kis: [],
				is_dsrt: false
			}
		},
		components: {
			kongbai
		},

		onLoad: function(options) {
			this.get_mx()
		},
		onReachBottom: function() {
			if (!this.is_dsrt) {
				++this.pageNo
				this.get_mx()
			}
		},
		methods: {
			get_mx() {
				let x_get_transfer_list = {},
					th = this

				x_get_transfer_list.pageNo = this.pageNo.toString()
				base.ajax("a_get_attention_list", x_get_transfer_list, function(data) {
					data.data.map(a => {
						a.timedf = base.time_er(a.create_time)
						th.sd_kis.push(a)
					})
					if (data.data.length < 10) {
						th.is_dsrt = true
					}

				})
			},
			delect_er(sd, idx) {
				var id_r = sd.id,
					th = this
				wx.showModal({
					title: '提示',
					content: '确定取消关注',
					success: function(res) {
						if (res.confirm) {
							var x_remove_attention = {}
							x_remove_attention.id = id_r
							base.ajax("a_get_follower_list", x_remove_attention, function(data) {
								th.sd_kis.splice(idx, 1);

							})
						}
					}
				})
			}


		},

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
</style>

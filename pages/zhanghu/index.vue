<!-- 收入明细 -->
<template>
	<view>
		<view class="pd pt20 pm20 bbm" v-for="item in sd_kis">
			<view class='fl fg_jh_df dian fz26 z9 '>
				{{item.timedf}}
			</view>

			<view class='fl fg_jh_df dian fz26 z9 tr '>
				<image :src='item.head_img' class='dsf_kh_det yj cz'></image>
				<text class='fz26 z3 ml10'>{{item.nick_name}}</text>
			</view>

			<view class='qc pt10'></view>
			<view class='fl fg_jh_df dian fz26 z6 '>
				{{item.title}}
			</view>
			<view class='fl fg_jh_df dian fz26 z6  tr'>
				<text class='red'>{{item.amount}}</text>元
			</view>

			<view class='qc'></view>
		</view>


	
			<view class='btm pt20 fz26 pm20 z9 cen' v-if="!is_dsrt&&sd_kis.length>=10">
				加载中...
			</view>
	
			<view class='btm pt20 fz26 pm20 z9 cen' v-if="is_dsrt&&sd_kis.length>=10">
				已加载全部数据
			</view>
	
	
			<kongbai v-if="sd_kis.length<10"></kongbai>


	</view>
</template>
<script>
	import base from "../../common/base.js"
	import kongbai from "../../dx_unp/kongbai.vue"

	export default {
		data() {
			return {
				pageNo: 1,
				sd_kis: [],
				is_dsrt: false
			}
		},
		onLoad: function(options) {
			this.get_mx()
		},
		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function() {
			if (!this.is_dsrt) {
				++this.pageNo
				this.get_mx()
			}
		},

		components: {
			kongbai
		},
		methods: {
			get_mx() {
				let x_get_transfer_list = {},
					th = this
				x_get_transfer_list.pageNo = this.pageNo.toString()
				base.ajax("a_get_account_list", x_get_transfer_list, function(data) {
					data.data.map(a => {
						a.timedf = base.time_er(a.create_time)
						if (a.type == '1') {
							a.amount = "+" + a.amount 
						}
						if (a.type == '2') {
							a.amount = "(消费)-" + a.amount
						}
						if (a.type == '3') {
							a.amount = "(退款)+" + a.amount
						}
						if (a.type == '4') {
							a.amount = "(退款)-" + a.amount
						}
						th.sd_kis.push(a)
					})
					if (data.data.length < 10) {
						th.is_dsrt = true

					}
				})
			}

		},
		mounted() {},
	}
</script>
<style scoped>
	.fg_jh_df {
		width: 50%;
		float: left
	}

	.dsf_kh_det {
		width: 40rpx;
		height: 40rpx;
	}
</style>

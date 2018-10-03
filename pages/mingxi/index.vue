<template>
	<view>
		<navigator class='sd_drrttys pd bbm pt20 pm20' v-for="item in sd_kis" :url="'/pages/list_de/list_de?code_r='+item.id">
			<view class='dian dsf_jh_deert'>
				<view class="fz26 z9">
					{{item.timedf}}
				</view>
				<view class="fz26 z3 mt10">
					<text class='red'>{{item.amount}}</text> 元
				</view>
			</view>
			<view class='ov tr fz26 z9'>

				<view class='mt50'>
					<text class='red'> -{{item.fee}}</text> 元
				</view>

			</view>

			<view class='qc'></view>
		</navigator>
		
		
		
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
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			this.get_mx()
		},
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
				base.ajax("a_get_transfer_list", x_get_transfer_list, function(data) {
					data.data.map(a => {
						a.timedf = base.time_er(a.create_time)
						th.sd_kis.push(a)
					})
					if (data.data.length < 10) {
						th.is_dsrt = true
					}
				})
			},
		},
		mounted() {},
	}
</script>
<style scoped></style>

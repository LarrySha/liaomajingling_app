<template>
	<view>
		<liaomatou></liaomatou>
		<view class='bbm'>
			<view class='sd_jh_deert ' :class="item.cls" v-for="(item,idx) in is_msd" @click="sd_dff(item,idx)">
				{{item.name}}
			</view>

			<view class='qc'></view>
		</view>




		<view v-if="is_mm==0">

			<navigator class='sd_drrttys pd bbm pt20 pm20' :url="'/pages/list_de/list_de?code_r='+sd.id" v-for="(sd,idx) in resource_list">
				<view class='dian dsf_jh_deert'>
					<view class="fz26 z9">
						{{sd.timedf}}
					</view>
					<view class="fz26 z3 mt20">
						<text class='red' v-if="sd.zhuangts">【{{sd.zhuangts}}】</text>{{sd.title}}
					</view>
				</view>
				<view class='ov tr fz26 z9'>
					已售
					<text class='red'>{{sd.sale}}</text>份

					<view class="DSf_dsf_drrt mt10" v-if="sd.dele_d" @click.stop="delect(sd,idx)">
						<image src='../../static/img/lajixiang.png' class='lajixiang'></image>
					</view>

				</view>

				<view class='qc'></view>
			</navigator>


			<view v-if="isgeng_d&&resource_list_leg>=10" class="pt20 pm20 btm cen fz26">
				没有更多数据了...
			</view>

			<view v-if="!isgeng_d&&resource_list_leg>=10" class="pt20 pm20 btm cen fz26">
				加载中...
			</view>
			<kongbai v-if="isgeng_d&&resource_list_leg<10"></kongbai>

		</view>







		<view v-if="is_mm==1">



			<navigator class='sd_drrttys pd bbm pt20 pm20' v-for="(item,idx) in x_get_order_list_d" :url="'/pages/xiangqing/xiangqing?id_r='+item.resource_id">
				<view class='dian dsf_jh_deert'>
					<view class="fz26 z9">
						{{item.timedf}}
					</view>
					<view class="fz26 z3 mt20">
						<text class='red' v-if="item.zhuangts">【{{item.zhuangts}}】</text> {{item.title}}
					</view>
				</view>
				<view class='ov tr fz26 z9'>

					<text class='red'>{{item.price}}元</text>


					<view class="DSf_dsf_drrt mt10" @click.stop="delect_er(item,idx)">
						<image src='../../static/img/lajixiang.png' class='lajixiang'></image>
					</view>

				</view>

				<view class='qc'></view>
			</navigator>

			<view v-if="isgeng_d_er&&x_get_order_list_d_leg>=10" class="pt20 pm20 btm cen fz26">
				没有更多数据了...
			</view>

			<view v-if="!isgeng_d_er&&x_get_order_list_d_leg>=10" class="pt20 pm20 btm cen fz26">
				加载中...
			</view>
			<kongbai v-if="!isgeng_d_er&&x_get_order_list_d_leg.length<10"></kongbai>




		</view>

	</view>
</template>
<script>
	import base from "../../common/base.js"
	export default {
		data() {
			return {
				is_mm: 0,
				pageNo: 1,
				pageNo_er: 1,
				isgeng_d: false, //没有更多数据了
				isgeng_d_er: false,
				resource_list: [],
				x_get_order_list_d: [],
				resource_list_leg: 0,
				x_get_order_list_d_leg: 0,
				is_msd: [{
					name: "我卖的料",
					cls: "act"
				}, {
					name: "我买的料",
					cls: ""
				}]
			}
		},
		components: {},
		methods: {
			sd_dff(sd, idx) {
				this.is_msd.map(a => {
					a.cls = ""
				})
				sd.cls = "act"

				this.is_mm = idx

				this.resource_list = []
				this.x_get_order_list_d = []
				this.pageNo = 1
				this.isgeng_d_er = 1
				this.isgeng_d = false
				this.isgeng_d_er = false
				if (idx == 0) {
					this.get_resource()
				} else if (idx == 1) {
					this.get_maier()
				}
			},
			get_resource() {
				let th = this
				base.ajax("a_get_resource_list", {
					pageNo: this.pageNo.toString()
				}, function(data) {
					if (data.data < 10) {
						th.isgeng_d = true
					}
					data.data.map(a => {
						if (a.is_expire == 2) {
							a.zhuangts = "已过期"
						}
						if (a.is_refund == 1) {
							a.zhuangts = "有退款"
						}
						if (a.is_refund == 2) {
							a.zhuangts = "已退款"
						}

						if (0 == a.sale || '2' == a.is_refund || ('2' == a.is_expire && '0' == a.is_refund) || a.valid_time > 6) {
							a.dele_d = true
						}


						a.timedf = base.time_er(a.create_time)
						th.resource_list.push(a)

					})
					th.resource_list_leg = th.resource_list.length

				})

			},

			get_maier() {
				let x_get_order_list = {},
					th = this
				x_get_order_list.pageNo = this.pageNo_er.toString()
				base.ajax("a_get_order_list", x_get_order_list, function(data) {
					data.data.map(a => {
						a.timedf = base.time_er(a.create_time)
						th.x_get_order_list_d.push(a)
					})
					th.x_get_order_list_d_leg = th.x_get_order_list_d.length
					if (data.data.length < 10) {
						th.isgeng_d_er = true
					}
				})

			},
			delect_er(sd, idx) { //我买的料删除
				var ssd_ceet = {},
					th = this
				ssd_ceet.id = sd.id.toString(),
					uni.showModal({
						title: '提示',
						content: '确定是否删除这条记录？',
						success: function(res) {
							if (res.confirm) {
								base.ajax("x_remove_order", ssd_ceet, function(data) {
									th.x_get_order_list_d.splice(idx, 1);
								})
							}
						}

					})
			},

			delect(sd, idx) {
				var ssd_ceet = {},
					th = this
				ssd_ceet.id = sd.id.toString()

				uni.showModal({
					title: '提示',
					content: '确定是否删除这条记录？',
					success: function(res) {
						if (res.confirm) {
							base.ajax("a_remove_resource", ssd_ceet, function(data) {
								th.resource_list.splice(idx, 1);
							})
						}
					}
				})
			}

		},
		mounted() {

		},
		onShow: function() {

			this.resource_list = []
			this.x_get_order_list_d = []
			this.pageNo = 1
			this.isgeng_d_er = 1
			this.isgeng_d = false
			this.isgeng_d_er = false
			this.get_resource()
		},

		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function() {
			if (this.is_mm == 0) {
				if (!this.isgeng_d) {
					++this.pageNo
					this.get_resource()
				}
			} else if (this.is_mm == 1) {
				if (!this.isgeng_d_er) {
					++this.pageNo_er
					this.get_maier()
				}
			}
		},

	}
</script>
<style scoped>
	.DSf_dsf_drrt {

		height: 55rpx;
	}


	.lajixiang {
		width: 36rpx;
		height: 36rpx;
		position: relative;
		top: 20rpx;
	}
</style>

<template>
	<view class='pl20'>
		<view class="dsf_jh_deert pr20 mt10 pr" v-for="sd in xz_dsf" @click='sd_ddfgs(sd)'>
			<icon type='success' class='sd_jh_deertt' v-if="sd.cls"></icon>
			<image :src="'../../static/img/'+sd.id+'.png'" class="w_derrrtyx"></image>
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				xz_dsf: [{
					id: 1,
					cls: "act",
					yanse: '#FE761E,#EC3004'
				}, {
					id: 2,
					cls: "",
					yanse: "#F13C06,#FFB669"
				}, {
					id: 3,
					cls: "",
					yanse: "#AB3482,#FCD8B7"
				}, {
					id: 4,
					cls: "",
					yanse: "#8763DA,#CFD5DF"
				}, {
					id: 5,
					cls: "",
					yanse: "#E14AAD,#30B0FE"
				}, {
					id: 6,
					cls: "",
					yanse: "#2D2F3C,#FF8041"
				}, {
					id: 7,
					cls: "",
					yanse: "#46B7B5,#D55326"
				}, {
					id: 8,
					cls: "",
					yanse: "#3DC7DA,#B2D501"
				}, {
					id: 9,
					cls: "",
					yanse: "#DE3319,#FD4626"
				}, {
					id: 10,
					cls: "",
					yanse: "#FE0000,#FB8B03"
				}]
			}
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			let id_s = options.id_s - 1
			this.xz_dsf.map(a => {
				a.cls = ""
			})
			this.xz_dsf[id_s].cls = "act"
		

		},

		components: {},
		methods: {
			sd_ddfgs(sd) {
				let idx = sd.id
				this.xz_dsf.map(a => {
					a.cls = ""
				})
				this.xz_dsf[idx - 1].cls = "act"

				uni.setStorageSync('id_s', idx)
				uni.setStorageSync('yanse', this.xz_dsf[idx - 1].yanse)
				uni.switchTab({
					url: '/pages/index/index?id_s=' + idx
				})
			},


		},
		mounted() {},
	}
</script>
<style scoped>
	.dsf_jh_deert {
		width: 50%;
		float: left
	}

	.w_derrrtyx {
		width: 100%;
		height: 340rpx;
	}

	.sd_jh_deertt {
		position: absolute;
		right: 30rpx;
		top: 10rpx;
	}
</style>

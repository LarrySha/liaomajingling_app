<template>
	<view>
		<liaomatou v-if="is_hide.is_hide==2"></liaomatou>




		<view class='fz32 z3 cen mt40  '>
			  {{sd.title}}
		</view>

		<view class='pd pt20 pm20 dfdsf_jh_drt'  v-for="(item,idx) in content_l">

			<view class='btm pt20 pm20'>
				<view class='fz26 z9'>
				     {{item.timedf}}
				</view>

		  <view class='fz30 z6 mt20'> 
      <text selectable='true' class='dsf_jh_deerty'>{{item.content}}</text>
	
 <image :src="sf_e" class='topi_sd mt40' mode="widthFix" v-for="(sf_e,idxe) in item.imgder"></image> 

    <!--  <image :src='sf' class='topi_sd mt20' mode="widthFix" v-for="sf in item.imgder"></image> -->

    </view>

			</view>



		</view>


		<view class='fz32 z6 cen mt40 pm40 btm pt20'>
			<view class="fz28 pm20 pt20">- 以上内容仅代表发布者个人意见，仅供浏览及参考 -</view>
			料码
			<view class=' fz26 mt20'>资源扫码工具，帮你提高效率</view>
		</view>



	</view>
</template>
<script>
	import base from "../../common/base.js"
	export default {
		data() {
			return {
				sd: "",
				is_hide:"",
				content_l: []
			}
		},
		onLoad: function(options) {

			var x_get_resource_detail = {},
				th = this,
				content_l = this.content_l
			x_get_resource_detail.id = options.id_r
			this.is_hide = JSON.parse(uni.getStorageSync("get_key"))

			base.ajax("a_get_resource_detail", x_get_resource_detail, function(data) {

				data.data.content_l.map(a => {
					a.timedf = base.time_er(a.create_time)
					a.imgder = []
					try {
						a.img.split(",").map(b => {
							if (b) {
								var sd_deret = uni.getStorageSync('img_url')
								sd_deret += b

								a.imgder.push(sd_deret)
							}
						})
					} catch (e) {

					}
					String.prototype.my_eer = function(f, e) {
						var reg = new RegExp(f, 'g')
						return this.replace(reg, e)
					}
					a.content = a.content.my_eer('&nbsp;', "")
					a.content = a.content.my_eer('<br/>', "\n")
					content_l.push(a)
				})

				th.sd = data.data.resource
				th.content_l = content_l

			})
		},

		components: {},
		methods: {},
		mounted() {},
		
	}
</script>
<style scoped>
	.dsf_sddf {
		width: 100%;
		height: 314rpx;
	}

	.topi_sd {
		width: 100%;
	}

	.dfdsf_jh_drt {
		min-height: 700rpx;
	}

	.dsf_jh_deerty {
		white-space: pre-line;
	}
</style>

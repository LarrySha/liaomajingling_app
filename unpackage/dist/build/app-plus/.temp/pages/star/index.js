require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([9],{55:function(n,t,e){"use strict";var i=o(e(3)),r=o(e(56));function o(n){return n&&n.__esModule?n:{default:n}}new i.default(r.default).$mount()},56:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(58),r=e.n(i),o=e(59);var s=function(n){e(57)},a=e(2)(r.a,o.a,s,null,null);t.default=a.exports},57:function(n,t){},58:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0});r(e(39));var i=r(e(5));function r(n){return n&&n.__esModule?n:{default:n}}t.default={data:function(){return{sd_ddfg:"",sd_ddfg_b:""}},components:{},onLoad:function(){n.getStorageSync("token")&&n.switchTab({url:"/pages/index/index"})},methods:{denglu:function(){var t=this;n.login({provider:"weixin",success:function(e){t.sd_ddfg=JSON.stringify(e),n.getUserInfo({provider:"weixin",success:function(e){t.sd_ddfg_b=JSON.stringify(e);var r={},o=e.userInfo;r.union_id=o.unionId,r.nick_name=o.nickName,r.sex=o.gender,r.country=o.country,r.province=o.province,r.city=o.city,r.head_img=o.avatarUrl,i.default.ajax("a_login",r,function(t){var e=t.data;n.setStorageSync("is_hide",e.is_hide),n.setStorageSync("x_login",JSON.stringify(e.userInfo)),n.setStorageSync("img_url",e.img_url),n.setStorageSync("img_url_qr",e.img_url_qr),n.setStorageSync("token",e.userInfo.a_token),n.switchTab({url:"/pages/index/index"})})}})},fail:function(t){n.showToast({title:JSON.stringify(t),icon:"none",duration:6e3})}})}},mounted:function(){}}}).call(t,e(8).default)},59:function(n,t,e){"use strict";var i={render:function(){var n=this.$createElement,t=this._self._c||n;return t("view",{staticClass:"content"},[t("navigator",{attrs:{eventid:"oBF-0"},on:{click:this.denglu}},[t("image",{staticClass:"dsfdfrtrty",attrs:{src:"../../static/img/qidongtu.jpg"}})])],1)},staticRenderFns:[]};t.a=i}},[55]);
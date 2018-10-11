var url_d = "https://lmjl.ttkgou.com/lmjl_core/app/"
// var url_d = "http://192.168.0.106:8080/lmjl_core/app/"
const key = CryptoJS.enc.Utf8.parse("7de8d8a807e217ce"); //十六位十六进制数作为密钥
import CryptoJS from "../crypto-js"
import md5 from "../common/md5.js"

function ajax(url, canshu, call) {

	let urlsd = url_d + url
	if (url != "a_get_key") {
		if (uni.getStorageSync('get_key')) {
			let get_key_e = JSON.parse(uni.getStorageSync('get_key'))
			let sd_jhsd = jiami_d(canshu, get_key_e.md5_key, get_key_e.aes_key)
			canshu = {}
			canshu.token = uni.getStorageSync('token') || '123'
			canshu.data = sd_jhsd
		} else {
			setTimeout(function() {
				uni.navigateTo({
					url: '/pages/star/index'
				});
			}, 100)
			return
		}
	}
	uni.showLoading({
		title: '处理中',
		mask: true
	});

	uni.request({
		url: urlsd,
		method: "POST",
		header: {
			"content-type": "application/x-www-form-urlencoded"
		},
		data: canshu,
		success: (res) => {
			uni.hideLoading();
			if (res.data.code == '0001') {
				uni.navigateTo({
					url: '/pages/star/index'
				});
				return
			}
			if (res.data.code == '0002') {
				uni.showToast({
					title: res.data.msg,
					icon: 'none',
					duration: 2000
				})
				return
			}
			call(res.data)
		}
	});


}

function jiami_d(date, md5_key, aes_key) {

	delete date.sign;
	var md5_dd = Object.keys(date).sort();
	let ss_dff_a = {}
	md5_dd.map(a => {
		ss_dff_a[a] = date[a]
	})


	let stringA = parseParam(ss_dff_a)

	let stringSignTemp = stringA + "&key=" + md5_key
	console.log(stringSignTemp)
	let sign = md5(stringSignTemp),
		aes_s = '',
		sd_cftyy = date
	sd_cftyy.sign = sign

	var ler_eer = Object.keys(date).sort();
	let ss_dff = {}
	ler_eer.map(a => {
		ss_dff[a] = date[a]
	})


	aes_s = JSON.stringify(ss_dff)


	return Encrypt(aes_s, aes_key)
}

// 对象转地址
function parseParam(data) {
	var _result = [];
	for (var key in data) {
		var value = data[key];
		if (value.constructor == Array) {
			value.forEach(function(_value) {
				_result.push(key + '="' + value + '"');
			});
		} else {
			_result.push(key + '=' + value + '');
		}
	}
	return _result.join('&');
};



const iv = CryptoJS.enc.Utf8.parse(''); //十六位十六进制数作为密钥偏移量

//解密方法
function Decrypt(word) {

	let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
	let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);

	let decrypt = CryptoJS.AES.decrypt(srcs, key, {
		iv: iv,
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);


	return decryptedStr.toString();
}

//加密方法
function Encrypt(word, key_e) {
	let srcs = CryptoJS.enc.Utf8.parse(word);
	if (!key_e) {
		key_e = key
	} else {
		key_e = CryptoJS.enc.Utf8.parse(key_e)
	}
	let encrypted = CryptoJS.AES.encrypt(srcs, key_e, {
		iv: iv,
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	return encrypted.ciphertext.toString().toUpperCase();
}

function time_er(val) {
	var crtTime = new Date(val);
	return dateFtt("yyyy-MM-dd hh:mm:ss", crtTime);
}


function dateFtt(fmt, date) { //author: meizz   
	var o = {
		"M+": date.getMonth() + 1, //月份   
		"d+": date.getDate(), //日   
		"h+": date.getHours(), //小时   
		"m+": date.getMinutes(), //分   
		"s+": date.getSeconds(), //秒   
		"q+": Math.floor((date.getMonth() + 3) / 3), //季度   
		"S": date.getMilliseconds() //毫秒   
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}




// 注销所有登录授权认证服务
function authLogout() {

	var auths = null;
	plus.oauth.getServices(function(services) {
		auths = services;
		for (var i in auths) {
			var s = auths[i];
			if (s.authResult) {
				console.log(JSON.stringify(s))
				s.logout(function(e) {
					uni.showToast({
						title:"注销登录认证成功！",
						icon: "none",
						duration: 6000
					});
					
				}, function(e) {
					uni.showToast({
						title:"注销登录认证失败！",
						icon: "none",
						duration: 6000
					});
				});
			}
		}
	}, function(e) {
		
	});




}



export default {
	Decrypt,
	Encrypt,
	ajax,
	parseParam,
	time_er,
	authLogout
}

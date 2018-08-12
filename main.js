// var btn = document.getElementById('btn')
// btn.addEventListener('click', ()=>{
// 	let request = new XMLHttpRequest()
// 	request.open('POST', '/xxx')
// 	request.onreadystatechange = ()=> {
// 		if (request.readyState === 4) {
// 			console.log('请求和响应都完毕了。')
// 			if (request.status >= 200 && request.status < 300) {
// 				console.log('请求成功')
// 			}
// 			else if (request.status >= 400) {
// 				console.log('请求失败')
// 			}
// 		}
// 	}
// 	request.send('u=jewel&p=261314')
// })

window.jQuery = function(nodeOrSeletor) {
	let nodes = {}
	nodes.addClass = function () {}
	nodes.html = function () {}
	return nodes
}

window.$ = window.jQuery

//  Promise 的实现
// window.Promise = function () {
// 	// ...
//     return {
//     	then: function() {}
//     }
// }

window.jQuery.ajax = function({url,method,body,headers}) {
	return new Promise( function (resolve, reject) {  // Promise 本身来说只是为了规定一种形式
		let request = new XMLHttpRequest()
		request.open(method, url)
		for (let key in headers) {
	        let value = headers[key]
	        request.setRequestHeader(key, value) 	
	    }
		request.onreadystatechange = ()=> {
			if (request.readyState === 4) {
				console.log('请求和响应都完毕了。')
				if (request.status >= 200 && request.status < 300) {
					resolve.call(undefined, request.responseText)  //传过去一个参数。
				}
				else if (request.status >= 400) {
					reject.call(undefined, request)
				}
			}
		}
		request.send(body)
	} )
}

function f1(responseText){}
function f2(responseText){}


var btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
	let promise = window.jQuery.ajax({
		url:'/jewel',
		method:'POST',
		headers:{
			'content-type':'application/x-www-form-urlencoded',
			'jewel':'25'
		}
	})

	promise.then(
        (x)=>{console.log(x);console.log('成功')},
        (y)=>{console.log(y);console.log('失败')}
	)
})

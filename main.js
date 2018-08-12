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

window.jQuery.ajax = function(url,method,body,success,fail) {
    let request = new XMLHttpRequest()
	request.open(method, url)
	request.onreadystatechange = ()=> {
		if (request.readyState === 4) {
			console.log('请求和响应都完毕了。')
			if (request.status >= 200 && request.status < 300) {
				success.call(undefined, request.responseText)
			}
			else if (request.status >= 400) {
				fail.call(undefined, request)
			}
		}
	}
	request.send(body)
}



var btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
	$.ajax(
		'/xxx',
		'POST',
		'u=jewel&p=261314',
		(x) => { console.log(x);console.log('成功') },
		(y) => { console.log(y);console.log('失败') }
		)
})

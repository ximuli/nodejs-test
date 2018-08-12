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

window.jQuery.ajax = function(options) {
	//接收一个对象，这样优化过后，即便对象的某一项没有添加，我们也无需担心。
    let url = options.url
    let method = options.method
    let body = options.body
    let success = options.success
    let fail = options.fail

    let request = new XMLHttpRequest()
	request.open(method, url)
	request.onreadystatechange = ()=> {
		if (request.readyState === 4) {
			console.log('请求和响应都完毕了。')
			if (request.status >= 200 && request.status < 300) {
				success.call(undefined, request.responseText)  //传过去一个参数。
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
	$.ajax({
		url:'/xxx',
		method:'POST',
		//请问：这里的 x 是什么呢？ 对的，就是 request.responseText；这是我们封装 ajax 的时候传过来的一个参数
		success:(x) => { console.log(x);console.log('成功') },
		fail:(y) => { console.log(y);console.log('失败') }
	})
})

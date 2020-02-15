//Promise的含义
//Promise是一个解决同异步的方法
//对象的状态不受外界影响，有三种状态Pending（进行中）、Resolved（已完成，又称Fulfilled）和Rejected（已失败）
//一旦状态改变，就不会再变
//promise简单来说就是用来进行处理页面的各种同异步操作，让异步操作更加有条不紊，方便我们进行管理代码
//Promise的基本用法
//正常写法
// var promise=new Promise(function(resolve,reject){
//   //....进行异步操作

//   //判断是否成功

//   //成功用resolve（）进行绑定
//   //不成功用reject（）进行绑定
// })
// //进行调用
// promise
// .then(res=>{

// })//用then来进行捕捉异步操作成功的数据
// // .then方法：是定义在原型对象Promise.prototype上的，作用是获取函数回调状态的函数可以进行多个调用
// .catch(err=>{

// })//用catch来进行捕捉异步操作失败的数据
// .catch方法：他会自动进行捕获函数发生错误的时候产生的数据等等，然后在进行调用的的时候进行输出
// //向外部导出并且引用的写法
// export function promise(url, action = {}) {//Promise是一个构造函数
//   return new Promise((resolve, reject) => {
//     axios({
//       method: 'POST',
//       url,
//       data: action,
//     })
//       .then(res => resolve(res))
//       .catch(err => reject(err))
//   })
// }
// Promise.all()
// 将多个peomise实例包装成为一个新的promise实例
// 例如：var p=Promise.all([p1,p2,p3])
// 按照顺序挨个执行，只有p1,2,3全部状态为fulfilled时候p的状态才会是fulfilled
// 只要有一个为rejected的p的状态就会成为rejected


// Promise.resolve将现有的对象转换为Promise对象
// Promise.resolve('foo')==new Promise(resolve => resolve('foo'))这两种写法是相互等价的
// Promise.resolve方法的参数分成四种情况
//参数为一个Promise不做任何修改，原封不动进行返回
//参数为一个then方法的对象，promise.resolve会自动进行执行then方法
//参数不是对象，直接输出对应绑定的值
//参数为空，那就是个空的peomise对象

// Promise.reject()
//用法和Promise.resolve相完全一致，不过它返回的实例状态为rejected

//用法
// let path = "./2.jpg"//正确的图片路径为./1.jpg，现在的路径是错误的
// const preloadImage = function (path) {
//   return new Promise(function (resolve, reject) {
//     var image = new Image()//创建一个Image对象定义Image对象的 src:a.src="xxx.gif" 这样做就相当于给浏览器缓存了一张图片
//     console.log(image)
//     image.onload = resolve//绑定成功状态
//     image.onerror = reject//绑定失败状态
//     image.src = path//进行路径src赋值
//   })
// }
// preloadImage(path)//执行这个函数
//     //当路径为错误的时候会进行捕捉错误状态，当路径为正确的时候没有报错反应
//     // console.log(preloadImage())

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
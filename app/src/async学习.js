//async函数

//作用：处理异步操作属于ES7的方法

//async异步，await等待

//将一个函数变为异步操作不会影响下面的函数执行

//async函数返回一个Promise对象

// async function f() {
//   return 'hello world';
// }

// f().then(v => console.log(v))

//输出为 "hello world"

//await可以书写多个而且会按照顺序执行

//多个await可以使用try...catch

// async function main() {
//   try {
//     var val1 = await firstStep();
//     var val2 = await secondStep(val1);
//     var val3 = await thirdStep(val1, val2);

//     console.log('Final: ', val3);
//   }
//   catch (err) {
//     console.error(err);
//   }
// }

// async function f() {
//   throw new Error('出错了');
// }

//可以将错误捕捉到因为async函数本来就是返回一个peomise函数

//所以说我们可以用.then()还有.catch()进行捕捉出现的返回值还有错误

//举个例子

// async function asyncFn() {

//   console.log(1);

//   const result = await/null new Promise((resolve, reject) => {

//     setTimeout(() => {

//       console.log(2);

//       resolve('resolve');

//     }, 1000);

//   });

//   console.log(result);

//   console.log(3);

// }
// asyncFn()//进行调用asyncFn函数

//首先我们给promise异步操作不添加await返回的输出为

//1,Promise,3然后间隔两秒输出2

//然后我们加上await

//我们会按照顺序进行输出1然后间隔两秒输出2，reslove,3

//就相当于是将异步操作提高了一个优先级，在遇到异步操作的时候我们按顺序进行执行

//以往执行异步操作的时候会选择性执行那些不是异步的操作，

//用async还有await之后我们对异步操作的优先级永远是遇到异步执行异步，异步执行完毕才会及逆行执行异步操作之后的各种操作

//实例：按顺序完成异步操作
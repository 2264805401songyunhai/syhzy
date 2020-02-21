import React, { Component } from 'react'
import LzEditor from "react-lz-editor"
export default class componentName extends Component {
  componentDidMount() {
    //函数的拓展

    //1：函数参数的默认值
    // function a(x="asd"){
    //   console.log(x)
    // }
    // a()//输出为asd
    //当调用函数没有传参或者说传参为undefined时候就会调用默认的参数也就是函数a里面的asd
    // function a(x){
    //   // let a="sss"//这样是错误的，传参x在函数a中是默认生声明的，不可在函数内部再次使用let或者是const再次声明
    // }
    // function a(x,x){}//函数内的参数两个x是不可以的，参数不可重复
    //还可以与解构赋值进行相互结合使用
    // function a({x,y=5}){
    //   console.log(x, y)
    // }
    // a({})//输出undefined 5
    // a({x:1})//输出1 5
    // a({x:1,y:2})//输出1 2
    // function a({x,y=5}={}){
    //   console.log(x,y)
    // }
    // a()//输出undefined 5 意思就是没有传参的时候默认参数值为一个空对象
    // 函数参数的位置应该是尾参数
    // 函数的length属性
    //函数的拓展 基本用法

    //参数默认值
    // function log(x, y) {
    //   y = y || 'World';
    //   console.log(x, y);
    // }
    // log('Hello') // Hello World
    // log('Hello', 'China') // Hello China
    // log('Hello', '') // Hello World
    //为了避免这个问题，通常需要先判断一下参数y是否被赋值，如果没有，再等于默认值
    // if (typeof y === 'undefined') {
    //   y = 'World';
    // }
    //ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面
    // function log(x, y = 'World') {
    //   console.log(x, y);
    // }
    // log('Hello') // Hello World
    // log('Hello', 'China') // Hello China
    // log('Hello', '') // Hello

    // function Point(x = 0, y = 0) {
    //   this.x = x;
    //   this.y = y;
    // }
    // const p = new Point();
    // console.log(p) {x: 0, y: 0}
    //参数变量是默认声明的，所以不能用let或const再次声明
    // function foo(x = 5) {
    //   let x = 1; // error
    //   const x = 2; // error
    // }
    //上面代码中，参数变量x是默认声明的，在函数体中，不能用let或const再次声明，否则会报错

    // function foo(x, x, y) {
    //   console.log(x,y)
    // }
    // foo(2,1,4)
    // 报错
    // function foo(x, x, y = 1) {
    //   // ...
    // }

    //另外，一个容易忽略的地方是，参数默认值不是传值的，
    //而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的
    // let x = 99;
    // function foo(p = x + 1) {
    //   console.log(p);
    // }
    // foo() // 100
    // x = 100;
    // foo() // 101

    // function foo({x, y = 5}) {
    //   console.log(x, y);
    // }

    // foo({}) // undefined 5
    // foo({x: 1}) // 1 5
    // foo({x: 1, y: 2}) // 1 2
    // foo() // TypeError: Cannot read property 'x' of undefined

    // function foo({x, y = 5} = {}) {
    //   console.log(x, y);
    // }
    // foo() // undefined 5
    //上面代码指定，如果没有提供参数，函数foo的参数默认为一个空对象
    // function m1({x = 0, y = 0} = {}) {
    //   return [x, y];
    // }
    // // 写法二
    // function m2({x, y} = { x: 0, y: 0 }) {
    //   return [x, y];
    // }
    // console.log(m1())
    // function foo(x = x) {
    // }
    // foo() // ReferenceError: x is not defined
    //rest 参数
    // function add(...values) {
    //   let sum = 0;
    //   console.log(values)
    //   for (var val of values) {
    //     sum += val;
    //   }
    //   return sum;
    // }
    // add(2, 5, 3) // 10
    //上面代码的add函数是一个求和函数，利用 rest 参数，
    //可以向该函数传入任意数目的参数
    // function push(array, ...items) {
    //   console.log(array)
    // items.forEach(function(item) {
    //   array.push(item);
    //   console.log(item);
    // });
    // }
    // var a = [456];
    // push(a, 1, 2, 3)
    //注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错
    // function f(a, ...b, c) {
    //   // ...
    // }
    //函数的length属性，不包括 rest 参数。
    //严格模式
    //箭头函数
    // ES6 允许使用“箭头”（=>）定义函数。
    // var f = v => v;
    // // 等同于
    // var f = function (v) {
    //   return v;
    // };
    //如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分
    // var f = () => 5;
    // // 等同于
    // var f = function () { return 5 };
    // var sum = (num1, num2) => num1 + num2;
    // // 等同于
    // var sum = function(num1, num2) {
    //   return num1 + num2;
    // };
    // var sum = (num1, num2) => { return num1 + num2; }
    //如果箭头函数的代码块部分多于一条语句，
    //就要使用大括号将它们括起来，并且使用return语句返回
    //由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错
    // let getTempItem = id => { id: id, name: "Temp" };
    // let getTempItem = id => ({ id: id, name: "Temp" });
    //下面是一种特殊情况，虽然可以运行，但会得到错误的结果。
    // let foo = () => { a: 1 };
    //如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了
    //let fn = () => void doesNotReturn();
    // 箭头函数可以与变量解构结合使用
    // const full = ({ first, last }) => first + ' ' + last;
    // // 等同于
    // function full(person) {
    //   return person.first + ' ' + person.last;
    // }
    //箭头函数使得表达更加简洁。
    // const isEven = n => n % 2 === 0;
    // const square = n => n * n;
    // // 正常函数写法
    // [1,2,3].map(function (x) {
    //   return x * x;
    // });
    // // 箭头函数写法
    // [1,2,3].map(x => x * x);
    // 1. 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
    // 2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
    // 3. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替
    // 4. 不可以使用yield命令，因此箭头函数不能用作 Generator 函数
    //参数函数尾逗号
    //在世用逗号的时候得规律保持一致否则就会报错
    // function a(
    //   param1,
    //   param2
    // ) {}
    // a(
    //   'foo',
    //   'bar'
    // )
    // //这样就会输出报错
    // function a(
    //   param1,
    //   param2
    // ) {}
    // a(
    //   'foo',
    //   'bar',
    // )
    // //这样就不会
  }
  state = {
    rawContent: "宋云海"
  }
  receiveRaw = (e) => {
    console.log(e)
  }
  render() {
    return (
      <>
        <LzEditor
          active={true}
          importContent={this.state.rawContent}
          cbReceiver={this.receiveRaw}
          uploadConfig={null}
          image={false}
          video={false}
          audio={false}
        />
      </>
    )
  }
}

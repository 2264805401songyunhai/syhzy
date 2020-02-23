import React, { Component } from 'react'

export default class componentName extends Component {
  componentDidMount() {
    //编程风格

    // 1：块级作用域
    // let声明变量取代var
    // console.log(a)//输出undefined，var存在一个变量声明提升
    // var a=1
    // console.log(b)//输出报错
    // function d(){
    //   let b=2
    //   console.log(b)//输出2
    //   console.log(a)//输出1
    // }
    // console.log(b)//输出报错
    // console.log(a)//输出1

    //字符串
    // 静态字符串一般使用单引号或者是反引号，不适用双引号

    //解构赋值
    // 使用数组成员对变量进行赋值，有限使用解构赋值
    // const arr = [1, 2, 3, 4]
    // const [a,b] = arr
    // //参数与过失独享成员，优先使用解构赋值
    // function a(b){
    //   const {c,d}=b
    // }

    //对象
    //单行定义的对象最好是不用逗号结尾，多行定义的定义的时候最后一个成员最好以逗号结尾
    // const a={b:b1,c:b2}
    // const b={
    //   a:1,
    //   b:2,
    // }

    //对象尽量静态化，一旦定义就不能随意添加新的属性，如果添加属性不可避免，要进行使用Object.assgin
    // const a={}
    // Object.assign(a,{x:3})

    //数组
    //使用拓展运算符(...)进行拷贝数组
    // let arr1=[1,2,3]
    // const arr=[...arr1]
    // console.log(arr)//输出为[1,2,3]

    // 使用Arry.from()的方法将类数组转换为数组
    // const div = document.querySelectorAll('.div')
    // const arr = Array.from(div)

    //函数
    //立即执行的函数可以写成箭头函数的形式
    //在使用匿名函数当参数的场合,尽量使用箭头函数代替
    // [1,2,3].map((v)=>{
    // console.log(v)
    // })

    //Map结构
    // 注意区分 Object 和 Map，只有模拟现实世界的实体对象时，才使用 Object。如果只是需要key: value的数据结构，使用 Map 结构。因为 Map 有内建的遍历机制

    // let map = new Map(arr)

    // for (let key of map.keys()) {
    //   console.log(key)
    // }

    // for (let value of map.values()) {
    //   console.log(value)
    // }

    // for (let item of map.entries()) {
    //   console.log(item[0],item[1])
    // }

    // Class
    //总是用class,取代需要prototype的操作,用class写法更加简单

    // class Queue {
    //   constructor(contents = []) {
    //     this._queue = [...contents];
    //   }
    //   pop() {
    //     const value = this._queue[0];
    //     this._queue.splice(0, 1);
    //     return value;
    //   }
    // }

    // 模块
    // import { a, b } from 'XXX'
    //写法更加简洁
    // 使用export进行取代module.exports

    // ESLint
    // ESLint 是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。
    // 安装 npm i -g eslint
    // npm i - g eslint - config - airbnb
    // npm i - g eslint - plugin -import eslint-plugin - jsx - a11y eslint - plugin - react
    //在项目中创建一个.eslintre文件,然后进行配置ESLint
    // {
    //   "extends": "eslint-config-airbnb"
    // }
    
  }
  render() {
    return (
      <>

      </>
    )
  }
}

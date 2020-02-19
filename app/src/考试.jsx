import React, { Component } from 'react'
import "./App.css"
import axios from "axios"
export default class componentName extends Component {
  componentDidMount() {
    // 第二题
    // let a = {}
    // console.log(Object.prototype.toString.call(a))//不能用typeof因为typeof不能区分出来引用数据类型

    //第四题
    // css动画效果
    // transform属性允许我们对元素继续宁旋转，缩放移动什么的
    // 属性
    // none//什么都没有
    //translate(x,y)(最常用的其中x表示目标元素距离左边距离，y表示目标距离上方距离)
    //translate3d(x,y,z)//定义一个3D的转换，旋转什么的
    //rotate(x)定义一个2D的旋转，x表示旋转的角度
    //transform是一个复合属性可以添加多个属性还有值共同触发
    // transition
    // transition是设置一个过度属性
    //有四个
    //transition: a b c d;
    //a可以是设置过度属性的那个属性名称，也就是class名称，
    // b可以设置一下你完成这个效果需要多少时间，
    // c可以设置完成折腾个效果的一个效果曲线
    //属性值：
    // ease	规定慢速开始，然后变快，然后慢速结束的过渡效果
    // ease -in 规定以慢速开始的过渡效果
    // ease - out	规定以慢速结束的过渡效果
    // ease -in -out	规定以慢速开始和结束的过渡效果
    //d是设置你这个效果什么时候开始
    // @keyframes这是一个在css中设置的选择器就像一个任务一样，谁调用就可以执行这个任务
    //例如：
    // @keyframes div {//这个里面可以写很多百分比的对象相当于一段时间的每个部分，然后里面写上这段时间我想让他干什么
    //   0% {
    //     transform: translate(0);
    //   }
    //   100% {
    //     transform: translate(200px, 0);
    //   }
    // }
    //animation//这个属性和transition类似里面的东西都可以调用，但是这个可以进行调用你的@keyframes选择器去执行这个里面的动画

    //第五题
    // var name="小花"
    // const obj={
    //     name:"小白",
    //     fn(){
    //       console.log(this.name)
    //     }      
    // }
    // obj.fn()//输出小白，因为调用的是obj，obj里面有一个name就是小白
    // const fn2=obj.fn
    // fn2()//输出小花，因为fn2只是一个函数这个函数就是输出this.name，fn2的this就是window，window里面只有一个name就是小花
    // obj.fn.call({name:"小红"})//拿着obj里面的fn方法来括号里面的对象执行，指向肯定就是小红了
    // var name="小花"
    // const obj={
    //     name:"小白",
    //     fn:()=>{
    //       console.log(this.name)
    //     }      
    // }
    // obj.fn()
    // const fn2=obj.fn
    // fn2()
    // obj.fn.call({name:"小红"})
    //输出的都为报错，因为用的是箭头函数，里面的this.name也没有进行调用，this的指向是window所以其中的this.name都是undefined找不到name所以我们这里面的所有输出都是在window中继续宁输出调用的，所以都是报错

    // 第六题
    // var a = function (ms) {
    //   return new Promise((reslove, reject) => {
    //     setTimeout(reslove, 3000, ms)
    //   })
    // }
    // a(1).then(res => {//调用第一次进行绑定1的时候就是3秒钟之后进行resolve（1）所以输出的时候只有三秒钟之后有值
    //   console.log(res)
    //   a(2).then(res => {
    //     console.log(res)
    //   })
    // })
    //老师写法
    // new Promise(resolve => {
    //   setTimeout(() => resolve(1), 3000)
    // })
    //   .then(res => {
    //     console.log(1)
    //     return new Promise(resolve => {
    //       setTimeout(() => resolve(2), 3000)
    //     })
    //       .then(res => {
    //         console.log(res)
    //       })
    //   })

    //第七题
    // const get = function (add) {//声明一个函数里面去请求接口
    //   return new Promise((reslove, reject) => {
    //     axios({
    //       method: "get",
    //       url: "https://blogs.zdldove.top/Home/Apis/listWithPage"
    //     })

    //       .then(res => {
    //         console.log(add)
    //         reslove(res)
    //       })
    //       .catch(err => {
    //         reject(err)
    //       })
    //   })
    // }
    // async function a() {
    //   const a1 = await get("1")//运用await进行依次进行执行调用
    //   const a2 = await get("2")
    //   console.log(a1,a2)
    // }
    // a()

    // 第八题
    // const get = function (){
    //   return new Promise((reslove, reject) => {
    //     axios({
    //       method: "get",
    //       url: "https://blogs.zdldove.top/Home/Apis/listWithPage"
    //     })
    //       .then(res => {
    //         reslove(res)
    //       })
    //       .catch(err => {
    //         reject(err)
    //       })
    //   })
    // }
    // Promise.all([get(),get()]).then(function(value){//运用Promise.all进行同时执行两次请求接口，所有请求都成功才会及进行输出
    //   console.log(value)
    // })

    //二十三题
    //定位除了absoult,fiexd,relative,static以外还有一个粘性定位
    //sticky
    //例子：{
    //   position: sticky;
    //   top: 0;//不仅只有top还有left,right,bottom一旦你的这个盒子的位置到达的你属性所规定的像素，就是粘合到对应的位置
    // }

  }
  render() {
    return (
      <div>
        <div className="a1">点击我进行滚动</div>
        <div className="a2">直接执行</div>
      </div>
    )
  }
}

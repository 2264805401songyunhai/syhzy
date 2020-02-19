import React, { Component } from 'react'

export default class componentName extends Component {
  componentDidMount() {
    //对象的拓展

    // 属性的简洁表示法
    //允许直接写入变量还有函数，作为对象的属性方法，书写起来更加简洁
    // let a="宋云海"
    // let b={a}
    // console.log(b)//输出为{a:"宋云海"}
    //所以说正常的写法和这种写法是等价的
    // b={a:"a"}等价于b={a}
    //对象也是可以的
    // function a(x,y)
    // {
    //   console.log({x,y})
    // }
    // a("宋云海","王潇瑜")//输出{x:"宋云海",y:"王潇瑜"}
    // 这种写法等价于
    // function a(x,y)
    // {
    //   console.log({x:x,y:y})
    // }
    //方法简写
    // var a={
    //   b(){
    //     return "1111"
    //   }
    // }
    // console.log(a.b())//111
    // // 等价于
    // var a={
    //   b:function(){
    //     return "1111"
    //   }
    // }
    //实际运用
    // var b = '王潇瑜';
    // var a = {
    //   name: "宋云海",
    //   b,//b:b
    //   c () {//b:function()
    //     console.log('我的名字是',this.name) 
    //   }
    // }
    // console.log(a)
    // a.c()
    //在书写函数返回值将会非常的方便
    // function a(){
    //   let a="宋云海"
    //   let b="王潇瑜"
    //   let c="郝云龙"
    //   return {a,b,c}
    // }
    // let c=a()
    // console.log(c)//输出{a:"宋云海",b:"王潇瑜",c:"郝云龙"}


    //属性名称表达式
    // 定义对象的属性
    // let a={}
    // a.name="宋云海"
    // a["age"]="20"
    // console.log(a)
    //这两种方法都可以进行给对象添加属性还有属性值
    // 在对象中进行创建属性属性值
    // let name="宋云海"
    // let age="20"
    // let a={
    //   [name]:name,//这样也可以进行创建一个动态的属性名称
    // }
    // a[age]=age//这样也可以进行动态进行创建一个属性
    // console.log(a)
    // 在对象中的[]是一种动态获取值的方法只要是在[]中的值都会当作一个变量进行读取
    // 但是不能这样运用，例如
    // let a="11"
    // let b={[a]}//这个是不同于{a}的因为中括号中的这个a是一个变量
    //中括号里面不能放对象,否则就会成为[object object]这个样子

    //对象的拓展运算符

    // 1:对象的解构赋值
    // let a={
    //   name:"宋云海",
    //   age:"20",
    //   add:"+++",
    //   jian:"---"
    // }
    // let { name , age , ...otto } = a
    // console.log(name,age,otto)//输出宋云海 20 {add:"+++",jian:"---"}
    //可以通过大括号的形式来获取到一个对象中对应属性的值这样的写法简简洁,其中的...otto表示将一个未读取的值一起拷贝到otto上这样的写法需要在最后,否则会报错
    //如果说a不是对象是undefin或者null就会报错,因为这样无法进行转换对象进行结构
    //这样的...的拷贝是一个浅拷贝
    // let a = { a: 1 }
    // let b = { b: 2 }
    // b.__proto__ = a
    // let c = { ...b }
    //其中c是一个b的浅拷贝,但是无法去继承b的_proto_原型,指挥进行浅拷贝对应对象的属性还有值
    // let o=Object.create({x:1,y:2})
    // o.z=3
    // console.log(o)//这其中的x还有y都是放在了o对象的原型上的z还是正常的o对象的属性
    // let {x,z,...y}=o
    // console.log(x,z,y)//结构中进行拷贝也是不行的获取不到原型
    // let a={
    //   name:"name",
    //   age:"age",
    //   sex:"sex"
    // }
    // function two({ sex }) {
    //   console.log(sex)
    // }
    // function one({ name, age, ...sexx }) {
    //   // 使用x和y参数进行操作
    //   // 其余参数传给原始函数
    //   console.log(sexx)
    //   return two(sexx);
    // }
    // one(a)
    //原始函数one接受bane还有age作为参数，然后把其他的参数进行传给函数two,函数two可以继续进行结构选取所需要的属性值
    
    //2:拓展运算符
    //拓展运算符...用来取出参数对象进行拷贝到当前对象之中
    //...可以用来合并对象
    // let a={name:"name"}
    // let b={age:"age"}
    // let c={...a,...b}
    // console.log(c)//c就是对象a还有b的总集合体
    // let d=Object.assign(a,b)//...和Object.assign()方法是等价的
    // console.log(d)
    // c={...c,...{name:"宋云海"}}
    // d=Object.assign(d,{name:"王萧洒"})//这两种方法是等价的,都可以进行保留原来的属性,只更改对应要更改的属性还有值
    // //在Object.assign()中或者是使用...的时候参数为undefined和null,这两个值会被忽略,不会报错
  }
  render() {
    return (
      <>
        ssssss
      </>
    )
  }
}

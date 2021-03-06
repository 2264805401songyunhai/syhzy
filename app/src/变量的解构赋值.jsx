import React, { Component } from 'react'

export default class componentName extends Component {
  componentDidMount() {
    //变量的解构赋值

    // 1：数组的解构赋值
    // 可以对应位置进行结构赋值
    // let [a,b,c]=[2,3,4]
    // console.log(a,b,c)//输出234对应数组对额每个位置
    // let [a,[b,c]]=[2,[3,4]]
    // a:2
    // b:3
    // c:4
    // let [ , , b]=[2,3,4]
    // c:4

    // 在解构赋值不成功的时候变量就成为了undefined
    // let [a]=[]
    // a:undefined

    //解构赋值的时候我们又是会进行不完全解构赋值
    // let [a,b]=[2,3,5]
    // a:2
    // b:3
    // 也是可以成功的

    // 在解构赋值的时候如果等于号右边不是数组
    // 会报错

    //解构赋值的时候可以进行设置默认值
    // let [a="asd"]=[]
    // //a输出asd,,因为等号右面没有成功进行解构赋值结果为undefined

    //对象的解构赋值
    // let {a,b}={a:"宋云海",b:"阿松大"}
    // console.log(a,b)//输出宋云海,阿松大,跟数组方法类似

    //如果说结构的变量名字在对象中没有就会成为undefined
    // let {a}={b:"那么"}
    // console.log(a)//输出undefined

    //跟数组一样我们也可以进行嵌套结构的对象
    // let obj = {
    //   p: [
    //     'Hello',
    //     { y: 'World' }
    //   ]
    // }
    // let { p: [x, { y }] } = obj
    // x // "Hello"
    // y // "World"

    //对象的解构赋值的默认值

    // let {a="333"}={}
    //在我们继续宁解构赋值的时候没有拿到我们需要的值,为undefined时候才行,我们就会自动进行调用我们所写的默认值

    // 字符串的解构赋值
    // 这个时候我们的字符串变成了一个类数组的对象
    // let [a,b,c]="hhh"
    // console.log(a,b,c)//输出h,h,h
    //每个类数组对象都会有一个长度属性我们可以进行解构赋值拿到
    // let {length:a}="hello"
    // console.log(a)//输出5

    //数值还有布尔值的解构赋值
    // let {toString:s}=123
    // s===Number.prototype.toString
    // let {toString:s}=true
    // s===Boolean.prototype.toString 
    //都能进行对应的调用toString属性进行吧不是对莹形式的数变成所需要的形式

    //函数参数的解构赋值
    // function a([x,y]){
    //   return x+y
    // }
    // a([1, 2]) // 3
    // 函数a的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y

    // [[1, 2], [3, 4]].map(([a,b])=>a+b)
    // [3,7]
    //在函数的解构赋值中也可以进行是哟个默认值
    //在解构赋值的时候取值为undefined的时候我们就会自行进行调用默认值

    //圆括号的问题
    // 解构赋值虽然很方便，但是解析起来并不容易。对于编译器来说
    // 一个式子到底是模式，还是表达式，没有办法从一开始就知道，必须解析到（或解析不到）等号才能知道。
    // 由此带来的问题是，如果模式中出现圆括号怎么处理。ES6 的规则是，只要有可能导致解构的歧义，就不得使用圆括号。
    // 但是，这条规则实际上不那么容易辨别，处理起来相当麻烦。因此，建议只要有可能，就不要在模式中放置圆括号。

    //有三种情况不能使用圆括号
    //1:变量进行声明语句
    // let [(a)]=[1]//报错
    // let {a:(b)}={}
    // let ({a:b})={}
    // let {(a:b)}={}
    // let {(a):b}={}
    //上边输出都为报错
    //用变量进行声明语句的不能使用圆括号

    //2:函数参数,函数参数也属于变量声明,所以也不能使用圆括号
    // function f([(z)]){
    //   return 1
    // }//输出报错

    //3:赋值语句的模式
    // ({a:b})={a:42}//输出报错
    //代码将整个模式放在了圆括号中间,导致报错

    // [(b)] = [3]; // 正确
    // ({ p: (d) } = {}); // 正确
    // [(parseInt.prop)] = [3]; // 正确
    //首先都是赋值语句,而不是声明语句,其次圆括号不属于模式的一部分

    //用途
    // 1:交换变量的值
    // let x=1
    // let y=55
    // [x,y]=[y,x]
    // x:55
    // y:1

    // 2:冲函数中返回多个值
    // function a(){
      // return [1,2,3]
    // }
    // let [a,b,c]=a()//接受返回值的时候进行结构选取想获取的值
  
    // 3:参数函数的定义
    // function a([c,b,d]){}
    // a([1,2,3])

    // 4:提取JSON数据
    // let json = {
    //   name:"宋云海",
    //   age:"20",
    //   ddd:222
    // }
    // let { name, age, ddd} = json
 
    // 5:函数参数默认值
    //6:遍历Map结构
    // 7：输入模块的指定方法
  }
  render() {
    return (
      <>
        ssss
      </>
    )
  }
}

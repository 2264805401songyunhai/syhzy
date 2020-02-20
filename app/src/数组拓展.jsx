import React, { Component } from 'react'

export default class componentName extends Component {
  componentDidMount() {

    //数组的拓展

    //拓展运算符...

    //...的作用就是将一个数组转化为用逗号分隔的参数序列
    // console.log(...[1,2,3])//输出1，2，3
    //...的作用在函数中主要用作调用
    // function a(x,y) {
    //   return x + y
    // }
    // const arr = [4, 38]
    // a(...arr) // 输出为42
    // const arr1=[1]
    // a(2,...arr1)//输出结果为3，它也可以在函数调用的时候瑜正常数做一个混合使用 
    // [...[],1]//比如这样，...后面是一个空数组，则不会产生任何效果
    //注意：只有当调用函数的时候才可以进行书写拓展运算符，否则会报错

    //实际应用
    //1：复制数组
    // let a=[1,2,3]
    // let b=a.concat()
    // b=[1,2,3]//这是数组的一个拷贝
    //运用拓展运算符也可以
    // let a=[1,2,3]
    // let b=[...a]
    // b=[1,2,3]//这是也是数组的一个拷贝

    //2：合并数组
    // let a=[1,2,3]
    // let b=[4,5,6]
    // let c=a.concat(b)
    // console.log(c)//合并了a,b两个数组
    // //拓展运算符也可以
    // let d=[...a,...b]
    // console.log(d)

    // //3:与解构赋值的结合
    // let a=[1,2,3,4]
    // const [one,...two]=a
    // console.log(one,two)//one就是1，two就是剩下的所有，跟对象的解构赋值一样，这样...的运用只能放在最后，否则会报错

    //4:字符串
    //可以将字符串转换为真正的数组
    // let arr=[..."hello"]
    // console.log(arr)//输出[h,e,l,l,o]
    // 运用
    // function length(str){//可以封装一个函数运用通过...拓展运算符来进行计算字符串的长度
    //   return [...str].length
    // }
    // let arr="sdasrgsdjkk"
    // let sum=length(arr)
    // console.log(sum)//输出arr字符串的长度

    // //5：实现了 Iterator 接口的对象
    // //任何定义了遍历器接口的对象都可以用扩展运算符转为真正的数组
    // let arrayLike = {
    //   '0': 'a',
    //   '1': 'b',
    //   '2': 'c',
    //   length: 3
    // }
    // let arr = [...arrayLike]
    // console.log(arr)

    //6:Map 和 Set 结构，Generator 函数
    //例如：
    // let map = new Map([
    //   [1, 'one'],
    //   [2, 'two'],
    //   [3, 'three'],
    // ]);

    // let arr = [...map.keys()]; // 输出[1, 2, 3]

    //数组的find()还有findIndex()
    //find()//作用是找出数组中第一个符合条件的数然后进行返回，如果没有返回undefined
    // let arr=[1,2,3,8]
    // let a=arr.find((v)=>v>5)
    // console.log(a)//输出为8

    //finedIndex()//作用就是查找符合条件的数字进行返回对应数字的下表，符合条件的第一个数字如果没有符合条件的，则返回-1

    //数组实例的includes()
    //用来查找一个数组中是否包含某个数
    // let arr=[1,2,3]
    // console.log(arr.includes(2))//返回true
    // console.log(arr.includes(5))//返回false

    //数组实例的flat(),flatMap()
    //在数组中会有二位u数组的出现，我们可以用flat进行将嵌套数组拉平
    // let arr=[1,2,3,[4,6,8]]
    // console.log(arr.flat())//输出[1, 2, 3, 4, 6, 8]
    //flat(x)默认为拉平一层数组，有个参数x默认可以没有，传参为数字，为多少就是要拉平多少层嵌套的数组

    // //flatMap()相当于对每个成员执行一个和函数，相当于执行了map()
    // let arr=[1,2,3,4]
    // arr.flatMap(v=>{
    //   console.log(v)
    // })
    // // flatMap(x,y,z)有三个参数，x为当前数组成员,y为当前数组成员位置，z为原数组
    //flatMap()只能展开一层数组


  }
  render() {
    return (
      <>
        数组拓展
      </>
    )
  }
}

import React, { Component } from 'react'
import _ from "lodash"
export default class componentName extends Component {
  componentDidMount() {
    //深浅拷贝

    // function clone(v) {
    //   if (!v || typeof v !== 'object') {//判断一下接收的参数是不是引用数据类型
    //     console.log("2222222222")
    //   } else {
    //     console.log(v.constructor)
    //     var a = v.constructor === Array ? [] : {}; //创建一个新的对象来保存拷贝,.constructor可以获取接收参数的类型是数组还是对象
    //     for (var keys in v) {//循环参数
    //       if (v.hasOwnProperty(keys)) {
    //         console.log(v.hasOwnProperty(keys))//判断一下对象中是否含有这个属性,自身属性的存在
    //         if (v[keys] && typeof v[keys] === 'object') { //如果属性是对象，递归拷贝
    //           a[keys] = clone(v[keys]);//递归重复调用进行拷贝
    //         } else { //如果属性不是对象就直接进行复制
    //           a[keys] = v[keys];
    //         }
    //       }
    //     }
    //     return a;
    //   }
    // }
    // let a = {
    //   name:"name",
    //   age:"age",
    // }
    // let b1 = a
    // let b2 = clone(a)
    // console.log(b1, b2)//b1还有b2都一样
    // a.name = "王潇瑜"//更改原始对象的属性name的值
    // console.log(b1, b2)//b1的name为王潇瑜,b2还是宋云海这就实现了一个b2的深拷贝,b1的浅拷贝




    //第二种方法
    //使用js内置对象进行深拷贝
    // function clone2(obj) {
    //   var a = JSON.stringify(obj),
    //   a = JSON.parse(a);
    //   return a;
    //   }
    //   let a={
    //     name:"name"
    //   }
    //   let b=a
    //   let c=clone2(a)
    //   console.log(b,c)
    //   a.name="asd"
    //   console.log(b,c)

    // 第三种方法lodash.cloneDeep(value)
    // let a={
    //       name:"name"
    //     }
    // let b1=a
    // let b2=_.cloneDeep(a)
    // console.log(b1,b2)
    // a.name="asd"
    // console.log(b1,b2)
    // value是要进行深拷贝的东西

    // 第四种就是juqery中的extend()方法
  }
  render() {
    return (
      <>
        sssssssssssssssssssssssssssss
      </>
    )
  }
}
